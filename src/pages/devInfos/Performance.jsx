import { useParams } from "react-router-dom";

import useFetch from '../../components/customHook/usefetch';
import PerformanceFactory from '../../factories/PerformanceFactory';

/**
 * Developer page for performances
 * @returns Performances.jsx
 */
function Performances() {

    //use to target the if directly from url on screen
    let { id } = useParams();

    //Fetching datas from API
    const [performance] = useFetch(`http://localhost:3000/user/${id}/performance`, PerformanceFactory, "api");

    return (
        <div style={{ paddingLeft: "10px" }}>
            <p>{JSON.stringify(performance)}</p>
        </div>
    )
}

export default Performances