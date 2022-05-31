const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('Maiusculo', (done) => {
  uppercase('vascao', (str) => {
    try{
      expect(str).toBe('VASCAO');
      done();
    } catch (error) {
      done(error);
    }
  })
})