import React, {useState} from 'react'
import '../styles/xpContainer.css'

const ExperienceContainer = ({experienceItem, experienceType}) => {

    const mappedXp = experienceItem.map(item => {
        return(
            <div>
                <div className='titleDiv'><h3>{item.experienceLength}</h3><h3 className='centerXp'>{item.experiencePlace}</h3></div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <br/>
            </div>
        )
    })
    return(
        <div> 
            <h2>{experienceType}</h2>
            <div>{mappedXp}</div>

        </div>
    )
}

export default ExperienceContainer;