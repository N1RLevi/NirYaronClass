const bcrypt =require('bcrypt');
const pass="abc123";
const saltRounds=10;
                          // פה HASHPASS מחזיר סטרינג ארוך שזה הצפנה של הסיסמא
// הפנוקציה עובדת כאסיכרוני
// ולכן הפעלות שנרצה לעשות עם HASSPASS 
//יהיה בתוך הפונקציה בתוך ELSE
  bcrypt.hash(pass,saltRounds,(err,hashPass)=>{
  if (err) 
  {
  console.log(err.message);  
  }
  else
  console.log(hashPass);
})

