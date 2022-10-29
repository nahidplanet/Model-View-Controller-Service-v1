const express = require('express');
const { getSuplliers, createSupplier, updateSupplier } = require('../../controllers/supplier.controller');
const supplierRouoter = express.Router();


supplierRouoter.route("/")
    .get(getSuplliers)
    .post(createSupplier)
    .patch()
supplierRouoter.route("/:id")
    .get()
    .post()
    .patch(updateSupplier)

module.exports = supplierRouoter;