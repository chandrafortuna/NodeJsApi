var mongoose = require("mongoose");
var Schema   = mongoose.Schema;
 
var ProductCategorySchema = new Schema({
//     _id: Number,
    name: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    erp_code: {
        type: String,
        required: true
    },
    description: String,
    status: Number,
    products:[{ type:Schema.ObjectId, ref:"Product" }]
});
mongoose.model('ProductCategory', ProductCategorySchema);