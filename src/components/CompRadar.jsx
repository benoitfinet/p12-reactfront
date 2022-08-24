import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import useFetch from '../customHook/usefetch';
import { useParams } from "react-router-dom"

function CompRadar() {

  let { id } = useParams();
  const [infoUser] = useFetch(`http://localhost:3000/user/${id}/performance`);

  infoUser?.data?.data.forEach(addKind => {
    if(addKind.kind === 1) {
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