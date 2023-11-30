import './skills.styles.scss'
import {Fragment} from "react";

const Skill = ({ skillInfo }) => {
    const { percentage, skill } = skillInfo
    return (
        <div className='skill'>
            <p className='skill-percentage'>{percentage}</p>
            <div className='vector'></div>
            <div className='rectangle' style={{width: 3.8 * percentage}} >
                <p className='skillName'>{skill}</p>
            </div>
        </div>
    )
}

export default Skill