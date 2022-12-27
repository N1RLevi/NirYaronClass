

// ייצוא אובייקט עם חמש פונקציות עבור כל אחת מהפעולות 
// המטרה היא שכל הלוגיקה תשב בקובץ הנוכחי
module.exports={
  GetAllProducts:(req,res)=> {
    let connectin=global.mysql;
    connectin.query("select * from t_products",function(err,rows,fields){
      if(err){
        console.log(err.message);
        return res.status(500).json({Msg : err.message});
      }
      else{
        console.log("Ok");
        return res.status(200).json({rows});
      }
    });
   
  },
  GetProductSById:(req,res)=> {
    let connectin=global.mysql;
    connectin.query("select * from t_products where pid ="+req.params.id,function(err,rows,fields){
      if(err){
        console.log(err.message);
        return res.status(500).json({Msg : err.message});
      }
      else{
        console.log("Ok");
        return res.status(200).json({rows});
      }
    });
  },
  UpdateProducts:(req,res)=> {
    const {pname,price,pdesc,picname}=req.body;
    connectin.query("update t_products set " + req.params.id  )
  //  return res.status(200).json({Msg:"Update Product By ID " + req.params.id})
  },

  AddProducts:(req,res)=> {
    return res.status(200).json({Msg:"Add New Product "})
  },
  DeleteProductById:(req,res)=> {
    return res.status(200).json({Msg:"Delete Product By ID "+ req.params.id})
  },



};