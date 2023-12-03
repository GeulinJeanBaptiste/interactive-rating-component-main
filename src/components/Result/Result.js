import React from 'react';
import './Result.css';
import illustrationthankyou from '../illustrationthankyou.svg'

const Result = (props) => {
  return (
    <div className="Result">
      <div className='ResultDivImg'>
        <img src={illustrationthankyou} alt='' className='ResultImg'></img>
      </div>
      <p className='Resultresult'>You selected {props.selectedNumber} ou of 5</p>
      <h2 className='ResultTitle '>Thank you!</h2>
      <p className='ResultText'>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  )
};

export default Result;