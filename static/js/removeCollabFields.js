var $ = require('ep_etherpad-lite/static/js/rjquery').$; // use jQuery

exports.postAceInit = function (hook_name, args, cb) {
  $('#users input[type=text]').remove(); // Remove all the text boxes in the users section.
}
