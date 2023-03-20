const service = require("../services/drugstore.service");

const listDrugstore = (req, res) => {
  // TODO
  res.send(service.listDrugstores(req.query));
};

const deleteDrugstore = async (req, res) => {
  // TODO
  await service.deleteDrugstore(req.query) == 200 ? res.sendStatus(200) : res.sendStatus(500)
}
  

module.exports = {
  listDrugstore,
  deleteDrugstore,
};
