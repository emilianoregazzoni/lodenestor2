const db = require('../services/db-connection');
const GET_COMPANY_BY_ID = 'SELECT * from company where idCompany = ?';
const GET_ALL_COMPANIES = 'SELECT * from company';


class Company {
    constructor(idCompany, RUT, mail, direction, name) {
        this.idCompany = idCompany;
        this.RUT = RUT;
        this.mail = mail;
        this.direction = direction;
        this.name = name;
    }

    static getCompanyById(id) {
        return new Promise(function (resolve, reject) {
            db.query(GET_COMPANY_BY_ID, [id], function (error, results) {
                if (error) {
                    reject(error);
                } else {
                    const { idCompany, RUT, mail, direction, name} = results[0];
                    resolve(new Company(idCompany, RUT, mail, direction, name));
                }
              });
        })
    }


    static findCompanyByName(name) {
        return new Promise((resolve, reject) => { 
            db.query(GET_COMPANY_BY_ID, name, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result ? result[0] : null);
                }
            });
        });
    }

    static getAllCompanies() {
        return new Promise(function (resolve, reject) {
            db.query(GET_ALL_COMPANIES, function (error, results) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        resolve(results.map((company) => {
                            const { RUT, mail, direction, name} = company;
                            return new Company(id, name, description);
                        }));
                    } catch(err) {
                        reject(err);
                    }
                }
              });
        })
    }


static newCompany(parms) {
    return new Promise((resolve, reject) => {
        const {rut, mail, direction, name} = parms;
        this.findCompanyByName(name)
            .then((find) => {
                if (!find) {       
                        const newCompany = {
                            rut,
                            mail,
                            direction,
                            name
                        };

                        db.query('INSERT INTO company SET ?', newCompany, (error, results, fields) => {
                            if (error) {
                                console.log('Se produjo un error');
                                reject(error);
                            } else {
                                resolve(new Company(newCompany.name, null));
                            }
                        });
                } else {
                    rejected('Esa empresa ya existe, reintente')
                }
            })
            .catch((error) => {
                rejected(error);
            });
    });

    }

} // cierre clase

module.exports = Company;