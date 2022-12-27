// קישור לספריית אקספרס
const { json } = require('express');
const express = require('express');
const morgan=require('morgan');
const mysql=require('mysql');
const authh=require('./api/v1/middlewares/auth');



// יצירת מופע של  אקספרס
const app = express();
const ProductRouter=require('./api/v1/routes/product');
// הוספת שכבה ביניים של מורגן שמתעדת כל פנייה לשרת בקונסול


const connectin = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'shop'
});
// חיבור לבסיס הנתונים 
connectin.connect(function(err) {
 if (err) {// במידה והיתתה שגיאה אז ייכנס למשתנה הזה פירוט של השגיאה
  console.log(err.message);
 } 
 else{//במידה ולא הייתה שגיאה מדפיסים למסך הודעה כללית
  console.log("Connected to DataBase");
 }
})
 
global.mysql=connectin;// שמירת החיבור לבסיס הנתונים כגלובאלי כך שיוכר בכל מקום בתוכנית
app.use(  function(req,res,next) 
{
  let flag = false;
  const myip = req.socket.remoteAddress;
  let arr = ['123456','1234',myip];
  for (let index = 0; index < arr.length; index++)
   {
      if (arr[index]== myip) 
      {
        flag = true;
        break;
      }       
   }
   if (flag) {
    console.log("Work you Connect in from Ip " +myip);
    next();
   }
   if (flag==false) {
     return res.status(401).json({msg:"Not Connect In "});  
   }
});
app.use(morgan('dev'));
// הוספת שכבה של ניתוב עבור מוצרים
app.use("/product",ProductRouter);


// app.use(function name(req,res,next) {
//   // פקודה שמגלה את האייפי של השולח
//   console.log("Connect From Ip : " + req.socket.remoteAddress);
//   next();
  
// })
app.get("/",(req,res)=> {res.status(200).json({"Message": "My Ecommerce Api App"})});
module.exports=app;