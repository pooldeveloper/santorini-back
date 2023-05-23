'use strict';

/**
 * populare service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::populare.populare');
