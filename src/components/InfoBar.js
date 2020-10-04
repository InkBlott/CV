import React from 'react';
import ProgressBar from './ProgressBar';
import {progress} from '../data';

const style = {
 
    width: '240px'
}
const aStyle ={
    maxWidth: '300px',
    paddingRight: '30px'
}



const InfoBar = ({image, name, birthDate, about, contacts}) => {


    return (
        <div style = {aStyle}>
            <h1>{name}</h1>
            <h3>Curriculum Vitae</h3>

            <img style= {style} src={image} alt="Person"/>
            <p>{birthDate}</p>

            <h2>ABOUT ME</h2>
            <p>{about}</p>

            <h2> CONTACTS </h2>
            <p>{contacts}</p>
            <ProgressBar progress={progress} name='SKILLS'/>
        </div>
    )
}

export default InfoBar;