// For some reason, this must be require()'d
// before the es6 compiler. Need to investigate more.
require("expect.js");

require("./utils/install-compilers");

// Now the React component written with ES6 and JSX can be require()'d
var SomeComponent = require("./SomeComponent");

// So can regular .js-files with es6 syntax
require("./es6");