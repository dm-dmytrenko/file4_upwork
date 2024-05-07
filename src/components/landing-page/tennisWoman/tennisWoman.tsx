import React from 'react';
import tennisWomanImage from '../../../static/images/tennisWoman.png';
import './tennisWoman.scss'


const TennisWoman: React.FC = () => {
    return (
      <div className="tennis-container">
        <div className="text-side-left">
            <h1>What's in it for You?</h1>
            <p>Income Opportunity:  Earn money while doing what you love.
Health Benefits:  Stay in top shape with our health guidelines.
Recognition:  Get noticed for your dedication, not just your trophies.</p>
        </div>
        <div className="image-side-right">
          <img src={tennisWomanImage} alt="tennis woman" /> 
        </div>
      </div>
    );
  };
  
  export default TennisWoman;