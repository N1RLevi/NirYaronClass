// קישור לספריית אקספרס
const { json } = require('express');
const express = require('express');
const morgan=require('morgan');

 const myip = json.ip;
 let security = ['123456',myip,'1234'];


// יצירת מופע של  אקספרס
const app = express();
const ProductRouter=require('./api/v1/routes/product');
// הוספת שכבה ביניים של מורגן שמתעדת כל פנייה לשרת בקונסול
app.use(morgan('dev'));
app.use(function checkip(security,myip,next) {
  for (let index = 0; index < security; index++) {
      if (security[index]== myip) {
        console.log("i know your ip you can get in ! Your Ip is :" + myip);
        next(); 
      }  
      else{
         {
          status(404).json({Msg:"You Dont Have access "})
        }
      }   
  }
})
// הוספת שכבה של ניתוב עבור מוצרים
app.use("/product",ProductRouter);
app.use(function name(req,res,next) {
  // פקודה שמגלה את האייפי של השולח
  console.log("Conection From Ip : " + req.socket.remoteAddress);
  next();
  
})
app.get("/",(req,res)=> {res.status(200).json({"Message": "My Ecommerce Api App"})});
module.exports=app;