/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2829451805")

  // update collection data
  unmarshal({
    "name": "Members"
  }, collection)

  // remove field
  collection.fields.removeById("number3135710965")

  // remove field
  collection.fields.removeById("number766032372")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2829451805")

  // update collection data
  unmarshal({
    "name": "Player"
  }, collection)

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "number3135710965",
    "max": null,
    "min": 0,
    "name": "Grain",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "number766032372",
    "max": null,
    "min": 0,
    "name": "Meat",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
