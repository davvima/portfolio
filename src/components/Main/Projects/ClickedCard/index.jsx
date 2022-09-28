import Categories from '../../Categories';
import './clickedCard.scss'

const ClickedCard = ({title,image,description,categories,link, setIsClicked}) => {
    return (
        <div className='clickedCard'>
            <button className="closeButton" onClick={()=>setIsClicked(false)}>X</button>
            <h2>{title}</h2>
            <Categories categories={categories} />
            <div>{description}</div>
            {link &&
                <a href={link} target="_blank" rel="noreferrer noopener">
                <button onClick={()=>setIsClicked(true)}>Website</button>
                </a>
            }
            
        </div>
    );
};

export default ClickedCard;