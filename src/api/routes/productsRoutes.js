const express = require("express");
const router = express.Router();
const mongooes = require("mongoose");

const product = require("../controller/productController");

//from app.js
router.get("/", product.getProduct);

router.post("/", product.postProduct);

// router.post("/", (req, res) => {s
//     // const product = {
//     //   name: req.body.name,
//     //   price: req.body.price,
//     // };
//     const product = new Product({
//       _id: new mongooes.Types.ObjectId(),
//       name: req.body.name,
//       price: req.body.price,
//     });
//     product
//       .save()
//       .then((result) => {
//         console.log(result);
//         res.status(201).json({
//           message: "handling POST req to /products",
//           createdProduct: result,
//         });
//       })
//       .catch((err) => {
//         res.status(500).json({
//           error: err,
//         });
//         console.log(err);
//       });
//   });

module.exports = router;
