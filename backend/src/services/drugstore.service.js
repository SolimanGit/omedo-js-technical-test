const repository = require("../repositories/drugstore.repository");

const sortDrugstores = (drugstores, centerCoordinates) => {
  return drugstores.map((drugstore) => {
    let tempDrugstore =  {...drugstore}
    tempDrugstore["distance"] = drugstore.calculateDistance(centerCoordinates)/1000
    return tempDrugstore
  }).sort((a, b) => a.distance - b.distance);
}

const listDrugstores = (coordinates) => {
  // TODO
  return sortDrugstores(repository.listDrugstores(),coordinates)
};
const deleteDrugstore = async ({id}) => {
  // TODO
  let res;
  try {
    res = await repository.deleteDrugstore(id);
  } catch (err) {
    res = err;
  }
  return res;
};

module.exports = {
  listDrugstores,
  deleteDrugstore,
};
