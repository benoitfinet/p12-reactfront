import Activity from "../models/Activity";

class ActivityFactory {
    constructor(data, type) {
        if (type === "api") {
            return new Activity(data);
        }
    }
}

export default ActivityFactory;