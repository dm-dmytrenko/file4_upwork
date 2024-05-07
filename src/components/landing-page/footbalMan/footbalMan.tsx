import React from 'react';
import footbalImage from '../../../static/images/footBallMan.png';
import './footbalMan.scss'


const FootbalMan: React.FC = () => {
    return (
      <div className="footbal-container">
        <div className="image-side-left">
          <img src={footbalImage} alt="footbal man" /> 
        </div>
        <div className="text-side-right">
            <h1>How it Works:</h1>
            <p>
            Tell Us Your Sport:  Share with us the sport that thrills you.
            Healthy Habits:  Your lifestyle and habits matter.  Fill out our detailed questionnaire. 
            Proof of Dedication:  Provide additional information to show us your commitment.
            Comprehensive Interview:  Let's talk and see if you're a fit for our program.
            Health Assessment:  Pass our tests, and you're in!
            </p>
        </div>
      </div>
    );
  };
  
  export default FootbalMan;