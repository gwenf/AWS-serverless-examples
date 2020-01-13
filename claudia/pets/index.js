const ApiBuilder = require('claudia-api-builder');
const AWS = require('aws-sdk');
const uuidv4 = require('uuid/v4');

var api = new ApiBuilder();
var dynamoDb = new AWS.DynamoDB.DocumentClient();

api.post('/pets', function (request) {
  var params = {
    TableName: 'pets-demo',
    Item: {
			id: uuidv4(),
      createdAt: Date.now(),
			updatedAt: Date.now(),
			name: request.body.name,
			species: request.body.species,
			age: request.body.age,
			description: request.body.description,
			weight: request.body.weight
    }
	}
	console.log(params);
  return dynamoDb.put(params).promise();
}, { success: 201 });

api.get('/pets', function (request) {
  return dynamoDb.scan({ TableName: 'pets-demo' }).promise()
      .then(response => response.Items)
});

api.get('/pets/{id}', function (request) {
	var id, params;

	id = decodeURI(request.pathParams.id);
	params = {
		TableName: 'pets-demo',
		Key: {
			id: id
		}
	};

	return dynamoDb.get(params).promise().then(function (response) {
		return response.Item;
	});
});

api.put('/pets/{id}', function (request) {
	var id, params;

	id = decodeURI(request.pathParams.id);
	params = {
		TableName: 'pets-demo',
		Item: {
			id: id,
			...request.body
		}
	};

	return dynamoDb.put(params).promise()
		.then(function () {
			return 'Updated pet: "' + id + '"';
		});
}, {success: { contentType: 'text/plain'}});

api.delete('/pets/{id}', function (request) {
	var id, params;

	id = decodeURI(request.pathParams.id);
	params = {
		TableName: 'pets-demo',
		Key: {
			id: id
		}
  };

	return dynamoDb.delete(params).promise()
		.then(function () {
			return 'Deleted pet: "' + id + '"';
		});
}, {success: { contentType: 'text/plain'}});

module.exports = api;
