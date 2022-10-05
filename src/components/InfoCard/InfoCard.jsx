import './infoCard.scss';

import { PropTypes } from "prop-types";

/**
 * 
 * @param {string} icone : set the path of the icon asset
 * @param {number} nbGramme : set the number of kCal burned by the user
 * @param {string} type : using here to have an alternate identifier for the icon
 * @returns InfoCard.jsx
 */
function InfoCard({ icone, nbGramme, type }) {
  return (
    <div className='information'>
      <div className="information__details">
        <img src={icone} alt={type} />
      </div>
      <div>
        {type === 'Calories' ? <p className='information__unity'> {nbGramme}kCal </p> : <p className='information__unity'> {nbGramme}g </p>}
        <p className='information__name'> {type} </p>
      </div>
    </div>
  )
}

//PropTypes for icone, nbGramme, type
InfoCard.propTypes = {
  icone: PropTypes.string,
  nbGramme: PropTypes.number,
  type: PropTypes.string
}

export default InfoCard