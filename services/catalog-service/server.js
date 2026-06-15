const express = require("express");

const app = express();

const PORT = 3000;

const products = [

{
   id:1,
   name:"Gaming Laptop",
   price:85000,
   stock:12
},

{
   id:2,
   name:"Mechanical Keyboard",
   price:4500,
   stock:25
},

{
   id:3,
   name:"Gaming Mouse",
   price:2500,
   stock:40
},

{
   id:4,
   name:"4K Monitor",
   price:32000,
   stock:10
}

];

app.get("/products",(req,res)=>{

   res.json(products);

});

app.get("/health",(req,res)=>{

   res.json({

       status:"UP",

       service:"catalog-service",

       version:
       process.env.APP_VERSION || "1.0"

   });

});

app.listen(PORT,()=>{

   console.log(
   `Catalog Service running on port ${PORT}`
   );

});
