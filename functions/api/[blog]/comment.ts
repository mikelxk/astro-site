// import * as Realm from "realm-web"

// type Document = globalThis.Realm.Services.MongoDB.Document

// const App = new Realm.App("application-0-denvi")
// type ObjectId = Realm.BSON.ObjectID
// const credentials = Realm.Credentials.apiKey(
//   "xbYU3SnJyE8Zs6GoGe9n8rhif76JEverPAyLHjmb4ncps762jVllas2JuVUZguIo"
// )
// interface Comment {
//   _id: ObjectId
//   post_name: string
//   comment_time: Date
//   name: string
//   text: string
// }
// async function getColletcion() {
//   const user = await App.logIn(credentials)
//   const client = user.mongoClient("mongodb-atlas")
//   return client.db("blog").collection<Comment>("comments")
// }
export const onRequest: PagesFunction = async context => {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context
  // try {
  //   const collection = await getColletcion()
  //   console.log(await collection.find({ post_name: params }))
  // } catch (err) {
  //   console.error(err)
  // }
  return new Response("Hello, world!")
}
export const onPostRequest: PagesFunction = async context => {
  // Contents of context object
  const {
    request, // same as existing Worker API
    env, // same as existing Worker API
    params, // if filename includes [id] or [[path]]
    waitUntil, // same as ctx.waitUntil in existing Worker API
    next, // used for middleware or to fetch assets
    data, // arbitrary space for passing data between middlewares
  } = context
  return new Response("Hello, world!")
}
