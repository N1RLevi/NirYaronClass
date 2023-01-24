require('dotenv').config();// טעינת קובץ ההגדרות של דוט אי אנ וי
const jwt=require('jsonwebtoken');
const Privatekey=process.env.Privatekey;
const
token=jwt.sign({Uid:88,Email:"ddd",ww:"xcasd"},Privatekey,{expiresIn:'1h'});
console.log(token);
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVaWQiOjIzLCJpYXQiOjE2NzI3NzAwNzEsImV4cCI6MTY3Mjc3MzY3MX0.6cGmamq2zQMY6OvR7cxL_did9BTLzSUs9pEBPipDgwg
try{
const pelet = jwt.verify(token,Privatekey);
console.log(pelet.Uid);
}
catch(err){
  console.log(err.message);
}