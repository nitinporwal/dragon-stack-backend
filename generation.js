const refreshRate = REFRESH_RATE * SECOND;

class Generation {
    constructor() {
        this.expiration = this.calculateExpiration();
    }
    calculateExpiration = () => {
        let expirationPeriod = Math.floor(Math.random()*(refreshRate/2));
        let msUntilExpiration = (Math.random() < 0.5) ? 
            refreshRate - expirationPeriod : 
            refreshRate + expirationPeriod;
        return new Date(Date.now() + msUntilExpiration);
    } 
}

export default Generation;