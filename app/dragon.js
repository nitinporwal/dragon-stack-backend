const TRAITS = require('../data/traits.json');

const DEFALT_PROPERTIES = {
    get birthDate() {
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
    constructor ({birthDate, nickName, traits, generationId}={}) {
        this.birthDate=birthDate || DEFALT_PROPERTIES.birthDate;
        this.nickName=nickName || DEFALT_PROPERTIES.nickName;
        this.traits=traits || DEFALT_PROPERTIES.randomTraits;
        this.generationId=generationId || DEFALT_PROPERTIES.generationId;
    }
}

module.exports = Dragon;