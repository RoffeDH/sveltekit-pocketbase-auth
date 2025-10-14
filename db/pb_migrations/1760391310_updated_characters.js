/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1079738880")

  // update collection data
  unmarshal({
    "name": "members"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1079738880")

  // update collection data
  unmarshal({
    "name": "characters"
  }, collection)

  return app.save(collection)
})
