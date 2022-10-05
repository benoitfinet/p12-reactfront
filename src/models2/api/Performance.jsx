class Performance {
    constructor(data) {
        this._id = data.id;
        this._kind = data.kind;
        this._data = data.data;
    }

    /**
     * Get userId from datas Performance
     * @return id
     */
    get id() {
        return this._id;
    }
    /**
     * Get kind from datas Performance
     * @return kind
     */
    get kind() {
        return this._kind;
    }
    /**
     * Get data from datas Performance
     * @return data
     */
    get data() {
        return this._data;
    }
    /**
     * Get value from datas Performance
     * @return value
     */
    get value() {
        return this._data.value;
    }
    /**
     * Get datas of activityData from datas Performance
     * @return newKind
     * @return item.kind
     * @return value
     * @return kind
     */
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

    /**
     * Get kind from datas Performance
     * @return kind
     */
    get nature() {
        return this._kind[1];
    }
}

export default Performance;