# Comparison of Frameworks for AWS Serverless Applications

* Claudia.js
* The Serverless Framework
* SAM

Please see the [companion video series](https://www.youtube.com/playlist?list=PLFBirL3MAv2_1ASjvgPa3TVgJ2yQ09z31).

## API

`/pets`

* GET > retrieve all pets
* POST > create new pet

Example POST Body:

```json
{
  "name": "Bosco",
  "species": "cat",
  "age": 19,
  "description": "Friendly black cat. Outdoor/indoor.",
  "weight": 13
}
```

`/pets/{id}`

* GET
* PUT
* DELETE

## Schema

**pets**

* id: UUID (pk)
* petName: String
* species: String, 'cat' or 'dog'
* age: Number {years}
* description: String
* weight: Number (pounds)

