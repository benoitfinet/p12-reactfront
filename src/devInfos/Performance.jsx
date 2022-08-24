import useFetch from '../customHook/usefetch';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Activity() {

    let { id } = useParams();
    const [performance] = useFetch(`http://localhost:3000/user/${id}/performance`);

    const [performanceUser, setPerformanceUser] = useState(null);

    useEffect(() => {
        getData()
    })
    
    async function getData () {
        const request = await performance;
            setPerformanceUser(request.data)
    }

    return (
        <div style={{paddingLeft : "10px"}}>
            <p>{JSON.stringify(performanceUser)}</p>
        </div>
    )
}
 
export default Activity