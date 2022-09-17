'use strict';

const Controller = require('egg').Controller;
const _ = require('lodash')

class SearchController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await this.app.client.index('movies').search()
    ctx.body = res;
  }

  async data() {
    const { ctx } = this;
    const word = ctx.query.wd
    if (word !== '') {
      this.app.data.index('datas').updateSettings({
        searchableAttributes: [
          'title',
          'desc',
          'keyword'
        ]
      })
      const res = await this.app.data.index('datas')
        .search(ctx.query.wd, { limit: 1000 })
      res.hits.forEach(item => {
        item.content = {
          type: item.contentType,
          content: {
            cellId: item.id
          }
        }
      })

      res.group = _.groupBy(res.hits, (item) => item.group)
      ctx.body = res;
    } else {
      ctx.body = { hits: [] }
    }
  }

  async getCellAndLine() {
    const { ctx } = this;
    this.app.data.index('datas').updateSettings({
      filterableAttributes: ['type'],
    })

    const res = await this.app.data.index('datas')
      .search('', { limit: 1000, filter: [["type = cell", "type = line"]] })

    ctx.body = res
  }
}

module.exports = SearchController;
