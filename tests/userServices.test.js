// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const supertest = require('supertest');
// const app = require('../app'); // Importez l'application
// const sequelize = require('../config/db'); // Importez la configuration de la base de données
// const { expect } = chai;

// chai.use(chaiHttp); // Utilisation de Chai pour HTTP

// describe('UserService - isEmailTaken', () => {
//     // Exécutez les migrations avant chaque test
//     before(async () => {
//         await sequelize.sync({ force: true }); // Réinitialise la base de données
//     });

//     // Nettoyez la base après chaque test
//     after(async () => {
//         await sequelize.close();
//     });

//     it('should return true if the email exists in the database', async () => {
//         // Créer un utilisateur test dans la base de données
//         await chai.request(app).post('/users/createuser').send({ 
//             name: 'Test User',
//             email: 'test@example.com' 
//         });

//         // Vérifiez si l'email existe via le service
//         const res = await supertest(app)
//             .post('/users/createuser') // Exemple d'endpoint
//             .send({ email: 'test@example.com' });

//         expect(res.status).to.equal(401);
//         expect(res.body.isTaken).to.be.true;
//     });

//     it('should return false if the email does not exist in the database', async () => {
//         const res = await supertest(app)
//             .post('/users/createuser') // Endpoint pour vérifier l'email
//             .send({ email: 'notfound@example.com' });

//         expect(res.status).to.equal(200);
//         expect(res.body.isTaken).to.be.false;
//     });
// });
