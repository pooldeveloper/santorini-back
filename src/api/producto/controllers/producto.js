'use strict';

/**
 * categoria controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::producto.producto', ({strapi}) => ({
    async findOne(ctx) {
        const { id } = ctx.params;

        const entity = await strapi.db.query('api::producto.producto').findOne({
            where: { slug: id },
            populate: ['imagenes'],
        });

        const sanitizedEntity = await this.sanitizeOutput(entity);

        return this.transformResponse(sanitizedEntity)
    }
}));
