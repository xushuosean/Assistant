const { MeiliSearch } = require('meilisearch')
const movies = require('../public/movies.json')
const datas = require('../public/datas.json')

// app/extend/application.js
module.exports = {
  get client() {
    const client = new MeiliSearch({ host: 'http://localhost:7700', apiKey: 'MASTER_KEY' })
    client.index('movies').addDocuments(movies)

    return client
  },

  get data() {
    const dataClient = new MeiliSearch({ host: 'http://localhost:7700', apiKey: 'MASTER_KEY' })
    dataClient.index('datas').addDocuments(datas)
    dataClient.index('datas').updateSettings({
      searchableAttributes: [
        'title',
        'desc',
        'keyword'
      ]
    })

    return dataClient
  }
};