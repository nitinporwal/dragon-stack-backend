/* dragon.js execution */

// const Dragon = require('./dragon');

// const baloo = new Dragon({
//     birthDate: new Date(),
//     nickName: "baloo"
// });

// const minar = new Dragon();

// setTimeout(() => {
//     const fooey = new Dragon({
//         birthDate: new Date(),
//         nickName: "fooey"
//     });
//     console.log('fooey', fooey);
// }, 3000);

// setTimeout(() => {
//     const gooby = new Dragon();
//     console.log('gooby', gooby);
// }, 3000);

// console.log('baloo', baloo);
// console.log('minar', minar);

// import Generation from './generation';

/* ============================================== */

/* generation.js code execution */

// const Generation = require('./generation');

// const generation = new Generation();

// console.log("generation", generation);

// const gooby = generation.newDragon();
// console.log("gooby", gooby);

// setTimeout(() => {
//     const minar = generation.newDragon();
//     console.log("minar", minar);
// }, 15000);

/* ============================================== */

/* engine.js code execution */

// const GenerationEngine = require('./engine');

// const engine = new GenerationEngine();

// engine.start();

// setTimeout(() => {
//     engine.stop();
// }, 20000);

/* ================================================ */

/* real backend app starts */

const express = require('express');
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');
const GenerationEngine = require('./generation/engine');

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

engine.start();

module.exports = app;