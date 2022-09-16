import React from 'react';
import Cards from './Cards';

import {data} from '../../../data'

import './projects.scss'

const Projects = () => {
    console.log(data[0].image)
    return (
        <section id='projects' className='projects-box'>
            <h2 className='title'>Projects</h2>
            <div className="grid">
                {data.map(work => (
                    <Cards
                    key={work.title}
                    title={work.title}
                    image={work.image}
                    description={work.description}
                    categories={work.categories}
                    link={work.link}
                    />
                ))}
            </div>
            
        </section>
    );
};

export default Projects;