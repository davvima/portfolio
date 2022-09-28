import { useState } from 'react';
import './card.scss'
import ClickedCard from './ClickedCard';

const Cards = ({title,image,description,categories,link}) => {

    const [isClicked, setIsClicked] = useState(false)

    return (
        <>

            <div className="containerCard">
                <div className={isClicked? "activeCard": "card"}>        


                    {isClicked?<ClickedCard 
                        title={title}
                        image={image}
                        description={description}
                        categories={categories}
                        link={link}
                        setIsClicked= {setIsClicked} /> 
                        :
                        <>
                        <h3 className='cardTitle'>{title}</h3>
        
                        <figure className="cardImage">
                            <img src={image} alt="{title}" />  
                        </figure>
                        <button onClick={()=>setIsClicked(true)}>See more...</button>

                        </>
                    }
                </div>
            </div>
            
            

        </>        
    )
}

export default Cards;

