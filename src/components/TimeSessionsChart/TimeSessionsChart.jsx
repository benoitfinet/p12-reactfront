import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';
import useFetch from '../customHook/usefetch';
import './sessionsChart.scss';
import Loader from '../Loader/Loader';


function ActivityChart({ id }) {

    const [infoUser, isLoading, err] = useFetch(`http://localhost:3000/user/${id}/average-sessions`, 900, false);

    /**
 * Tooltip personnalisé
 * Permet d'afficher la valeur en minutes
 * active = au passage du curseur
 * Se référer à la documentation Recharts (https://recharts.org/en-US/guide/customize)
 */

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="tooltipSession">
                    <p className="tooltipSession__text">{`${payload[0].value} min`}</p>
                </div>
            );
        }

        return null;
    };

    /**
 * Permet d'ajouter dans les datas une valeur en fonction de la donnée "day"
 * Affiche donc la première lettre des jours de la semaine
 * Indispensable pour l'affichage dans le composant afin de respecter la maquette v1.0
 */

    infoUser?.data?.sessions.forEach(addDay => {
        if (addDay.day === 1) {
            addDay.newDay = "L"
        } else if (addDay.day === 2) {
            addDay.newDay = "M"
        }
        else if (addDay.day === 3) {
            addDay.newDay = "M"
        }
        else if (addDay.day === 4) {
            addDay.newDay = "J"
        }
        else if (addDay.day === 5) {
            addDay.newDay = "V"
        }
        else if (addDay.day === 6) {
            addDay.newDay = "S"
        }
        else if (addDay.day === 7) {
            addDay.newDay = "D"
        }
    })

    /**
 * Mise en place et en forme du loader
 */

    if (isLoading) {
        return (
            <div className='loader'>
                <Loader />
            </div>
        )
    }

    /**
 * Affiche un message d'erreur dans le cas où les données ne sont pas accessibles
 */

    if (err) {
        return (
            <p>Une erreur est survenue lors du chargement des données</p>
        )
    }

    /**
* Composant retourné "LineChart" correspondant à la section "Durée moyenne des sessions"
* Exemple d'utilisation dans la documentation : https://recharts.org/en-US/api/LineChart
*/

    return (
        <ResponsiveContainer width='100%' height='100%' className='timeSession'>
            <LineChart
                className='timeSession__lineChart'
                width='100%' height='100%' data={infoUser?.data?.sessions}
                margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                onMouseMove={(e) => {
                    const div = document.getElementsByClassName('timeSession')[0]
                    if (e.isTooltipActive) {
                        const windowWidth = div.clientWidth
                        const mouseXpercentage = Math.round((e.activeCoordinate.x / windowWidth) * 100)
                        div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(175,0,0,1.5) ${mouseXpercentage}%, rgba(175,0,0,1.5) 100%)`
                    }
                }}
            >
                <XAxis dataKey='newDay' stroke='#FFFFFF' opacity={0.5} tickLine={false} axisLine={false} />
                <YAxis padding={{ top: 50 }} stroke='#FFFFFF' opacity={0.5} tickLine={false} axisLine={false} hide />
                <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
                <Legend />
                <Line type='basis' dataKey='sessionLength' stroke='#FFFFFF' dot={false} strokeWidth={2} legendType='none' />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default ActivityChart