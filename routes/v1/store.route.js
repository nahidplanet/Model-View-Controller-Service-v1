const express = require('express');
const storeRoute = express.Router();
const {
    createStore,
    getStore,
    getStoreById,
    updateStoreById
} = require('../../controllers/store.controller');

storeRoute.route("/")
    .get(getStore)
    .post(createStore)
storeRoute.route("/:id")
    .get(getStoreById)
    .patch(updateStoreById)


module.exports = storeRoute;