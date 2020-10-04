import React, {useState} from 'react';
import InfoBar from './components/InfoBar';
import profilePic from './images/Mano.png';
import './styles/appStyle.css'
import ExperienceContainer from './components/ExperienceContainer';
import {about, contacts, workXp, educationXp} from './data';

function App() {
  const [name, setName] = useState('Mantas Balcius');
  const style = {
    gridColumnStart: 2
}

  return (
    <div className='mainContainer'>
      <div className='mainDiv'>
        <InfoBar image={profilePic} name={name} birthDate={'1991 07 25'} about={about} contacts = {contacts}/>
        <div style={style}> 
          <ExperienceContainer experienceType='WORK EXPERIENCE' experienceItem={workXp}/> 
          <ExperienceContainer experienceType='EDUCATION' experienceItem={educationXp}/>
        </div>
      </div>
    </div>

  );
}

export default App;
