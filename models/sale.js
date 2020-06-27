const db = require('../services/db-connection');
const GET_SALE_BY_ID = 'SELECT * from sale where idSale = ?';
const GET_ALL_SALES = 'SELECT * from sale';


class Sale{
    constructor(idSale, date, idCompany, amount, charge ) {
        this.idSale = idSale;
        this.date = date;
        this.idCompany = idCompany;
        this.amount = amount;
        this.charge = charge;
    }

    static getSaleById(id) {
        return new Promise(function (resolve, reject) {
            db.query(GET_SALE_BY_ID, [id], function (error, results) {
                if (error) {
                    reject(error);
                } else {
                    const {idSale, date, idCompany, amount, charge} = results[0];
                    resolve(new Sale(idSale, date, idCompany, amount, charge));
                }
              });
        })
    }

    static getAllSales() {
        return new Promise(function (resolve, reject) {
            db.query(GET_ALL_SALES, function (error, results) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        resolve(results.map((sale) => {
                            const  {idSale, date, idCompany, amount, charge} = sale;
                            return new Sale(idSale, date, idCompany, amount, charge);
                        }));
                    } catch(err) {
                        reject(err);
                    }
                }
              });
        })
    }
}

module.exports = Sale;