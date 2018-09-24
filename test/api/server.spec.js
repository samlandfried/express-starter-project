import { request } from 'chai'
import server from 'src/api/server'

describe('server.js', () => {
  describe('GET /', () => {
    it('should say "Hello World"', (done) => {
      request(server)
        .get('/')
        .end((err, res) => {
          expect(res.text).to.equal('Hello World!')
          done()
        })
    })
  })
})
