import PerformanceFactory from '../../factories/PerformanceFactory';

import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import { PropTypes } from "prop-types";

import useFetch from '../customHook/usefetch';
import Loader from '../Loader/Loader';

function CompRadar({ id }) {

  //Fetching datas from API
  const [performanceData, isLoaded, error] = useFetch(`http://localhost:3000/user/${id}/performance`, PerformanceFactory, "api", 700, false);

  if (error) {
    return <div className='loader'>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className='loader'><Loader /></div>;
  } else {
    return (
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart width='100%' height='100%' data={performanceData.activityData}>
          <PolarGrid />
          <PolarAngleAxis dataKey='kind' stroke='#FFFFFF' fontSize={14} tickLine={false} />
          <Radar dataKey='value' stroke='#E60000' fill='#E60000' fillOpacity={0.7} legendType='none' />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}

//PropTypes for ID
CompRadar.propTypes = {
  id: PropTypes.number
}

export default CompRadar