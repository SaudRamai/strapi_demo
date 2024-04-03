'use strict';

/**
 * `landing-page-populate` middleware
 */
const populate={
  "populate": {
    "metadata": {
      "populate": {
        "metaimage": {
          "populate": true,
          "fields": ["name", "alternative", "url"]
        }
      }
    },
    "block": {
      "populate": {
        "link": {
          "populate": true
        },
        "image": {
          "fields": ["name", "alternative", "url"]
        },
        "card": {
          "populate": {
            "image": {
              "fields": ["name", "alternative", "url"]
            }
          }
        },
        "plan": {
          "populate": ["service", "link"]
        },
        "form": {
          "populate": ["input", "button"]
        }
      }
    }
  }
};
module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    strapi.log.info('In landing-page-populate middleware.');
    ctx.query.populate = ctx.query.populate || {};

    // Assuming populate object is passed in config
    ctx.query.populate = {
      ...config.populate, // Assuming config.populate contains the initial populate object
      ...ctx.query.populate
    };

    await next();
  };
};

