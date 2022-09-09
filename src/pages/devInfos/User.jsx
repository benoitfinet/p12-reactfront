import useFetch from '../../components/customHook/usefetch';
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

function User() {

    let { id } = useParams();
    const [infoUser] = useFetch(`http://localhost:3000/user/${id}`);

    const [data, setData] = useState(null);

    useEffect(() => {
        getData()
    })

    async function getData() {
        const request = await infoUser;
        setData(request.data.userInfos)
        request.data.userInfos.score = request.data.todayScore
    }

    return (
        <div style={{ paddingLeft: "10px" }}>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}

export default User