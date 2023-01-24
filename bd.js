


const bcrypt =require('bcrypt');
const pass="abc123";
const saltRounds=10;
hashFromDB="$2b$10$tEFUB60b1esiQkH1XoBl.O3NkbVZc8YuUnWKb6BdMmD7eVXgZtYMW";
                                   // פה זה מחזיר TRUE או FALSE STATUS 
bcrypt.compare(pass,hashFromDB,(err,status)=>{
  if (err) 
  {
  console.log(err.message);  
  }
  else
  console.log(status);
})


