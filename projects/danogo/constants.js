module.exports = {
  KUPO_DANOGO_URL: "https://kupo.tekoapis.com",
  DANOGO_GATEWAY_URL: "https://danogo-gateway.tekoapis.com",
  API_PATH: {
    DANOGO: {
      V1: {
        GET_SM_ADDRESS: "/api/v1/smartcontract-addresses",
        GET_ASSET_VALUE: "/api/v1/cardano-asset-value",
      },
    },
    KUPO: {
      MATCH: "/matches",
    },
  },
};
