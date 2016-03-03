var mongoose = require("mongoose");
var Schema   = mongoose.Schema;
var relationship = require("mongoose-relationship");
var ProductSchema = new Schema({
//     _id: Number,
    sku: {
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    name: String,
    description: String,
    status: Number,
    productCategory: { type:Schema.ObjectId, ref:"ProductCategory", childPath:"products" },
    productDetails:[{ type:Schema.ObjectId, ref:"ProductDetail" }]
});
ProductSchema.plugin(relationship, { relationshipPathName:'productCategory' });
mongoose.model('Product', ProductSchema);