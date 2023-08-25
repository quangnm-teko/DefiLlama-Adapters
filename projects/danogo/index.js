const { danogoGateWayService, kupoService } = require("./service");

const tvl = async () => {
  let totalTvl = 0;
  const assetIdArr = [];
  const lovelaceToAdaUnit = 1e6;
  const mapAssetValue = new Map();

  const smAdressDataResponse = await danogoGateWayService.getSMAddress();

  const utxoListItem = await kupoService.getUtxoFromSMAdress(
    smAdressDataResponse.data.data.addresses
  );

  utxoListItem.forEach((utxoItems) => {
    utxoItems.forEach((utxoItem) => {
      totalTvl += utxoItem.value.coins / lovelaceToAdaUnit;
      const [assetId, assetQuantity] = Object.entries(utxoItem.value.assets)[0];
      assetIdArr.push(assetId);
      mapAssetValue.set(assetId, assetQuantity);
    });
  });

  const cardanoAssetValue = await danogoGateWayService.getAssetsValue(
    assetIdArr
  );

  cardanoAssetValue.data.data.assetValues.forEach((assetItem) => {
    const assetQuantity = mapAssetValue.get(assetItem.assetId);
    totalTvl += (assetQuantity * assetItem.adaValue) / lovelaceToAdaUnit;
  });

  return { cardano: totalTvl };
};

module.exports = {
  timetravel: false,
  cardano: {
    tvl,
  },
};
