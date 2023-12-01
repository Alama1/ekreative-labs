import './skills.styles.scss'

const Skill = ({ skillInfo }) => {
    const { percentage, skill } = skillInfo
    return (
        <div className='skill'>
            <p className='skill-percentage'>{percentage}</p>
            <div className='skill-vector'></div>
            <div className='rectangle' style={{width: 3.8 * percentage}} >
                <p className='skill-name'>{skill}</p>
            </div>
        </div>
    )
}

export default Skill