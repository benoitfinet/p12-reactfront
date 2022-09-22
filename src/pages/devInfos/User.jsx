import { useParams } from "react-router-dom"

import useFetch from '../../components/customHook/usefetch';
import UserFactory from '../../factories/UserFactory';

function User() {

    //use to target the if directly from url on screen
    let { id } = useParams();

    //Fetching datas from API
    const [infoUser] = useFetch(`http://localhost:3000/user/${id}`, UserFactory, "user");

    //Create a new object with just datas we want to use
    const newData = [
        infoUser.userInfos,
        infoUser.todayScore
    ]

    return (
        <div style={{ paddingLeft: "10px" }}>
            <p>{JSON.stringify(newData)}</p>
        </div>
    )
}

export default User