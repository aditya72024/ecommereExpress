// const fs = require('fs');
// const path = require('path');
// const rootDir = require("../util/path");
// const p = path.join(rootDir, 'data', 'products.json');
const db = require('../util/database');
const Cart = require('./cart');
// const getProductsFromFile = cb => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

module.exports = class Product {
  constructor(id, title, price, imageUrl, description) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
    
  }

  save() {
    
    // getProductsFromFile(products => {
    //   if(this.id)
    //   {
    //     const existingProductIndex = products.findIndex(prods => prods.id === this.id)
    //     const updatedProducts = [...products];
    //     updatedProducts[existingProductIndex] = this; 
    //     fs.writeFile(p, JSON.stringify(updatedProducts), err => {
    //       console.log(err);
    //     });
    //   }else{
    //     this.id = Math.random().toString();
    //     products.push(this);
    //     fs.writeFile(p, JSON.stringify(products), err => {
    //       console.log(err);
    //     });
    //   }

    // });

    console.log(parseFloat(this.price));
    console.log(this.title, parseFloat(this.price), this.description, this.imageUrl);

    return db.execute(
      'INSERT INTO products (title, price, description, imageUrl) VALUES (?, ?, ?, ?)',
      [this.title, parseFloat(this.price), this.description, this.imageUrl]);
     

    
  }

  static fetchAll(cb) {
    // getProductsFromFile(cb);
    return db.execute('SELECT * FROM products');
  }

  static deletById(id) {
    console.log(id)

    return db.execute('DELETE FROM products WHERE products.id = ?',[id])
    // getProductsFromFile(products => {
    //   const updatedProducts = products.filter(prod => prod.id !== id)
    //   fs.writeFile(p,JSON.stringify(updatedProducts), err => {
    //     if(!err){
    //       console.log(id,"successful");

    //     }
    //   })
    // })
  }

  static findById(id) {

    return db.execute('SELECT * FROM products WHERE products.id = ?',[id])
    // getProductsFromFile(products => {
    //   const product = products.find(p => p.id === id)
    //   cb(product);
    // })

  }
};
