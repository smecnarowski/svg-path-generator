'use strict';

import SvgPathGenerator from './core/SvgPathGenerator';

const generator = function(path) {
    return new SvgPathGenerator(path);
};

module.exports = generator;

// Allow use of default import syntax in TypeScript
module.exports.default = generator;