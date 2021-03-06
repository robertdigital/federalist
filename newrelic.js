const env = require('./services/environment.js')();

/**
 * New Relic agent configuration.
 *
 * This file is require'd by the new relic lib, not directly by our code.
 *
 * See node_modules/lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  // Grab NEW_RELIC_APP_NAME and NEW_RELIC_LICENSE_KEY from the cloud.gov
  // user-provided service
  app_name: [env.NEW_RELIC_APP_NAME],
  license_key: env.NEW_RELIC_LICENSE_KEY,
  logging: {
    level: 'info',
  },
  // Comma-delimited list of HTTP status codes for the error collector to ignore
  // We ignore 403 errors because they are expected for unauthenticated users
  error_collector: { ignore_status_codes: [404, 403] },
};
