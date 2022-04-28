const express = require('express');

const {repairExists}=require('../middlewares/repairs.middlewares')
const {
    getAllRepairs,
    createRepairs,
    getRepairsById,
    updateRepairs,
    deleteRepairs
} = require('../controllers/repairs.controller')
const router = express.Router();

router.route('/')
    .get(getAllRepairs)
    .post(createRepairs)

router.route('/:id')
    .get(repairExists,getRepairsById)
    .patch(repairExists, updateRepairs)
    .delete(repairExists, deleteRepairs)


module.exports = {repairsRouter: router}