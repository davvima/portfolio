

import './hero.scss'

const Hero = () => {
    return (
        <section className="hero container">
            <div className="content">
             <div className="text">
             <h2 className="name">David Freites</h2>
             <h3 className="name">Front-End Developer</h3>
                 <h1>Bringing Ideas to Life
                    <br />
                     in the Virtual World.</h1>
                 
             </div>
             <a className="button" href='#contact'>
             Get in Touch
             </a>
            </div>

            {/* <div className="image">
                
            </div> */}
            
        </section>
    );
};

export default Hero;