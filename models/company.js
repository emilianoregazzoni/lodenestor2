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

    static getAllCompanies() {
        return new Promise(function (resolve, reject) {
            db.query(GET_ALL_COMPANIES, function (error, results) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        resolve(results.map((company) => {
                            const { idCompany, RUT, mail, direction, name} = company;
                            return new Company(id, name, description);
                        }));
                    } catch(err) {
                        reject(err);
                    }
                }
              });
        })
    }
}

module.exports = Company;