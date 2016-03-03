var should = require('should'); 
var assert = require('assert');
var request = require('supertest');
var mongoose = require('mongoose');

var current_id = "";
describe('Routing', function() {
  var url = 'http://localhost:3010';
  before(function(done) {
    // In our tests we use the test db
    mongoose.connect('mongodb://localhost:27017/backoffice');                            
    done();
  });

  describe('ProductCategory', function() {
    it('should list all product categories GET', function(done) {
        request(url)
        .get('/product_categories')
        .end(function(err, res){
            res.status.should.equal(200);
            done();
        });
    });

    it('should correctly created a product category', function(done) {
      var product_category = {
        name: getRandom(),
        erp_code: 'ERP01',
        description: "Bags category",
        status: 1
      };
    request(url)
    .post('/product_categories')
    .send(product_category)
    .end(function(err, res) {
          if (err) {
            throw err;
          }
            res.body.data.should.have.property('_id');
            res.body.data.should.have.property('name');
            res.body.data.erp_code.should.equal('ERP01');                    
            res.body.data.description.should.equal("Bags category");
            res.body.data.status.should.equal(1);
            current_id = res.body.data._id
            done();
        });
    });
    
    it('should correctly get a product category', function(done){
    request(url)
        .get('/product_categories/56d802cf6f8cc0da350d428c')
        .end(function(err,res) {
            if (err) {
                throw err;
            }
            res.body.data.should.have.property('_id');
            res.body.data.should.have.property('name');
            res.body.data.should.have.property('erp_code');   
            res.body.data.should.have.property('description');
            res.body.data.should.have.property('status');      
            done();
        });
    });
    
    it('should correctly update a product category', function(done){
    var product_category = {
        _id: "56d802cf6f8cc0da350d428c",
        name: 'ART',
        erp_code: 'ERP02',
      };
    request(url)
        .put('/product_categories/56d802cf6f8cc0da350d428c')
        .send(product_category)
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err,res) {
            if (err) {
                throw err;
            }
            res.body.data.should.have.property('_id');
            res.body.data.name.should.equal('ART');
            res.body.data.erp_code.should.equal('ERP02');   
            done();
        });
    });
  });
});

function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

function getRandom(){
    return randomString(4, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
}
