import chai from 'chai'
import sinon from 'sinon'
import chaiSinon from 'chai-sinon'
import chaiHTTP from 'chai-http'

chai.use(chaiSinon)
chai.use(chaiHTTP)

global.expect = chai.expect
global.sinon = sinon
