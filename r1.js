require("!style-loader!css-loader!./style.css");
var $ = require('jquery');
$("h1").css("color","red");
document.write(require("./r2.js"));
