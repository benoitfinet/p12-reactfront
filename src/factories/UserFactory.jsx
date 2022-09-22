import User from "../models/User";

class UserFactory {
    constructor(data, type) {
        if (type === "user") {
            return new User(data);
        }
    }
}

export default UserFactory;