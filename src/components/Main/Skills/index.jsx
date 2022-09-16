import './skills.scss'
import SkillsSlide from './SkillsSlide';

import {skills} from '../../../data/skills'

const Skills = () => {
    return (
        <section id="skills">
            <div className="box">
                <h2>Skills</h2>
                <h3 className='titleSkills'>Technologies</h3>
                    <SkillsSlide data={skills.technologies} />

                <h3 className='titleSkills'>Design</h3>
                    <SkillsSlide data={skills.design} />
                    
                <h3 className='titleSkills'>Soft Skills</h3>
                    <SkillsSlide data={skills.softSkills} />
            </div>
            
        </section>
    );
};

export default Skills;