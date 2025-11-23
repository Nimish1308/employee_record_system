const { Error } = require("mongoose");
const Emp = require("../models/crudModels");

const home = async (req, res) => {
    try {
        res.send("Sample EMS API is running")
    } catch (error) {
        res.send(error)
    }
}

const createEmpRecord = async (req, res) => {
    try {
        const empBody = req.body;
        const empObject = new Emp(empBody);
        const empSave = await empObject.save();
        res.send(empSave);
    } catch (error) {
        res.send(error)
    }
}

const findEmpById = async (req, res) => {
    try {
        const id = req.params.id;
        const findEmpId = await Emp.findById({ _id: id });
        res.send(findEmpId)
    } catch (error) {
        res.send(Error)
    }
}

const findAllEmp = async (req, res) => {
    try {
        const findAll = await Emp.find({});
        res.send(findAll)
    } catch (error) {
        res.send(Error)
    }
}

const updateEmpById = async (req, res) => {
    try {
        const id = req.params.id;
        const updateEmp = await Emp.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        res.send(updateEmp)
    } catch (error) {
        res.send(Error)
    }
}

const deleteEmpById = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteEmp = await Emp.findByIdAndDelete({ _id: id });
        res.send(deleteEmp)
    } catch (error) {
        res.send(Error)
    }
}

module.exports = { home, createEmpRecord, findEmpById, findAllEmp, updateEmpById,deleteEmpById }