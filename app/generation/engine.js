const Genereation = require('.');

class GenerationEngine {
    constructor() {
        this.generation = null;
        this.timer = null;
    }
    start = () => {
        this.buildNewGeneration();
    }

    stop = () => {
        clearTimeout(this.timer);
    }
    buildNewGeneration = () => {
        this.generation = new Genereation();
        console.log("new generation", this.generation);

        this.timer = setTimeout(() => {
            this.buildNewGeneration();
        }, this.generation.expiration.getTime() - Date.now());
    }
}

module.exports = GenerationEngine;