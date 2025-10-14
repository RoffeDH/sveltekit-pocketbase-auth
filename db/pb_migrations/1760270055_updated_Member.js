/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1079738880")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1079738880",
    "hidden": false,
    "id": "relation4249886058",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "parents",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1079738880")

  // remove field
  collection.fields.removeById("relation4249886058")

  return app.save(collection)
})
