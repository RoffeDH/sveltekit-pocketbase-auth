/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4036582104")

  // update collection data
  unmarshal({
    "name": "areas"
  }, collection)

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "json779186462",
    "maxSize": 0,
    "name": "gathering_table",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4036582104")

  // update collection data
  unmarshal({
    "name": "area"
  }, collection)

  // remove field
  collection.fields.removeById("json779186462")

  return app.save(collection)
})
