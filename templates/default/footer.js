/**
 * Additional content section / block functions for body.
 */

var rootpath = process.cwd() + '/',
  path = require('path'),
  calipso = require(path.join(rootpath, 'lib/calipso'));

exports = module.exports = function(req, options, callback) {

  /**
   *  Get additional content for blocks in the template
   */
  calipso.lib.step(
    function getContent() {
      options.getContent(req, "footer-content", this.parallel());      
      options.getBlock('scripts.ga',this.parallel());
    },
    function done(err, footer, ga) {
      callback(err,{footer: footer, ga: ga});
    }
  );

};
