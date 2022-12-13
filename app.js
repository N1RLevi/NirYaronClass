// קישור לספריית אקספרס
const express = require('express');
// יצירת מופע של  אקספרס
const app = express();

const ProductRouter=require('./api/v1/routes/product');
// הוספת שכבה של ניתוב עבור מוצרים
app.use("/product",ProductRouter);



app.get("/",(req,res)=> {res.status(200).json({"Message": "My Ecommerce Api App"})});




module.exports=app;