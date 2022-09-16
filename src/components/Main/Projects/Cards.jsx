// import { useState } from 'react';
import Categories from '../Categories';
import './card.scss'

const Cards = ({title,image,description,categories,link}) => {

    // const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="card">
            <h3 className='cardTitle'>{title}</h3>
            <Categories categories={categories} />

            <figure className="cardImage">
                <img src={image} alt="{title}" />  
            </figure>

            {link &&
            <a href={link} target="_blank" rel="noreferrer noopener">
             <button>Ver Más</button>
            </a>
            }
            
        </div>
    );
};

export default Cards;