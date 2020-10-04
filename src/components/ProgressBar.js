import React from 'react'
import '../styles/progressBar.css'

const ProgressBar = ({name, progress}) => {
    const mappedProgress = progress.map(item => {
        const c = {
            width: item.barProgress
        }
        return(
                <div>
                    <h3>{item.progressName}</h3>
                    <div className='meter'>
                        <span style={c}></span>
                    </div>
                </div>
        )
    })

    return(
        <div>
            <h2>{name}</h2>
            {mappedProgress}
            <br/>
        </div>

    )
}

export default ProgressBar;