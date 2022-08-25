import useFetch from '../components/customHook/usefetch';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Activity() {

    let { id } = useParams();
    const [user] = useFetch(`http://localhost:3000/user/${id}`);
    const [activityUser] = useFetch(`http://localhost:3000/user/${id}/activity`);

    const [dataUser, setDataUser] = useState(null);
    const [dataActivity, setDataActivity] = useState(null);

    useEffect(() => {
        getData()
    })
    
    async function getData () {
        const request = await user;
        const requestActivity = await activityUser;
        setDataUser(request.data.keyData)
        setDataActivity(requestActivity.data.sessions)
    }

    return (
        <div style={{paddingLeft : "10px"}}>
            <p>{JSON.stringify(dataUser)}</p>
            <p>{JSON.stringify(dataActivity)}</p>
        </div>
    )
}
 
export default Activity