const { Pool } = require('pg');
const databaseconfiguration = require('./secrets/databaseconfiguration');
// const { response } = require('express');

const pool = new Pool(databaseconfiguration);

module.exports = pool;

// pool.query('SELECT * FROM generation').then(res => {
//     console.log('response.rows', res.rows);
// }).catch(err => {
//     return console.log('err', err);
// });