//הפעלת פונקציה מתוך ספריית אי אן וי שטוענת את ההגדרות מקובץ דוט אי אן וי
require('dotenv').config();

function SendEmail(u,p) {
  // קרא לגוגל והתחבר באמצעת השם והסיסמה
  console.log("Sent Email to" + u );
}
  // process זה אובייקט שמייצג את האפליקציה שלי
  SendEmail(process.env.USER_EMAIL,process.env.EMAIL_PASS)
// קישור לספריית פרוטוקול עבודה באינטרנט
const http = require('http');
// קישור לאפליקציה שכתבנו בקובץ החיצוני
const app = require('./app');
const port = 3000;
// יצירת אובייקט מסוג שרת אינטרנט
const srv=http.createServer(app);
// הפעלת אובייקט השרת כך שיאזין לבקשות בכתובת הפורט שהגדרנו לו
srv.listen(port,()=>{console.log('Server is Up')});