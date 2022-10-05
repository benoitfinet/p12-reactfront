import Activity from "../models2/api/Activity";

class ActivityFactory {
    constructor(data, type) {
        if (type === "api") {
            return new Activity(data);
        }
    }
}

export default ActivityFactory;