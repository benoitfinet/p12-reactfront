import { BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar } from 'recharts';
import useFetch from '../customHook/usefetch';
import './activityChart.scss';
import Loader from "../Loader/Loader";


function ActivityChart({ id }) {

  const [infoUser, isLoading, err] = useFetch(`http://localhost:3000/user/${id}/activity`, 2000, false);

  /**
   * Permet de récupérer uniquement les deux derniers chiffres des dates (donc le jour du mois)
   * Puis affiche uniquement le dernier chiffre si ça commence par un zéro
   * ou les deux derniers chiffres dans le cas inverse
   * Exemple :
   * si la date est "day: '2020-07-01'", je ne récupère que le 1 (donc 1er Juillet)
   * si la date est "day: '2020-02-25'", je ne récupère que le 25 (donc 25 Février)
   * Indispensable pour le respect de la maquette v1.0
   */

  infoUser?.data?.sessions.forEach(changeDay => {
    if (changeDay.day.slice(-2).startsWith(0)) {
      changeDay.shortDay = changeDay.day.slice(-1)
    } else {
      changeDay.shortDay = changeDay.day.slice(-2)
    }
  })

  /**
   * Tooltip personnalisé
   * Permet d'afficher les valeurs du poids et des Kcal
   * active = au passage du curseur
   * Se référer à la documentation Recharts (https://recharts.org/en-US/guide/customize)
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
   * Formatter personnalisé
   * Se référer à la documentation Recharts (https://recharts.org/en-US/api/Tooltip#formatter)
   */

  const customFormatter = (value) => {
    return <span className='customFormatter'>{value}</span>;
  };

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
   * Composant retourné "BarChart" correspondant à la section "Activité quotidienne"
   * Exemple d'utilisation dans la documentation : https://recharts.org/en-US/api/BarChart
   */

  return (
    <ResponsiveContainer width='100%' height='80%'>
      <BarChart width='100%' height='100%' data={infoUser?.data?.sessions}>
        <CartesianGrid strokeDasharray='3 3' vertical={false} />
        <XAxis dataKey='shortDay' tickLine={false} axisLine={false} />
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

export default ActivityChart