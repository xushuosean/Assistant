const { MeiliSearch } = require('meilisearch')
const movies = require('../public/movies.json')

// app/extend/application.js
module.exports = {
  get client() {
    const client = new MeiliSearch({ host: 'http://localhost:7700', apiKey: 'MASTER_KEY' })
    client.index('movies').addDocuments(movies)

    return client
  },
};