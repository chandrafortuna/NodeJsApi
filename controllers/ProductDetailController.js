var mongoose = require('mongoose'),
    ProductDetail = mongoose.model("ProductDetail"),
    ObjectId = mongoose.Types.ObjectId
 
exports.findAll = function(req, res){
  ProductDetail.find({},function(err, productDetail) {
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
                    data: productDetail
                })
            } else {
                res.json({
                    type: false,
                    data: "Product Detail not found"
                })
            }
        }
    })
};

exports.createProduct = function(req, res, next) {
    var ProductModel = new ProductDetail(req.body);
    ProductModel.save(function(err, productDetail) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: productDetail
            })
        }
    })
}
 
exports.viewProduct = function(req, res, next) {
    ProductDetail.findById(new ObjectId(req.params.id), function(err, productDetail) {
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
                    data: productDetail
                })
            } else {
                res.json({
                    type: false,
                    data: "Product Detail : " + req.params.id + " not found"
                })
            }
        }
    })
}
 
exports.updateProduct = function(req, res, next) {
    var updatedProductModel = new Product(req.body);
    ProductDetail.findByIdAndUpdate(new ObjectId(req.params.id), updatedProductModel, function(err, productDetail) {
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
                    data: productDetail
                })
            } else {
                res.json({
                    type: false,
                    data: "Product Detail : " + req.params.id + " not found"
                })
            }
        }
    })
}
 
exports.deleteProduct = function(req, res, next) {
    ProductDetail.findByIdAndRemove(new Object(req.params.id), function(err, productDetail) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: "Product Detail : " + req.params.id + " deleted successfully"
            })
        }
    })
}