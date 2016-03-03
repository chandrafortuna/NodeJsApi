var mongoose = require('mongoose'),
    Product = mongoose.model("Product"),
    ObjectId = mongoose.Types.ObjectId
 
exports.findAll = function(req, res){
  Product.find({}).populate('productDetails').exec(function(err, product) {
  if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            if (product) {
                res.json({
                    type: true,
                    data: product
                })
            } else {
                res.json({
                    type: false,
                    data: "Product not found"
                })
            }
        }
    })
};

exports.createProduct = function(req, res, next) {
    var ProductModel = new Product(req.body);
    ProductModel.save(function(err, product) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: product
            })
        }
    })
}
 
exports.viewProduct = function(req, res, next) {
    Product.findById(new ObjectId(req.params.id), function(err, product) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            if (Product) {
                res.json({
                    type: true,
                    data: product
                })
            } else {
                res.json({
                    type: false,
                    data: "Product : " + req.params.id + " not found"
                })
            }
        }
    })
}
 
exports.updateProduct = function(req, res, next) {
    var updatedProductModel = new Product(req.body);
    Product.findByIdAndUpdate(new ObjectId(req.params.id), updatedProductModel, function(err, product) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            if (product) {
                res.json({
                    type: true,
                    data: product
                })
            } else {
                res.json({
                    type: false,
                    data: "Product : " + req.params.id + " not found"
                })
            }
        }
    })
}
 
exports.deleteProduct = function(req, res, next) {
    Product.findByIdAndRemove(new Object(req.params.id), function(err, product) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: "Product : " + req.params.id + " deleted successfully"
            })
        }
    })
}