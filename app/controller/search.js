'use strict';

const Controller = require('egg').Controller;

class SearchController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await this.app.client.index('movies').search(ctx.query.wd)
    ctx.body = res;
  }
}

module.exports = SearchController;
