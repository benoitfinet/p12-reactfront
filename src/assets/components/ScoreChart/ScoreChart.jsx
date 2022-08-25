import { RadialBar, RadialBarChart, Legend, ResponsiveContainer } from 'recharts';
import useFetch from '../customHook/usefetch';
import './scoreChart.scss';
import Loader from '../Loader/Loader';

function ScoreChart({id}) {

  const [infoUser, isLoading] = useFetch(`http://localhost:3000/user/${id}`, 1200);

  function CustomLegendScore (payload) {
    return (
      <div className='legendScore'>
        <p className='legendScore__number'>
          {payload?.payload[1]?.payload.newTodayScore}%
        </p>
        <p className='legendScore__text'>de votre</p>
        <p className='legendScore__text'>objectif</p>
      </div>
    )
  }

  let newData = [
    {
      newTodayScore : 100,
      fill : '#FFFFFF'
    },
    {
      newTodayScore : infoUser?.data?.todayScore * 100,
      fill : '#E60000'
    }
  ]
  if(isLoading) {
    return (
      <div className='loader'>
        <Loader />
      </div>
    )}
  return (
    <ResponsiveContainer width='100%' height='100%'>
        <RadialBarChart cx='50%' cy='50%' innerRadius={100} outerRadius={120} data={newData}>
          <RadialBar cornerRadius='100%' dataKey='newTodayScore' />
          <Legend content={<CustomLegendScore />} verticalAlign='middle'/>
        </RadialBarChart>
      </ResponsiveContainer>
  );
}

export default ScoreChart
