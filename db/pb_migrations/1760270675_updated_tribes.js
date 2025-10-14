/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1233860662")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_4036582104",
    "hidden": false,
    "id": "relation3286692833",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "current_location",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1233860662")

  // remove field
  collection.fields.removeById("relation3286692833")

  return app.save(collection)
})
