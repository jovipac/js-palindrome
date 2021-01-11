const app = require('..')
const request = require('supertest')
const expect = require('chai').expect

describe('GET /iecho 400', () => {
  it('Verifique que no exista cadena de texto', (done) => {
    request(app)
      .get('/iecho')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.statusCode).to.equal(400)
        expect(res.body).to.have.property('error').to.be.equal('no-text')
        done()
      })
  })
})

describe('GET /iecho 200', () => {
  it('Devolver la cadena de texto invertida', (done) => {
    request(app)
      .get('/iecho')
      .query({ text: 'test' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200)
        expect(res.body).to.have.property('text').to.be.equal('tset')
        done()
      })
  })
})

describe('GET /iecho 200', () => {
  it('Verifique si la cadena de texto es palindromo', (done) => {
    request(app)
      .get('/iecho')
      .query({ text: 'luz azul' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200)
        expect(res.body).to.have.property('palindrome').to.be.equal(true)
        done()
      })
  })
})
