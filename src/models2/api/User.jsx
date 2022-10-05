class User {
    constructor(data) {
        this._id = data.id
        this._userInfos = data.userInfos
        this._todayScore = data.todayScore
        this._keyData = data.keyData
    }

    /**
     * Get id from datas User
     * @return id
     */
    get id() {
        return this._id;
    }

    /**
     * Get userInfos from datas User
     * @return userInfos
     */
    get userInfos() {
        return this._userInfos;
    }

    /**
     * Get todayScore from datas User
     * @return todayScore
     */
    get todayScore() {
        return this._todayScore;
    }

    /**
     * Get keyData from datas User
     * @return keyData
     */
    get keyData() {
        return this._keyData;
    }

    /**
     * Get firstname from datas User
     * @return userInfos.firstname
     */
    get firstname() {
        return this._userInfos.firstname
    }
}

export default User;