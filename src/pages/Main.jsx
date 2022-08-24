import '../sass/pages/main.scss';
import '../sass/layout/header.scss';
import { useParams } from "react-router-dom"
import CompRadar from "../components/CompRadar";
import useFetch from '../customHook/usefetch';
import Header from "../components/Header";
import ActivityChart from '../components/ActivityChart';
import TimeSessionsChart from '../components/TimeSessionsChart';
import ScoreChart from '../components/ScoreChart';
import InfoCard from '../components/InfoCard';
import calorie from '../assets/calories.png'
import proteine from '../assets/protein.png'
import glucide from '../assets/carbs.png';
import lipide from '../assets/fat.png';

function Main() {

    let { id } = useParams();
    console.log(id)
    const [infoUser] = useFetch(`http://localhost:3000/user/${id}`);

    console.log(infoUser)

    return (
        <div>
            <Header />
            <div className='main'>
                <div>
                    <p className='main__text'>Bonjour <span className='main__text--name'>{infoUser?.data?.userInfos?.firstName}</span></p>
                    <p className='main__subtext'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className='main__test'>
                    <div className='main__allCharts'>
                        <div className='main__chart main__chart--activity' style={{ width: "100%", height: "33vh" }}>
                            <p className='main__chart--activityText'>Activité quotidienne</p>
                            <ActivityChart />
                        </div>
                        <div className='main__chart' style={{ width: "30%", height: "33vh" }}>
                            <div className='main__chart--sessionText'><p>Durée moyenne des</p><p>sessions</p></div>
                            <TimeSessionsChart />
                        </div>
                        <div className='main__chart main__chart--radar' style={{ width: "30%", height: "33vh" }}>
                            <CompRadar />
                        </div>
                        <div className='main__chart main__chart--score' style={{ width: "30%", height: "33vh" }}>
                        <div className='main__chart--sessionText'><p>Score</p></div>
                            <ScoreChart />
                        </div>
                    </div>
                    <div className='main__allInfos'>
                        <div className='main__info' style={{ width: "100%", height: "20%" }}>
                            <InfoCard icone={calorie} nbGramme={infoUser?.data?.keyData?.calorieCount} type='Calories' />
                        </div>
                        <div className='main__info' style={{ width: "100%", height: "20%" }}>
                            <InfoCard icone={proteine} nbGramme={infoUser?.data?.keyData?.proteinCount} type='Proteines' />
                        </div>
                        <div className='main__info' style={{ width: "100%", height: "20%" }}>
                            <InfoCard icone={glucide} nbGramme={infoUser?.data?.keyData?.carbohydrateCount} type='Glucides' />
                        </div>
                        <div className='main__info' style={{ width: "100%", height: "20%" }}>
                            <InfoCard icone={lipide} nbGramme={infoUser?.data?.keyData?.lipidCount} type='Lipides' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default Main