// import { REFRESH_RATE, SECOND} from './config';
const {REFRESH_RATE, SECOND} = require('../config');
// import Dragon from './dragon';
const Dragon = require('../dragon');
const refreshRate = REFRESH_RATE * SECOND;

class Generation {
    constructor() {
        this.expiration = this.calculateExpiration();
        this.generationId = undefined;
    }
    calculateExpiration = () => {
        let expirationPeriod = Math.floor(Math.random()*(refreshRate/2));
        let msUntilExpiration = (Math.random() < 0.5) ? 
            refreshRate - expirationPeriod : 
            refreshRate + expirationPeriod;
        return new Date(Date.now() + msUntilExpiration);
    }
    newDragon = () => {
        if(Date.now() > this.expiration) {
            throw new Error(`This generation expired on ${this.expiration}`)
        }
        return new Dragon({ generationId: this.generationId });
    }
}

// export default Generation;
module.exports = Generation;
