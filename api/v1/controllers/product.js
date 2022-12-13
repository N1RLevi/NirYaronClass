// ייצוא אובייקט עם חמש פונקציות עבור כל אחת מהפעולות 
// המטרה היא שכל הלוגיקה תשב בקובץ הנוכחי
module.exports={
  GetAllProducts:(req,res)=> {
    return res.status(200).json({Msg:"All Product "});
  },
  GetProductSById:(req,res)=> {
    return res.status(200).json({Msg:"Get Product By ID "+ req.params.id})
  },
  UpdateProducts:(req,res)=> {
    return res.status(200).json({Msg:"Update Product By ID " + req.params.id})
  },

  AddProducts:(req,res)=> {
    return res.status(200).json({Msg:"Add New Product "})
  },
  DeleteProductById:(req,res)=> {
    return res.status(200).json({Msg:"Delete Product By ID "+ req.params.id})
  },

};