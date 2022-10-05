import Performance from "../models2/api/Performance";

class PerformanceFactory {
    constructor(data, type) {
        if (type === "api") {
            return new Performance(data);
        }
    }
}

export default PerformanceFactory;