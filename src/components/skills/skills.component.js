import './skills.styles.scss'
import Skill from './skill.component'

const Skills = () => {
    return (
        <div className="skills">
            <div className="skills-wrapper">
                <div className="skills-title">Skills</div>
                <div className="vector"></div>
                <div className="group">
                    <div className="skills-group">
                        <Skill skillInfo={{percentage: '69', skill: 'Skill 1'}}/>
                        <Skill skillInfo={{percentage: '30', skill: 'Skill 2'}}/>
                        <Skill skillInfo={{percentage: '99', skill: 'Skill 3'}}/>
                        <Skill skillInfo={{percentage: '40', skill: 'Skill 4'}}/>
                        <Skill skillInfo={{percentage: '50', skill: 'Skill 5'}}/>
                        <Skill skillInfo={{percentage: '70', skill: 'Skill 6'}}/>
                        <Skill skillInfo={{percentage: '22', skill: 'Skill 7'}}/>
                        <Skill skillInfo={{percentage: '45', skill: 'Skill 32762138912731289371289371289317'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills