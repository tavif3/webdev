var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('webshop', ['products']);
var dbc	= mongojs('webshop', ['categories']);
var dbi	= mongojs('webshop', ['invoices']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/dev"));
app.use(bodyParser.json());

app.get('/products', function (req, res){
	console.log("I received a GET request")

	db.products.find(function (err, docs){
		console.log(docs);
		res.json(docs);
	});

});

app.post('/products', function (req, res){
	console.log(req.body);
	db.products.insert(req.body, function (err, doc) {
		res.json(doc);
	});
});

app.delete('/products/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.products.remove({_id: mongojs.ObjectId(id)}, function (err, doc){
		res.json(doc);
	});
});

app.get('/products/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.products.findOne({_id: mongojs.ObjectId(id)}, function (err, doc){
		res.json(doc);
	});
});

app.put('/products/:id', function (req, res) {
  var id = req.params.id;
  console.log(req.body.name);
  db.products.findAndModify({
    query: {_id: mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, price: req.body.price, category: req.body.category,
    				description: req.body.description, image: req.body.image}},
    new: true}, function (err, doc) {
      res.json(doc);
    }
  );
});

// Get Categories
app.get('/categories', function (req, res) {
    dbc.categories.find(function (err, docs) {
        res.json(docs);
    });
});


// Store Invoices
app.post('/checkout', function (req, res) {
    console.log(req.body);
    dbi.invoices.insert(req.body, function(err, doc) {
        res.json(doc);
    });

});

app.listen(3000);
console.log("Server running on port 3000");
