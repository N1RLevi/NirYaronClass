const mongoose=require("mongoose");// חיבור לספריה מונגוס
// הגדרת מחרוזת התיחברות לשרת של מונגו
const Conn_str="mongodb+srv://NirAdmin1:123@cluster0.np6p3xi.mongodb.net/EcomDB";
// פתיחת חיבור לבסיס הנתונים
mongoose.connect(Conn_str);
// הגדרת סכימה / מבנה של אוסף /אבלה של מוצרים
const ProductSchema=mongoose.Schema({
  _id:mongoose.Schema.Types.ObjectId,
  Pid:Number,
  Pname:String,
  Price:Number,
  Pdesc:String,
  PicName:String
  
},{versionKey: false});
// יצירת מודל  מבנה המייצג את אוסף המוצרים בבסיס הנתונים
const ProductModel=mongoose.model('products',ProductSchema);
// הפעלת השיטה
// find
// על המודל והדפסה ללוג את התוצאהת השאילתה 
ProductModel.find().then((products)=>{
console.log(products);
});

ProductModel.insertMany({  
  Pid:14,
  Pname:'Shoko',
  Price:13,
  Pdesc:'best Shoko',
  PicName:'Shoko.jpg'}).then((data)=>{
  console.log(data);
});

