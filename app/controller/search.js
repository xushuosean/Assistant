'use strict';

const Controller = require('egg').Controller;
const _ = require('lodash')

class SearchController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await this.app.client.index('movies').search(ctx.query.wd)
    ctx.body = res;
  }

  async data() {
    const { ctx } = this;
    const word = ctx.query.wd
    if (word !== '') {
      const res = await this.app.data.index('datas')
        .search(ctx.query.wd)
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
}

module.exports = SearchController;
