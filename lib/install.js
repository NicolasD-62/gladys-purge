var Promise = require('bluebird');

module.exports = function() {

  sails.log.info('Purge : Module installed');
  return new Promise.resolve();
}

