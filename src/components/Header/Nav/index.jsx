
//Styles
import './nav.scss';
// import logo from 'media/logo.png'

const menu = [
    {
        display: 'Skills',
        path: '#skills',
    },
    {
        display: 'Projects',
        path: '#projects'
    },
    {
        display: 'Contact',
        path: '#contact'
    }
];


function Nav (){

    function handleOnClick () {
        const navGroup = document.getElementById('navbarGroup')
        navGroup.classList.toggle('nav_visible')
    }

    
    


    window.onscroll = () => {
        let navbar =document.querySelector('.navbar')
        
        if (window.scrollY > 200) {
            navbar?.classList.add('active');
        } else {
            navbar?.classList.remove('active');
        }
    }
 


return(
    <>
        <div className='separator'></div>
            
        <nav className='navbar'>
            <div className='navContent'>
                
                <a className='brand' href = "#about"> 
                {/* <img src={logo} alt="logo"/>  */}
                <div className='name'>David Freites</div> 
                </a>
                
                <div id= 'navbarGroup' className='navbarGroup'>
                <ul className='navbarMenu'>
                    {
                            menu.map ((e,i) => (
                            <li key={i} 
                            className='navItem'
                            >
                            <a href ={e.path}> {e.display} </a>  
                            </li>   
                            )) 
                        }         
                    </ul> 

            </div>

                <button className='toggle'
                    onClick={handleOnClick}>
                    <i className="fa-solid fa-bars"></i>
                </button>  
            </div>
        </nav>                               
    </>
    )
}

export default Nav