const { hello } = require('./app')

describe('App', () => {
  it('should say hello', () => {
    expect(hello()).toBe('Hello World!')
  })
})
