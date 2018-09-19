import chai from 'chai'
import sinon from 'sinon'
import chaiSinon from 'chai-sinon'

chai.use(chaiSinon)

global.expect = chai.expect
global.sinon = sinon
