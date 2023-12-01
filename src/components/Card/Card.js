import React from 'react';
import './Card.css';
import iconstar from '../iconstar.svg'

const Card = () => {
  return (
    <div className="Card">
      <div className='CardDivImg'>
        <img src={iconstar} alt='' className='CardImg'></img>
      </div>
      <h2 className='CardTitle'>How did we do?</h2>
      <p className='CardText '>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className='CardNumbers'>
        <span className='CardNumber'>1</span>
        <span className='CardNumber'>2</span>
        <span className='CardNumber'>3</span>
        <span className='CardNumber'>4</span>
        <span className='CardNumber'>5</span>
      </div>
      <p className='CardButton'>SUBMIT</p>
    </div>
  )
};

export default Card;
