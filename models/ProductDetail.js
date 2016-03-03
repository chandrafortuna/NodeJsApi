var mongoose = require("mongoose");
var Schema   = mongoose.Schema;
var relationship = require("mongoose-relationship");
var ProductDetailSchema = new Schema({
    title: String,
    languageCode: String,
    description: String,
    status: Number,
    product: { type:Schema.ObjectId, ref:"Product", childPath:"productDetails" }
});
ProductDetailSchema.plugin(relationship, { relationshipPathName:'product' });
mongoose.model('ProductDetail', ProductDetailSchema);