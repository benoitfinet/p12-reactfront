import { useParams } from "react-router-dom";

import useFetch from '../../components/customHook/usefetch';
import AverageSessionsFactory from '../../factories/AverageSessionsFactory';

/**
 * Developer page for time Sessions
 * @returns Session.jsx
 */
function Session() {

    //use to target the if directly from url on screen
    let { id } = useParams();

    //Fetching datas from API
    const [session] = useFetch(`http://localhost:3000/user/${id}/average-sessions`, AverageSessionsFactory, "api");

    return (
        <div style={{ paddingLeft: "10px" }}>
            <p>{JSON.stringify(session.sessions)}</p>
        </div>
    )
}

export default Session