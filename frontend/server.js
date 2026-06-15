const express = require("express");
const axios = require("axios");

const app = express();

const PORT = 8080;

const CATALOG_URL =
process.env.CATALOG_URL ||
"http://catalog-service:3000";

app.get("/", async (req, res) => {

   try {

       const response =
       await axios.get(`${CATALOG_URL}/products`);

       let html = `
       <html>
       <head>
           <title>Smart Retail Platform</title>
       </head>
       <body>
           <h1>Smart Retail Commerce Platform</h1>
           <h2>Products</h2>
           <ul>
       `;

       response.data.forEach(product => {

           html += `
           <li>
               ${product.name}
               - ₹${product.price}
               - Stock: ${product.stock}
           </li>
           `;

       });

       html += `
           </ul>
       </body>
       </html>
       `;

       res.send(html);

   } catch (err) {

       res.send("Catalog Service Unavailable");

   }

});

app.listen(PORT, () => {

   console.log(`Frontend running on port ${PORT}`);

});
