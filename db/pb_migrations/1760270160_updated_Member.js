/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1079738880")

  // update collection data
  unmarshal({
    "name": "members_"
  }, collection)

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number2704281778",
    "max": null,
    "min": null,
    "name": "age",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1079738880")

  // update collection data
  unmarshal({
    "name": "Member"
  }, collection)

  // remove field
  collection.fields.removeById("number2704281778")

  return app.save(collection)
})
