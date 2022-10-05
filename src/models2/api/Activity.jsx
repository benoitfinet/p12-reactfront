class Activity {
    constructor(data) {
        this._userId = data.userId;
        this._sessions = data.sessions;
    }

    /**
     * Get userId from datas Activity
     * @return userId
     */
    get userId() {
        return this._userId;
    }

    /**
     * Get datas of session's day from datas Activity
     * @return day
     * @return kilogram
     * @return calories
     * @return index
     */
    get sessions() {
        return this._sessions.map((session, index = 0) => {
            index++;
            return {
                day: session.day,
                kilogram: session.kilogram,
                calories: session.calories,
                index: index,
            };
        });
    }
}

export default Activity;