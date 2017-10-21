'use strict';

import Line from './lib/Line';
import CurvedLine from './lib/CurvedLine';

function pathsAreValid(paths, parsers) {
    if (!(paths instanceof Array)) {
        throw new Error('Variable passed must be an array');
    }

    const validParsers = Object.keys(parsers);
    paths.forEach(function(path) {
        if (!path.hasOwnProperty('type')) {
            throw new Error('Type property not found in path')
        }

        if (!path.type) {
            throw new Error('Type property must be defined')
        }

        if (validParsers.indexOf(path.type) === -1) {
            throw new Error('Invalid path property: ' + path.type);
        }
    });

    return true;
}

function SvgPathGenerator(paths) {
    this.parsers = {
        line: new Line(),
        curvedLine: new CurvedLine()
    };

    if (pathsAreValid(paths, this.parsers)) {
        this.paths = paths;
    }
}

SvgPathGenerator.prototype.render = function render() {
    console.log(typeof this.path);
};

module.exports = SvgPathGenerator;