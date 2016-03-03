var mongoose = require('mongoose'),
    Category = mongoose.model("ProductCategory"),
    ObjectId = mongoose.Types.ObjectId
//     
//     var mongoose = require('mongoose'),
// Musician = mongoose.model('Musician');

exports.findAll = function(req, res){
  Category.find({}).populate('products').exec(function(err, category) {
  if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            if (category) {
                res.json({
                    type: true,
                    data: category
                })
            } else {
                res.json({
                    type: false,
                    data: "Product Category not found"
                })
            }
        }
    })
};

exports.createProductCategory = function(req, res, next) {
    var categoryModel = new Category(req.body);
    categoryModel.save(function(err, category) {
        if (err) {
            res.status(500);
            res.send(res.json({
                type: false,
                data: "Error occured: " + err
            }))
        } else {
            res.send(res.json({
                type: true,
                data: category
            }))
        }
    })
}
 
exports.viewProductCategory = function(req, res, next) {
    Category.findById(new ObjectId(req.params.id), function(err, category) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            if (category) {
                res.json({
                    type: true,
                    data: category
                })
            } else {
                res.json({
                    type: false,
                    data: "Product Category: " + req.params.id + " not found"
                })
            }
        }
    })
}
 
exports.updateProductCategory = function(req, res, next) {
    var updatedCategoryModel = new Category(req.body);
    Category.findByIdAndUpdate(new ObjectId(req.params.id), updatedCategoryModel, function(err, category) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            if (category) {
                res.json({
                    type: true,
                    data: category
                })
            } else {
                res.json({
                    type: false,
                    data: "Product Category: " + req.params.id + " not found"
                })
            }
        }
    })
}
 
exports.deleteProductCategory = function(req, res, next) {
    Category.findByIdAndRemove(new Object(req.params.id), function(err, category) {
        if (err) {
            res.status(500);
            res.json({
                type: false,
                data: "Error occured: " + err
            })
        } else {
            res.json({
                type: true,
                data: "Product Category: " + req.params.id + " deleted successfully"
            })
        }
    })
}