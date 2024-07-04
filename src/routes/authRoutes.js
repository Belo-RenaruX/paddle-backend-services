//const authController = require('../controllers/authController');
const { authSchema, refreshSchema } = require('../schemas/authSchema');

module.exports = async function (fastify, opts) {
  fastify.get('/auth/token', {
    
    handler: () => 'ok',
  });

  // fastify.post('/auth/refresh', {
  //   schema: refreshSchema,
  //   handler: () => 'ok',
  // });
};