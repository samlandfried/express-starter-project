import server from 'src/api/server'

describe('index.js', () => {
  beforeEach(() => {
    sinon.stub(server, 'listen')
  })

  afterEach(() => {
    server.listen.restore()
  })

  it('should listen on port 4000', () => {
    require('src/index')

    expect(server.listen).to.have.been.calledWith(3000)
  })
})
