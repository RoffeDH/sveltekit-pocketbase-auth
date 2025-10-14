/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1079738880")

  // update collection data
  unmarshal({
    "name": "character"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1079738880")

  // update collection data
  unmarshal({
    "name": "members_"
  }, collection)

  return app.save(collection)
})
