/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2829451805")

  // update collection data
  unmarshal({
    "name": "blaj"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2829451805")

  // update collection data
  unmarshal({
    "name": "Members"
  }, collection)

  return app.save(collection)
})
