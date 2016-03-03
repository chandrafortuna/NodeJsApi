var ProductCategoryController = require('./controllers/ProductCategoryController');
var ProductController = require('./controllers/ProductController');
var ProductDetailController = require('./controllers/ProductDetailController');

module.exports = function(server){
    // Category Router
	server.post("/product_categories", ProductCategoryController.createProductCategory)
    server.put("/product_categories/:id", ProductCategoryController.updateProductCategory)
    server.del("/product_categories/:id", ProductCategoryController.deleteProductCategory)
    server.get("/product_categories/:id", ProductCategoryController.viewProductCategory)
    server.get("/product_categories", ProductCategoryController.findAll)
	
    // Product Router
	server.post("/products", ProductController.createProduct)
    server.put("/products/:id", ProductController.updateProduct)
    server.del("/products/:id", ProductController.deleteProduct)
    server.get("/products/:id", ProductController.viewProduct)
    server.get("/products", ProductController.findAll)
    
    // Product Detail Router
	server.post("/product_details", ProductDetailController.createProduct)
    server.put("/product_details/:id", ProductDetailController.updateProduct)
    server.del("/product_details/:id", ProductDetailController.deleteProduct)
    server.get("/product_details/:id", ProductDetailController.viewProduct)
    server.get("/product_details", ProductDetailController.findAll)
};
