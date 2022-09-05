import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import useFetch from '../customHook/usefetch';
import Loader from '../Loader/Loader';

function CompRadar({ id }) {

  const [infoUser, isLoading] = useFetch(`http://localhost:3000/user/${id}/performance`, 700);

  infoUser?.data?.data.forEach(addKind => {
    if (addKind.kind === 1) {
      addKind.newKind = "Intensité"
    } else if (addKind.kind === 2) {
      addKind.newKind = "Vitesse"
    }
    else if (addKind.kind === 3) {
      addKind.newKind = "Force"
    }
    else if (addKind.kind === 4) {
      addKind.newKind = "Endurance"
    }
    else if (addKind.kind === 5) {
      addKind.newKind = "Energie"
    }
    else if (addKind.kind === 6) {
      addKind.newKind = "Cardio"
    }
  })
  if (isLoading) {
    return (
      <div className='loader'>
        <Loader />
      </div>
    )
  }
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <RadarChart width='100%' height='100%' data={infoUser?.data?.data}>
        <PolarGrid />
        <PolarAngleAxis dataKey='newKind' stroke='#FFFFFF' fontSize={14} tickLine={false} />
        <Radar dataKey='value' stroke='#E60000' fill='#E60000' fillOpacity={0.7} legendType='none' />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default CompRadar