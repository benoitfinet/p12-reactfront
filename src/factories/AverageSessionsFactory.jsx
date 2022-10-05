import AverageSessions from "../models2/api/AverageSessions";

class AverageSessionsFactory {
    constructor(data, type) {
        if (type === "api") {
            return new AverageSessions(data);
        }
    }
}

export default AverageSessionsFactory;