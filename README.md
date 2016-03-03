
## Getting Started

REST API with CRUD features using restify REST API framework in Node.js

###List API:

```
#Product Category
GET /product_categories
POST /product_categories
PUT /product_categories/:id
GET /product_categories/:id
DELETE /product_categories/:id

#Product
GET /products
POST /products
PUT /products/:id
GET /products/:id
DELETE /products/:id

#Product Details
GET /product_details
POST /product_details
PUT /product_details/:id
GET /product_details/:id
DELETE /product_details/:id

```

The easiest way to get started is to clone the repository:

```
# Get the latest snapshot
git clone https://github.com/chandrafortuna/NodeJsApi.git

# Change directory
cd NodeJsApi

# Install NPM dependencies
npm install

node server.js
```

Get all product categories:

```
GET /product_categories

{
  "type": true,
  "data": [
    {
      "_id": "56d802cf6f8cc0da350d428c",
      "name": "ART",
      "erp_code": "ERP02",
      "description": "Bags",
      "status": 1,
      "__v": 0,
      "products": []
    },
    {
      "_id": "56d8397f06d9ac083bb0d1c2",
      "name": "ACCESSORIES",
      "erp_code": "ERP01",
      "description": "Bags category",
      "status": 1,
      "__v": 0,
      "products": []
    }
  ]
}
```
Post product categories:

```
POST /product_categories

params:
{
    "name": "BAG",
    "erp_code": "002",
    "description": "Bags",
    "status": 1
}

return:
{
  "type": true,
  "data": {
    "__v": 0,
    "name": "BAG",
    "erp_code": "002",
    "description": "Bags",
    "status": 1,
    "_id": "56d858f213a4888246abe643",
    "products": []
  }
}

```
Update product categories:

```
PUT /product_categories/:id

params:
{     
    "_id": "56d6ef4fae15b270307d5667",
    "name": "BAGS",
    "erp_code": "002",
    "description": "Bags"
} 
```
DELETE /product_categories/:id

## Authors

* **Adnin Devit Chandra**

