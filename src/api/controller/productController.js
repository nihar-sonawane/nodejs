//from routes (productRoutes.js)
const mongooes = require("mongoose");

const Product = require("../../models/products");

exports.getProduct = (req, res) => {
  Product.find()
    .select("name price _id")
    .exec()
    .then((docs) => {
      // console.log("all doc=>", docs);
      const response = {
        count: docs.length,
        tables: docs.map((doc) => {
          return {
            name: doc.name,
            price: doc.price,
            _id: doc._id,
            request: {
              type: "GET",
              url: "http://localhost",
            },
          };
        }),
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.postProduct = (req, res) => {
  const product = new Product({
    _id: new mongooes.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  product
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "handling POST req to /products",
        createdProduct: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
      console.log(err);
    });
};
