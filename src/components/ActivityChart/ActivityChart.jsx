import './activityChart.scss';

import ActivityFactory from '../../factories/ActivityFactory';

import { PropTypes } from "prop-types";
import { BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar } from 'recharts';

import useFetch from '../customHook/usefetch';
import Loader from "../Loader/Loader";

function ActivityChart({ id }) {

  const [activityData, isLoaded, error] = useFetch(`http://localhost:3000/user/${id}/activity`, ActivityFactory, "api", 2000, false);

  /**
   * Required for customized the tooltip in the chart
   * @param active, payload
   * @returns customized tooltip components
   * Please refere to the Recharts documentation (https://recharts.org/en-US/guide/customize)
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className='tooltip'>
          <p className='tooltip__info'>{`${payload[0].value}kg`}</p>
          <p className='tooltip__info'>{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }
    return null;
  };

  /**
   * Required for customized the formatter in the chart
   * @param value
   * @returns customized formatter components
   * Please refere to the Recharts documentation (https://recharts.org/en-US/api/Tooltip#formatter)
   */
  const customFormatter = (value) => {
    return <span className='customFormatter'>{value}</span>;
  };

  if (error) {
    return <div className='loader'>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className='loader'><Loader /></div>;
  } else {
    return (
      <ResponsiveContainer width='100%' height='80%'>
        <BarChart width='100%' height='100%' data={activityData.sessions}>
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis dataKey='index' tickLine={false} axisLine={false} />
          <XAxis dataKey='calories' type='number' tickLine={false} axisLine={false} />
          <YAxis dataKey='kilogram' type='number' tickLine={false} orientation='right' axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} />
          <YAxis dataKey='calories' type='number' yAxisId='calorie' hide />
          <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
          <Legend verticalAlign='top' align='right' iconType='circle' iconSize='8' wrapperStyle={{ marginTop: '-40px' }} formatter={customFormatter} />
          <Bar name='Poids (kg)' dataKey='kilogram' radius={[10, 10, 0, 0]} barSize={7} fill='#282D30' />
          <Bar name='Calories brûlées (kCal)' dataKey='calories' radius={[10, 10, 0, 0]} barSize={7} yAxisId='calorie' fill='#E60000' />
        </BarChart>
      </ResponsiveContainer>
    )
  }
}

//PropTypes for ID
ActivityChart.propTypes = {
  id: PropTypes.number
}

export default ActivityChart