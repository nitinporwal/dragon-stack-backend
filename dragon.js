const DEFALT_PROPERTIES = {
    get birthDate() {
        return new Date();
    },
    nickName: "unnamed"
}

class Dragon {
    constructor ({birthDate, nickName}={}) {
        this.birthDate=birthDate || DEFALT_PROPERTIES.birthDate;
        this.nickName=nickName || DEFALT_PROPERTIES.nickName;
    }
}

module.exports = Dragon;