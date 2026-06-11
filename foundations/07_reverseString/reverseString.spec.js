const reverseString = require('./reverseString');

describe('reverseString', () => {
  test('reverses single word', () => {
    expect(reverseString('hello')).toEqual('olleh');
  });

<<<<<<< HEAD:03_reverseString/reverseString.spec.js
  test('reverses multiple words', () => {
    expect(reverseString('hello there')).toEqual('ereht olleh')
  })

  test('works with numbers and punctuation', () => {
    expect(reverseString('123! abc!')).toEqual('!cba !321')
  })
  test('works with blank strings', () => {
    expect(reverseString('')).toEqual('')
  })
=======
  test.skip('reverses multiple words', () => {
    expect(reverseString('hello there')).toEqual('ereht olleh');
  });

  test.skip('works with numbers and punctuation', () => {
    expect(reverseString('123! abc! Hello, Odinite.')).toEqual(
      '.etinidO ,olleH !cba !321'
    );
  });
  test.skip('works with blank strings', () => {
    expect(reverseString('')).toEqual('');
  });
>>>>>>> fc154a3fe4a15ca4cae4b36dc60fa574f7e5ffd3:foundations/07_reverseString/reverseString.spec.js
});
