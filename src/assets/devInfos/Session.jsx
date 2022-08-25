import useFetch from '../components/customHook/usefetch';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Activity() {

    let { id } = useParams();
    const [session] = useFetch(`http://localhost:3000/user/${id}/average-sessions`);

    const [sessionUser, setsessionUser] = useState(null);

    useEffect(() => {
        getData()
    })
    
    async function getData () {
        const request = await session;
        setsessionUser(request.data.sessions)
    }

    return (
        <div style={{paddingLeft : "10px"}}>
            <p>{JSON.stringify(sessionUser)}</p>
        </div>
    )
}
 
export default Activity