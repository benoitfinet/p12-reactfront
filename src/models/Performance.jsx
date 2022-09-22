class Performance {
    constructor(data) {
        this._id = data.id;
        this._kind = data.kind;
        this._data = data.data;
    }

    get id() {
        return this._id;
    }

    get kind() {
        return this._kind;
    }

    get data() {
        return this._data;
    }

    get value() {
        return this._data.value;
    }

    get activityData() {
        return this._data.map((item) => {

            let newKind = " ";

            switch (item.kind) {
                case 1:
                    newKind = "Intensité";
                    break;
                case 2:
                    newKind = "Vitesse";
                    break;
                case 3:
                    newKind = "Force";
                    break;
                case 4:
                    newKind = "Endurance";
                    break;
                case 5:
                    newKind = "Energie";
                    break;
                case 6:
                    newKind = "Cardio";
                    break;
                default:
                    return item.kind;
            }

            return {
                value: item.value,
                kind: newKind,
            };

        });
    }

    get nature() {
        return this._kind[1];
    }
}

export default Performance;