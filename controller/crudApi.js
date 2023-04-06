const { where } = require('sequelize');
const db = require('../models/index')

console.log(db);

const addAdmin = async (req, res) => {
    let admin = db.admin
    const jane = admin.build(req.body);
    await jane.save();
    res.json(jane)
}

const getAdmins = async (req, res) => {
    let admin = db.admin
    const jane = await admin.findAll();
    res.json(jane)
}
const putAdmin = async (req, res) => {
    const data = req.body
    const fineId = req.params.id
    let admin = db.admin
    const jane = await admin.update( {data}, { where: { _id: fineId } });
    console.log( await admin.findOne( {data}, { where: { id: fineId } }));
    res.json(jane)
    // console.log(req.params.id);

}
module.exports = {
    addAdmin,
    getAdmins,
    putAdmin
}