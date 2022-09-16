import React from 'react';

import './skillsSlide.scss'

const SkillsSlide = ({data}) => {
    return ( 
        <div className="skillBox">
            {data.map(el => (
                <div key={el.title} className="skill">
                    <img className="icons" src={el.icon} alt={el.title} />
                    <span><strong>{el.title}</strong></span>
                </div>
            )) }            
        </div>
    );
};

export default SkillsSlide;