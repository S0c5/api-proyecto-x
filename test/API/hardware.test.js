require('should');

const app     = require('../../');
const request = require('supertest')(app);

describe('Hardware', () => {
  before((done) => {
    setTimeout( () => done(), 8000);
  })
    it(`when i want to turn on the led i send action ON`,
        (done) => {
            request
            .put('/hardware/led')
            .send({
                action: 'ON'
            })
            .expect(200)
            .then(res => res.body)
            .then(body => {
                body.action.should.equal('ON');
                setTimeout(() => done(), 5000);
            })
    })
    it(`when i want to turn off the led i send action OFF`,
        () => {
            return request
            .put('/hardware/led')
            .send({
                action: 'OFF'
            })
            .expect(200)
            .then(res => res.body)
            .then(body => {
                body.action.should.equal('OFF');
                setTimeout(() => done(), 5000);
            })
    })
    it(`when i want get the light intensity i get /hardware/sensor`,
        () => {
            return request
            .get('/hardware/sensor')
            .expect(200)
            .then(res => res.body)
            .then(body => {
                body.intensity.should.above(0);
            })
    })
})
