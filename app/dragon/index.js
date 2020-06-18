const TRAITS = require('../../data/traits.json');

const DEFALT_PROPERTIES = {
    get birthdate() {
        return new Date();
    },
    nickName: "unnamed",
    get randomTraits() {
        let traits=[];
        TRAITS.map(TRAIT => {
            let traitType = TRAIT.type;
            let traitValues= TRAIT.values;

            let traitValue = traitValues[
                (Math.ceil(Math.random()*traitValues.length))%traitValues.length
            ]
            traits.push({traitType, traitValue}) 
        })
        return traits;
    },
    generationId: undefined
}

class Dragon {
    constructor ({birthdate, nickName, traits, generationId}={}) {
        this.birthdate=birthdate || DEFALT_PROPERTIES.birthdate;
        this.nickName=nickName || DEFALT_PROPERTIES.nickName;
        this.traits=traits || DEFALT_PROPERTIES.randomTraits;
        this.generationId=generationId || DEFALT_PROPERTIES.generationId;
    }
}

module.exports = Dragon;