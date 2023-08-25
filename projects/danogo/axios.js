const axios = require("axios");
const { KUPO_DANOGO_URL, DANOGO_GATEWAY_URL } = require("./constants");

const configHeaders = { "Content-Type": "application/json" };

const kupoInstance = axios.create({
  baseURL: KUPO_DANOGO_URL,
  headers: { ...configHeaders },
});

const danogoGatewayInstance = axios.create({
  baseURL: DANOGO_GATEWAY_URL,
  headers: { ...configHeaders },
});

module.exports = { kupoInstance, danogoGatewayInstance };
