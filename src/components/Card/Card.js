import React from 'react';
import './Card.css';
import iconstar from '../iconstar.svg'

let numbers = [
  {
    id: 0,
    number: "1",
  }, {
    id: 1,
    number: "2",
  }, {
    id: 2,
    number: "3",
  }, {
    id: 3,
    number: "4",
  }, {
    id: 4,
    number: "5",
  }
]
const Card = (props) => {
  // Définit l'état initial pour le nombre sélectionné
  const [selectedNumber, setSelectedNumber] = React.useState(null);

  // Définit une fonction pour gérer le clic sur un nombre
  const handleNumberClick = (number) => {
    setSelectedNumber(number);
  };
  return (
    <div className="Card">
      <div className='CardDivImg'>
        <img src={iconstar} alt='' className='CardImg'></img>
      </div>
      <h2 className='CardTitle'>How did we do?</h2>
      <p className='CardText '>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className='CardNumbers'>
        {/* Je créer une boucle du tableau numbers avec .map */}
        {numbers.map(number => (
          //  Je me sert de l'id des elements du tableau pour afficher le nombre associé
          // Créer un evenement onClick à chaque nombre pour mettre à jour selectNumber lorsque le nombre est cliqué
          <span className='CardNumber' key={number.id} onClick={() => handleNumberClick(number.number)} >
            {number.number}
          </span>
        ))}
      </div>
      <p className='CardButton' onClick={() => props.handledisplayResult(selectedNumber)}>SUBMIT</p>
    </div >
  );
};
export default Card;
