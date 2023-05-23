'use strict';

/**
 * work controller
 */
const { sanitize } = require('@strapi/utils');
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::categoria.categoria', ({ strapi }) => ({
  async findBySlug(ctx) {
    const { slug } = ctx.params;
    const query = {
      filters: { slug },
      ...ctx.query,
    };

    const categoria = await strapi.entityService.findMany('api::categoria.categoria', query);
    const schema = strapi.getModel('api::categoria.categoria');
    const sanitizedEntity = await sanitize.contentAPI.output(categoria, schema);
    
    return this.transformResponse(sanitizedEntity[0]);
  },
}));
