'use strict'

const express = require('express')
const mysql = require('mysql')
const config = require('./config')
const app = require('./app')

const server = require('http').Server(app);

const io = require('socket.io');



server.listen(config.port, () => {
    console.log(`Api rest corrriendo en http://localhost:${config.port}`);
});