'use strict'
const express = require('express')
const ruta = express.Router()
const ctrlLogin = require('../controladores_app/login');

ruta.post("/", ctrlLogin.login);

module.exports = ruta;