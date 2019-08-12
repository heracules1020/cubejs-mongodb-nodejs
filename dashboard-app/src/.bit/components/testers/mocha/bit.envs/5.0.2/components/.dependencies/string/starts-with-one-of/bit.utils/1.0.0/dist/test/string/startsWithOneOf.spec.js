'use strict';

var _chai = require('chai');

var _startsWithOneOf = require('../../src/string/startsWithOneOf');

var _startsWithOneOf2 = _interopRequireDefault(_startsWithOneOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('starts-with-one-of', function () {
  it('should return true if start with first option', function () {
    var stringToCheck = "and what";
    var options = ["a", "b", "c", "d"];

    return (0, _chai.expect)((0, _startsWithOneOf2.default)(stringToCheck, options)).to.be.true;
  });

  it('should return true if start with first option', function () {
    var stringToCheck = "and what";
    var options = ["a", "b", "c", "d"];

    return (0, _chai.expect)((0, _startsWithOneOf2.default)(stringToCheck, options)).to.be.true;
  });

  it('should return true if start with first option', function () {
    var stringToCheck = "and what";
    var options = ["a", "b", "c", "d"];

    return (0, _chai.expect)((0, _startsWithOneOf2.default)(stringToCheck, options)).to.be.true;
  });

  it('should return true if start with first option', function () {
    var stringToCheck = "and what";
    var options = ["a", "b", "c", "d"];

    return (0, _chai.expect)((0, _startsWithOneOf2.default)(stringToCheck, options)).to.be.true;
  });

  it('should return true if start with last option', function () {
    var stringToCheck = "dnd what";
    var options = ["a", "b", "c", "d"];

    return (0, _chai.expect)((0, _startsWithOneOf2.default)(stringToCheck, options)).to.be.true;
  });

  it('should return true if start with option in the middle', function () {
    var stringToCheck = "cnd what";
    var options = ["a", "b", "c", "d"];

    return (0, _chai.expect)((0, _startsWithOneOf2.default)(stringToCheck, options)).to.be.true;
  });

  it('should return true if starts with single option', function () {
    var stringToCheck = "and what";
    var options = ["a"];

    return (0, _chai.expect)((0, _startsWithOneOf2.default)(stringToCheck, options)).to.be.true;
  });

  it('should return false if no options sent', function () {
    var stringToCheck = "and what";

    return (0, _chai.expect)((0, _startsWithOneOf2.default)(stringToCheck)).to.be.false;
  });

  it('should return false if options is empty array', function () {
    var stringToCheck = "and what";
    var options = [];

    return (0, _chai.expect)((0, _startsWithOneOf2.default)(stringToCheck, options)).to.be.false;
  });

  it('should return false if options is not an array', function () {
    var stringToCheck = "and what";
    var options = { a: 'a' };

    return (0, _chai.expect)((0, _startsWithOneOf2.default)(stringToCheck, options)).to.be.false;
  });

  it('should return true if starts with option that is more than one char', function () {
    var stringToCheck = "and what";
    var options = ["an"];

    return (0, _chai.expect)((0, _startsWithOneOf2.default)(stringToCheck, options)).to.be.true;
  });

  it('should return true if starts with option that is more than one word', function () {
    var stringToCheck = "and what";
    var options = ["and w"];

    return (0, _chai.expect)((0, _startsWithOneOf2.default)(stringToCheck, options)).to.be.true;
  });

  it('should return true if starts with more than one option', function () {
    var stringToCheck = "and what";
    var options = ["an", "b", "and"];

    return (0, _chai.expect)((0, _startsWithOneOf2.default)(stringToCheck, options)).to.be.true;
  });

  it('should return false if string to check is empty', function () {
    var stringToCheck = "";
    var options = ["a", "b", "c", "d"];

    return (0, _chai.expect)((0, _startsWithOneOf2.default)(stringToCheck, options)).to.be.false;
  });

  it('should return false if string to check is undefined', function () {
    var stringToCheck = undefined;
    var options = ["a", "b", "c", "d"];

    return (0, _chai.expect)((0, _startsWithOneOf2.default)(stringToCheck, options)).to.be.false;
  });

  it('should return false if string to check is empty and there are no options', function () {
    var stringToCheck = "";
    var options = [];

    return (0, _chai.expect)((0, _startsWithOneOf2.default)(stringToCheck, options)).to.be.false;
  });

  it('should return false if string to check is undefined and there are no options', function () {
    var stringToCheck = undefined;
    var options = [];

    return (0, _chai.expect)((0, _startsWithOneOf2.default)(stringToCheck, options)).to.be.false;
  });
});

//# sourceMappingURL=startsWithOneOf.spec.js.map