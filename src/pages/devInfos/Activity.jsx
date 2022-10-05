import { useParams } from "react-router-dom";

import useFetch from '../../components/customHook/usefetch';
import UserFactory from '../../factories/UserFactory';
import ActivityFactory from '../../factories/ActivityFactory';

/**
 * Developer page for activities
 * @returns Activity.jsx
 */
function Activity() {

    //use to target the if directly from url on screen
    let { id } = useParams();

    //Fetching datas from API
    const [user] = useFetch(`http://localhost:3000/user/${id}`, UserFactory, "user");
    const [activityUser] = useFetch(`http://localhost:3000/user/${id}/activity`, ActivityFactory, "api");

    //Return a new object with weight, calories burned and informations on multiple elements for the day
    const newObject = Object.assign(user.keyData, activityUser)

    return (
        <div style={{ paddingLeft: "10px" }}>
            <p>{JSON.stringify(newObject)}</p>
        </div>
    )
}

export default Activity