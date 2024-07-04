const fastify = require("fastify")({ logger: true });
const path = require("path");
const fs = require('fs');
const AutoLoad = require("@fastify/autoload");
const swagger = require("@fastify/swagger");
const swaggerUI = require("@fastify/swagger-ui");
const jwt = require("@fastify/jwt");
const yaml = require('js-yaml');
// const { authHook, errorHandler, responseFormatter } = require("./hooks");

// Register Swagger for API documentation
const openapi = yaml.load(fs.readFileSync('./openapi/base-openapi-spec.yml', 'utf8'));
fastify.register(swagger, { openapi });
fastify.register(swaggerUI, {
  routePrefix: "/docs",
  exposeRoute: true,
});

// Register JWT authentication
fastify.register(jwt, {
  secret: process.env.JWT_SECRET,
});

// Use hooks
// fastify.addHook("onRequest", authHook);
// fastify.addHook("onSend", responseFormatter);
// fastify.setErrorHandler(errorHandler);

// Automatically load all plugins defined in routes folder
fastify.register(AutoLoad, {
  dir: path.join(__dirname, "routes"),
  options: { prefix: "/api" },
});

module.exports = fastify;
