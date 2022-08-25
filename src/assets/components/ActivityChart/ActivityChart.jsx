import { BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar } from 'recharts';
import useFetch from '../customHook/usefetch';
import './activityChart.scss';
import Loader from "../Loader/Loader";


function ActivityChart({id}) {

  const [infoUser, isLoading] = useFetch(`http://localhost:3000/user/${id}/activity`, 2000);

  infoUser?.data?.sessions.forEach(changeDay => {
    if(changeDay.day.slice(-2).startsWith(0)) {
      changeDay.shortDay = changeDay.day.slice(-1)
    } else {
      changeDay.shortDay = changeDay.day.slice(-2)
    }
  })

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
  if(isLoading) {
    return (
      <div className='loader'>
        <Loader />
      </div>
    )}

  return (
      <ResponsiveContainer width='100%' height='80%'>
        <BarChart width='100%' height='100%' data={infoUser?.data?.sessions}>
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis dataKey='shortDay' tickLine={false} axisLine={false} />
          <XAxis dataKey='calories' type='number' tickLine={false} axisLine={false} />
          <YAxis dataKey='kilogram' type='number' tickLine={false} orientation='right' axisLine={false} domain={['dataMin - 1', 'dataMax + 1']} />
          <YAxis dataKey='calories' type='number' yAxisId='calorie' hide />
          <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
          <Legend verticalAlign='top' align='right' iconType='circle' wrapperStyle={{ marginTop: '-40px' }} formatter={(value) => <span>{value}</span>} />
          <Bar name='Poids (kg)' dataKey='kilogram' radius={[10, 10, 0, 0]} barSize={7} fill='#282D30' />
          <Bar name='Calories brûlées (kCal)' dataKey='calories' radius={[10, 10, 0, 0]} barSize={7} yAxisId='calorie' fill='#E60000' />
        </BarChart>
      </ResponsiveContainer>
  )
}

export default ActivityChart