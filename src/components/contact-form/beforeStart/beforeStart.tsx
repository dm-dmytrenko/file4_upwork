import React from 'react';
import './beforeStart.scss'

import bodySetLeft from '../../../static/images/body-set-left.png';
import bodySetRight from '../../../static/images/body-set-right.png';


const BeforeStart: React.FC = () => {
    return (
      <div className="before-start-container">
        <h2 className='gradient-text'>Before You Start</h2>
        <div className='before-start-wrapper'>
            <h3>You will need</h3>
            <p>recent photos of your physique from neck down, in your swimsuit / swim      trunks, like the photos below.</p>
            <div className='image-container'>
                <img src={bodySetLeft} alt="men bodies" /> 
                <img src={bodySetRight} alt="women bodies" /> 
            </div>
            <h3>Also, You May</h3>
            <p>Need To Check With Your Parents About:</p>
            <ul>
                <li>Your antibiotic history</li>
                <li>Your birthing method - vaginal delivery, c-section</li>
                <li>If you were breastfed, and if so, for how long</li>
            </ul>
        </div>
      </div>
    );
  };
  
  export default BeforeStart;