var expect = require('expect');

var {generateMessage,generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('should return a location message object', () => {
    var from = 'Admin';
    var longitude = 123;
    var latitude = 54848;
    var url = 'https://www.google.com/maps/?q=54848,123';
    var message = generateLocationMessage(from,latitude,longitude);


    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,url});


  });
});
