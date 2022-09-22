import Performance from "../models/Performance";

class PerformanceFactory {
    constructor(data, type) {
        if (type === "api") {
            return new Performance(data);
        }
    }
}

export default PerformanceFactory;