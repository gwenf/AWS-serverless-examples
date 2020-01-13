# Comparison of Frameworks for AWS Serverless Applications

* Claudia.js
* The Serverless Framework
* SAM

Please see the [companion video series](https://www.youtube.com/playlist?list=PLFBirL3MAv2_1ASjvgPa3TVgJ2yQ09z31).

## API

`/pets`

* GET > retrieve all orgs
* POST > create new org

`/pets/{id}`

* GET
* PUT
* DELETE

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

**/pets/{id}**

* get
* put
* delete

## Schema

**pets**

* id: UUID (pk)
* petName: String
* species: String, 'cat' or 'dog'
* age: Number {years}
* description: String
* weight: Number (pounds)

