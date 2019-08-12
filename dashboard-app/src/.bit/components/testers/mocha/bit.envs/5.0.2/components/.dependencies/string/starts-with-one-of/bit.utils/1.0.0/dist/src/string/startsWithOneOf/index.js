"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = startsWithOneOf;


/**
 * Checks whether the string start with on the options specified.
 * @name startsWithOneOf
 * @param {string} str string to check.
 * @param {Array} options options to start with
 * @returns {bool} whether the string starts with one of the options.
 * @example
 * startsWithOneOf('hello', ['h', 'afdsf']) // => true
 * startsWithOneOf('hello', ['g', 'afdsf']) // => false
 */
function startsWithOneOf(str, options) {
    if (!str || !options || !Array.isArray(options) || options.length == 0) {
        return false;
    }

    var found = false;

    options.forEach(function (o) {
        if (str.startsWith(o)) {
            found = true;
        }
    });

    return found;
};
module.exports = exports["default"];

//# sourceMappingURL=index.js.map