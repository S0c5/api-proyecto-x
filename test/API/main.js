require('should');

const app     = require('../../');
const request = require('supertest')(app);

describe('Login', () => {
    it('When i send a valid email and password should return me a 200 with the text successfull', () => {
        return request
            .post('/login')
            .send({
                email: 'pepe@gmail.com',
                password: '1234'
            })
            .expect(200)
            .then(res => res.body)
            .then(body => {
                body.message.should.equal('successfull');
            })
    })
    it('When i send a invalid email and password should return me a 401 with a message invalid credentials', () => {
        return request
        .post('/login')
        .send({
            email: 'pepe@gmail.com',
            password: '1234_INVALIDO'
        })
        .expect(401)
        .then(res => res.body)
        .then(body => {
            body.message.should.equal('invalid credentials');
        })
    })
})