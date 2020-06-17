const TRAITS = require('./traits.json');

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
    }
}

class Dragon {
    constructor ({birthDate, nickName, traits}={}) {
        this.birthDate=birthDate || DEFALT_PROPERTIES.birthDate;
        this.nickName=nickName || DEFALT_PROPERTIES.nickName;
        this.traits=traits || DEFALT_PROPERTIES.randomTraits;
    }
}

module.exports = Dragon;