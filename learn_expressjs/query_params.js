const express = require("express");
const http = require("http");
const { products, people } = require("./data");

app = express();

app.get("/", (req, res) => {
  const newProd = products.map((products) => {
    const { id, name, image } = products;
    return { id, name, image };
  });
  res.json(newProd);
});

// app.get("/api/products/:productID", (req, res) => {
//   // console.log(req)
//   // console.log(req.params)
//   const { productID } = req.params;

//   const singleProduct = products.find(
//     (product) => product.id === Number(productID)
//   );
//   if (!singleProduct) {
//     return res.status(404).send("Product Does Not Exist");
//   }

//   return res.json(singleProduct);
// });

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProd = products.find(
    (product) => product.id === Number(productID)
  );
  res.json(singleProd);
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  res.send("hello world");
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
