const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express=require("express");
const app = express(); 
const port = 3000;
const path=require("path");
const methodoverride=require("method-override");
app.use(methodoverride("_method"));
app.use(express.urlencoded({extended:true}));
const { connected } = require('process');
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));



app.get("/",(req,res)=>{
  connection.query("SELECT count(*) from user",(err,result)=>{
    console.log(result[0]["count(*)"]);
          // res.send(result[0]["count(*)"]);
          let val=result[0]["count(*)"];
          res.render("home.ejs",{val});
  });
})
const connection = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  database: 'delta',
  password:"pradip@123"
});

app.get("/user",(req,res)=>{
  connection.query("SELECT * FROM user",(err,result)=>{
    if(err) {
      console.log(err);
    }
    else{
      res.render("user.ejs",{result}); 
    }
    // console.log(result);
    });
  }
)

app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q= `SELECT * FROM user WHERE id='${id}'`;
  connection.query(q,(err,result)=>{
    res.render("edit.ejs",{result});
   })
})

app.patch("/user/:id",(req,res)=>{
  let {id}=req.params;
  let {passward:formpass ,username: formusername}=req.body;
  let q= `SELECT * FROM user WHERE id='${id}'`;

  connection.query(q,(err,result)=>{
    if (formpass!=result[0].passward) {
      res.send("Wrong pass");   
    }else{
       let q2=`UPDATE user SET  username='${formusername}' WHERE id='${id}';`;
       connection.query(q2,(err,result)=>{
        if (err) {
          throw err;
        }
        res.send(result);
       })
    } 
   })
})

app.listen(port,()=>{
  console.log(`server is running on port ${port}`);
});


  let  get= ()=> {
    return [faker.datatype.uuid(),
            faker.internet.userName(),
            faker.internet.email(),
            faker.internet.password(),
    ];
  };

  // let q="INSERT INTO user (id,username,email,passward) VALUES ?";
  


//  let data=[];

  // for(let i=1;i<=100;i++){
  //     data.push(get());
  // }
  // connection.end();
  // let users=[["123a","123_NEWUSERa","aabc@gmail.com","apass@123"],
  //           ["123b","b123_NEWUSER","babc@gmail.com","bpass@123"]];
//   try {
//     connection.query(q,[data],(err,result)=>{
//         if (err) throw err
//         console.log(result);
//     })
//   } catch (err) {
//     console.log(err);
//   }
//  connection.end();




//   try {
//     connection.query("SHOW TABLES",(err,result)=>{
//         if (err) throw err
        
//         console.log(result);
//     })
//   } catch (err) {
//     console.log(err);
//   }
//  connection.end();



  




