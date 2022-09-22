class Activity {
    constructor(data) {
        this._userId = data.userId;
        this._sessions = data.sessions;
    }

    get userId() {
        return this._userId;
    }

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