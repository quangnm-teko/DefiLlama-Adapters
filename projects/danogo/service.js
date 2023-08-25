const { danogoGatewayInstance, kupoInstance } = require("./axios");
const { API_PATH } = require("./constants");

const danogoGateWayService = {
  getSMAddress: async () => {
    return await danogoGatewayInstance.get(API_PATH.DANOGO.V1.GET_SM_ADDRESS);
  },
  getAssetsValue: async (assetIdArr) => {
    return await danogoGatewayInstance.post(
      API_PATH.DANOGO.V1.GET_ASSET_VALUE,
      {
        data: { assetIds: assetIdArr },
      }
    );
  },
};

const kupoService = {
  getUtxoFromSMAdress: async (smAdressArr) => {
    const utxoItems = await Promise.all(
      smAdressArr.map(async (smAdressVal) => {
        return (await kupoInstance.get(`${API_PATH.KUPO.MATCH}/${smAdressVal}`))
          .data;
      })
    );
    return utxoItems;
  },
};

module.exports = {
  danogoGateWayService,
  kupoService,
};
