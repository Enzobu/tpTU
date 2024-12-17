const chai = require('chai');
const chaiHttp = require('chai-http');
const supertest = require('supertest');
const app = require('../app');
const sequelize = require('../config/db');
const { expect } = chai;

chai.use(chaiHttp);

describe('UserService - isEmailTaken', () => {
    before(async () => {
        await sequelize.sync({ force: true });
    });

    after(async () => {
        await sequelize.close();
    });

    it('should return true if the email exists in the database', async () => {
        await chai.request(app).post('/users/createuser').send({ 
            name: 'Test User',
            email: 'test@example.com' 
        });

        const res = await supertest(app)
            .post('/users/createuser')
            .send({ email: 'test@example.com' });

        expect(res.status).to.equal(401);
    });

    it('should return false if the email does not exist in the database', async () => {
        const res = await supertest(app)
            .post('/users/createuser')
            .send({ email: 'notfound@example.com' });

        expect(res.status).to.equal(400);
    });
});
