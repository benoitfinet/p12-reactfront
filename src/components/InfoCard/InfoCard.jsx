import './infoCard.scss';

function InfoCard ({ icone, nbGramme, type }) {
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

export default InfoCard