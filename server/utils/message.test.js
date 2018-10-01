var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
      var from = 'Malik';
      var text = 'hello';
      var message = generateMessage(from,text);

      expect(message.createdAt).toBeA('number');
      expect(message).toInclude({
        from,
        text
      });

  });
});
