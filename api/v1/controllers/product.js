
const mongoose = require('mongoose');
// ייצוא אובייקט עם חמש פונקציות עבור כל אחת מהפעולות 
// המטרה היא שכל הלוגיקה תשב בקובץ הנוכחי
module.exports={
  GetAllProducts:(req,res)=> {
      const ProductModel = require('../models/product'); // קישור למודל של אוסף המוצרים
      ProductModel.find().then((products)=>{
      console.log(products);
      return res.status(200).json(products);
      });
   
   
  },
  GetProductSById:(req,res)=> {
    const ProductModel = require('../models/product'); // קישור למודל של אוסף המוצרים
    ProductModel.findOne({Pid:req.params.id}).then((product)=>{
    console.log(product);
    return res.status(200).json(product);
    });
},
  UpdateProducts:(req,res)=> {
   
    let connectin= global.mysql;
    const pname =req.body.pname;
    const price = req.body.price;
    const pdesc =req.body.pdesc;
    const picname =req.body.picname;
    let sql= "UPDATE t_products SET pname='" + pname+"', price='" + price+"',pdesc='" + pdesc+"',picname='" + picname+"' WHERE pid="+req.params.id;
    console.log(sql);
    connectin.query(sql,function(err,rows,fields){
      if(err){
        console.log(err.message);
        return res.status(500).json({Msg : err.message});
      }
      else{
        console.log("Ok UPDATE");
        return res.status(200).json({rows});
      }
    });
  },

  AddProducts:(req,res)=> {
   // let connectin= global.mysql;
  
    const ProductModel = require('../models/product'); // קישור למודל של אוסף המוצרים
    ProductModel.insertMany(req.body).then((result)=>{
    console.log(result);
    return res.status(200).json(result);
    });
  },
  DeleteProductById:(req,res)=> {
    let connectin=global.mysql;
    connectin.query("DELETE * from t_products where pid ="+req.params.id,function(err,rows,fields){
      if(err){
        console.log(err.message);
        return res.status(500).json({Msg : err.message});
      }
      else{
        console.log("OK DELETE");
        return res.status(200).json({rows});
      }
    });

  },



};