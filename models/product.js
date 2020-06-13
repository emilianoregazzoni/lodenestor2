const db = require('../services/db-connection');
const GET_PRODUCT_BY_ID = 'SELECT * from product where idProduct = ?';
const GET_ALL_PRODUCTS = 'SELECT * from product';


class Product {
    constructor(idProduct, description, image, name ) {
        this.idProduct = idProduct;
        this.description = description;
        this.image = image;
        this.name = name;
    }

    static getProductById(id) {
        return new Promise(function (resolve, reject) {
            db.query(GET_PRODUCT_BY_ID, [id], function (error, results) {
                if (error) {
                    reject(error);
                } else {
                    const {idProduct, description, image, name} = results[0];
                    resolve(new Product(idProduct, description, image, name));
                }
              });
        })
    }

    static getAllCompanies() {
        return new Promise(function (resolve, reject) {
            db.query(GET_ALL_PRODUCTS, function (error, results) {
                if (error) {
                    reject(error);
                } else {
                    try {
                        resolve(results.map((product) => {
                            const { idProduct, description, image, name} = product;
                            return new Product(idProduct, description, image, name);
                        }));
                    } catch(err) {
                        reject(err);
                    }
                }
              });
        })
    }
}

module.exports = Product;