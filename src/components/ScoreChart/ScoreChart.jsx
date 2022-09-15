import { RadialBar, RadialBarChart, Legend, ResponsiveContainer } from 'recharts';
import useFetch from '../customHook/usefetch';
import './scoreChart.scss';
import Loader from '../Loader/Loader';

function ScoreChart({ id }) {

  const [infoUser, isLoading, err] = useFetch(`http://localhost:3000/user/${id}`, 1200, false);

  /**
 * Légende personnalisée
 * Permet d'afficher la valeur, en pourcentage, du score moyen de l'utilisateur
 * Se référer à la documentation Recharts (https://recharts.org/en-US/api/Legend)
 */

  function CustomLegendScore(payload) {
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

  /**
   * Permet de retravailler les datas dans le but d'avoir une valeur de correspondance
   * Pour que le graphique fonctionne, il faut lui donner une valeur max (100%) pour que le reste s'affiche en fonction de celle-ci
   */

  let newData = [
    {
      newTodayScore: 100,
      fill: '#FFFFFF'
    },
    {
      newTodayScore: infoUser?.data?.todayScore * 100,
      fill: '#E60000'
    }
  ]

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
* Composant retourné "RadialBarChart" correspondant à la section "Score moyen"
* Exemple d'utilisation dans la documentation : https://recharts.org/en-US/api/RadialBarChart
*/

  return (
    <ResponsiveContainer width='100%' height='100%'>
      <RadialBarChart startAngle={90} endAngle={470} cx='50%' cy='50%' innerRadius={100} outerRadius={120} data={newData}>
        <RadialBar cornerRadius='100%' dataKey='newTodayScore' />
        <Legend content={<CustomLegendScore />} verticalAlign='middle' />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

export default ScoreChart
