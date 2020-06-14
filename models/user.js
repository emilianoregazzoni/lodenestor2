const db = require('../services/db-connection');
const GET_USER_BY_ID = 'SELECT * from user where idUser = ?';
const GET_ALL_USERS = 'SELECT * from user';


class User {

  /*  var username = null;
    var password = null;
*/

    constructor(idUser, idPofile, user, password, idCompany ) {
        this.idUser = idUser;
        this.idPofile = idPofile;
        this.user = user;
        this.password = password;
        this.idCompany = idCompany;
    }

    static getUserById(id) {
        return new Promise(function (resolve, reject) {
            db.query(GET_USER_BY_ID, [id], function (error, results) {
                if (error) {
                    reject(error);
                } else {
                    const {idUser, idPofile, user, password, idCompany} = results[0];
                    resolve(new User(idUser, idPofile, user, password, idCompany));
                }
              });
        })
    }

    static getAllUsers() {
        return new Promise(function (resolve, reject) {
            db.query(GET_ALL_USERS, function (error, results) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        resolve(results.map((usuario) => {
                            const { idUser, idPofile, user, password, idCompany} = usuario;
                            return new Product(idUser, idPofile, user, password, idCompany);
                        }));
                    } catch(err) {
                        reject(err);
                    }
                }
              });
        })
    }

    static register(parms) {
        return new Promise((resolve, reject) => {
            const {idProfile, user, password,idCompany } = parms;
            this.findByUsername(username)
                .then((find) => {
                    if (!find) {
                        const saltRounds = 10;
                        bcrypt.hash(password, saltRounds, function (err, hash) {

                            const newUser = {
                                idProfile,
                                user,
                                password: hash,
                                idCompany
                            };

                            connection.query('INSERT INTO users SET ?', newUser, (error, results, fields) => {
                                if (error) {
                                    console.log('Se produjo un error');
                                    rejected(error);
                                } else {
                                    resolve(new User(newUser.user, null));
                                }
                            });
                        });
                    } else {
                        rejected('Ese username ya fue tomado por otra empresa, reintente')
                    }
                })
                .catch((error) => {
                    rejected(error);
                });
        });
    }

    static login(parms) {
        return new Promise((resolve, reject) => {

            const { username, password } = parms;

            connection.query("SELECT password FROM users WHERE username = ?", [username], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    if (result.length > 0) {
                        bcrypt.compare(password, result[0].password, function (err, compareResult) {
                            if (compareResult) {
                                resolve(new User(username, null))
                            } else {
                                rejected('Usuario y/o contraseña incorrecta');
                            }
                        });
                    } else {
                        rejected('Usuario y/o contraseña incorrecta');
                    }
                }
            });
        });
    }
}

module.exports = User;