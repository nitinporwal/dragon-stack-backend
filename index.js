const Dragon = require('./dragon');


const baloo = new Dragon({
    birthDate: new Date(),
    nickName: "baloo"
});

const minar = new Dragon();

setTimeout(() => {
    const fooey = new Dragon({
        birthDate: new Date(),
        nickName: "fooey"
    });
    console.log('fooey', fooey);
}, 3000);

setTimeout(() => {
    const gooby = new Dragon();
    console.log('gooby', gooby);
}, 3000);

console.log('baloo', baloo);
console.log('minar', minar);