const chai = require('chai');
const chaiHttp = require('chai-http');
const supertest = require('supertest');
const app = require('../app');
const sequelize = require('../config/db');


chai.use(chaiHttp);
const { expect } = chai;

const request = supertest(app);

before(async () => {
    await sequelize.sync({ force: true });
});

describe('POST /card/create', () => {

    beforeEach(async () => {
        
        await request.post('/users/createuser').send({
            name: 'John Doe',
            email: 'john.doe@example.com',
        });

    });


    it('should create a new card for a user', async () => {
        const res = await request
            .post('/card/create')
            .send({ userId: 1 });

        expect(res.status).to.equal(201);

    });

    it('should return 400 if userId is missing', async () => {
        const res = await request
            .post('/card/create')
            .send({});

        expect(res.status).to.equal(400);
        expect(res.body).to.have.property('error').that.equals('UserId is required');
    });

    it('should return 500 if the userId is invalid', async () => {
        const res = await request
            .post('/card/create')
            .send({ userId: 999999 });

        expect(res.status).to.equal(500);
    });
});
