import React from 'react';
import teamImage from '../../../static/images/team.png';
import './joinTeam.scss'


const JoinTeam: React.FC = () => {
    return (
      <div className="team-container">
        <div className="image-side-left">
          <img src={teamImage} alt="team image" /> 
        </div>
        <div className="text-side-right">
            <h1>Join</h1>
            <h2>Our team of</h2>
            <h2>Healthy, dedicated athletes!</h2>
            <h3>Turn your passion into opportunity!</h3>
            <p><a href="#">Apply Now!</a></p>
        </div>
      </div>
    );
  };
  
  export default JoinTeam;