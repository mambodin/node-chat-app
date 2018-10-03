var expect = require('expect');
const {isRealString} = require('./validation.js');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var numbers = 234235;
    expect(isRealString(numbers)).toBeFalsy();
  });

  it('should reject string with spaces', () => {
    var space = '      ';
    expect(isRealString(space)).toBeFalsy();
  });

  it('should accept string without spaces', () => {
      var string = 'lkjsfoiwfj';
      expect(isRealString(string)).toBeTruthy();
  });
});
