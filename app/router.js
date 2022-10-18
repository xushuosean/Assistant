'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.search.index);

  router.get('/search', controller.search.data)

  router.get('/cellline', controller.search.getCellAndLine)

  router.get('/getcell', controller.search.getCell)

  router.get('/diagram', controller.search.getDiagramCell)
};
