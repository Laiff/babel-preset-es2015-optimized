var modify = require('modify-babel-preset');

module.exports = modify('es2015', {
    'transform-es2015-modules': false,
    'transform-es2015-modules-optimized': true
});