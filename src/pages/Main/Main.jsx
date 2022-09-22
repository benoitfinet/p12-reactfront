import './main.scss';

import calorie from '../../assets/Images/calories.png'
import proteine from '../../assets/Images/protein.png'
import glucide from '../../assets/Images/carbs.png';
import lipide from '../../assets/Images/fat.png';

import UserFactory from '../../factories/UserFactory';

import CompRadar from "../../components/CompRadar/CompRadar";
import useFetch from '../../components/customHook/usefetch';
import Header from "../../components/Header/Header";
import ActivityChart from '../../components/ActivityChart/ActivityChart';
import TimeSessionsChart from '../../components/TimeSessionsChart/TimeSessionsChart';
import ScoreChart from '../../components/ScoreChart/ScoreChart';
import InfoCard from '../../components/InfoCard/InfoCard';

function Main() {

    //as a prototype, this website need the userID to be set manually
    let userID = 18;

    //Fetching datas from API
    const [infoUser] = useFetch(`http://localhost:3000/user/${userID}`, UserFactory, "user");

    return (
        <div>
            <Header />
            <div className='main'>
                <div>
                    <p className='main__text'>Bonjour <span className='main__text--name'>{infoUser?.userInfos?.firstName}</span></p>
                    <p className='main__subtext'>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                </div>
                <div className='main__test'>
                    <div className='main__allCharts'>
                        <div className='main__chart main__chart--activity'>
                            <p className='main__chart--activityText'>Activité quotidienne</p>
                            <ActivityChart id={userID} />
                        </div>
                        <div className='main__chart main__chart--bottom'>
                            <div className='main__chart--sessionText'><p>Durée moyenne des</p><p>sessions</p></div>
                            <TimeSessionsChart id={userID} />
                        </div>
                        <div className='main__chart main__chart--radar main__chart--bottom'>
                            <CompRadar id={userID} />
                        </div>
                        <div className='main__chart main__chart--score main__chart--bottom'>
                            <div className='main__chart--scoreText'><p>Score</p></div>
                            <ScoreChart id={userID} />
                        </div>
                    </div>
                    <div className='main__allInfos'>
                        <div className='main__info'>
                            <InfoCard icone={calorie} nbGramme={infoUser?.keyData?.calorieCount} type='Calories' />
                        </div>
                        <div className='main__info'>
                            <InfoCard icone={proteine} nbGramme={infoUser?.keyData?.proteinCount} type='Proteines' />
                        </div>
                        <div className='main__info'>
                            <InfoCard icone={glucide} nbGramme={infoUser?.keyData?.carbohydrateCount} type='Glucides' />
                        </div>
                        <div className='main__info'>
                            <InfoCard icone={lipide} nbGramme={infoUser?.keyData?.lipidCount} type='Lipides' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main