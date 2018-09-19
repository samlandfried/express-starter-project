import server from 'src/api/server'
import chai from 'chai'
import sinon from 'sinon'
import chaiSinon from 'chai-sinon'

const { expect } = chai

chai.use(chaiSinon)

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
