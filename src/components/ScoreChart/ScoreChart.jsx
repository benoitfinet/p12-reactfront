import './scoreChart.scss';

import UserFactory from '../../factories/UserFactory';

import { RadialBar, RadialBarChart, Legend, ResponsiveContainer } from 'recharts';
import { PropTypes } from "prop-types";

import useFetch from '../customHook/usefetch';
import Loader from '../Loader/Loader';

function ScoreChart({ id }) {

  //Fetching datas from API
  const [userData, isLoaded, error] = useFetch(`http://localhost:3000/user/${id}`, UserFactory, "user", 1200, false);

  /**
   * Required for customized the legend in the chart
   * @param payload
   * @returns customized legend components
   * Please refere to the Recharts documentation (https://recharts.org/en-US/api/Legend)
   */
  function CustomLegendScore(payload) {
    return (
      <div className='legendScore'>
        <p className='legendScore__number'>
          {payload.payload[1].payload.newTodayScore}%
        </p>
        <p className='legendScore__text'>de votre</p>
        <p className='legendScore__text'>objectif</p>
      </div>
    )
  }
  //Required to set a reference for the datas inside the chart
  let newData = [
    {
      newTodayScore: 100,
      fill: '#FFFFFF'
    },
    {
      newTodayScore: userData.todayScore * 100,
      fill: '#E60000'
    }
  ]


  if (error) {
    return <div className='loader'>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className='loader'><Loader /></div>;
  } else {
    return (
      <ResponsiveContainer width='100%' height='100%'>
        <RadialBarChart startAngle={90} endAngle={470} cx='50%' cy='50%' innerRadius={100} outerRadius={120} data={newData}>
          <RadialBar cornerRadius='100%' dataKey='newTodayScore' />
          <Legend content={<CustomLegendScore />} verticalAlign='middle' />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  }
}

//PropTypes for ID
ScoreChart.propTypes = {
  id: PropTypes.number
}

export default ScoreChart
