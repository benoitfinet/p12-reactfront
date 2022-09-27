import './sessionsChart.scss';

import AverageSessionsFactory from '../../factories/AverageSessionsFactory';

import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';
import { PropTypes } from "prop-types";

import useFetch from '../customHook/usefetch';
import Loader from '../Loader/Loader';

function ActivityChart({ id }) {

    //Fetching datas from API
    const [performanceData, isLoaded, error] = useFetch(`http://localhost:3000/user/${id}/average-sessions`, AverageSessionsFactory, "api", 1750, false);

    /**
     * Required for customized the tooltip in the chart
     * Please refere to the Recharts documentation (https://recharts.org/en-US/guide/customize)
     * @param active, payload
     * @returns customized tooltip components
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


    if (error) {
        return <div className='loader'>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div className='loader'><Loader /></div>;
    } else {
        return (
            <ResponsiveContainer width='100%' height='100%' className='timeSession'>
                <LineChart
                    className='timeSession__lineChart'
                    width='100%' height='100%' data={performanceData.sessions}
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
                    <XAxis dataKey='day' stroke='#FFFFFF' opacity={0.5} tickLine={false} axisLine={false} />
                    <YAxis padding={{ top: 50 }} stroke='#FFFFFF' opacity={0.5} tickLine={false} axisLine={false} hide />
                    <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
                    <Legend />
                    <Line type='basis' dataKey='sessionLength' stroke='#FFFFFF' dot={false} strokeWidth={2} legendType='none' />
                </LineChart>
            </ResponsiveContainer>
        )
    }
}

//PropTypes for ID
ActivityChart.propTypes = {
    id: PropTypes.number
}

export default ActivityChart