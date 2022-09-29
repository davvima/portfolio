import React from 'react';
import Form from './Form';

import github from '../../media/icons/github.png'
import linkedin from '../../media/icons/linkedin.png'
import pdf from '../../media/icons/pdf.png'
import fileCV from '../../media/files/CV David Freites-Frontend Developer.pdf'

import './footer.scss'

const Footer = () => {
    return (
        <footer>
            <section id="contact" className="container">
                <div className="contactText">
                    <p>📧 dfreites7@gmail.com</p>
                    <p>📲 +54 11 38599241</p>
                    <p>📌 Mendoza, Argentina</p>
                    <ul className="icons">
                        <li> 
                            <a href="https://github.com/davvima" rel="noreferrer noopener" target="_blank">
                                <img src={github} alt="github" />
                            </a> 
                        </li>
                        <li> 
                            <a href="https://www.linkedin.com/in/david-freites-frontend-developer"  rel="noreferrer noopener" target="_blank">
                              <img src={linkedin} alt="linkedin" /> 
                            </a>
                        </li>
                        <li> 
                            <a href={fileCV} download="CV-David Freites- Frontend Developer" rel="noopener">
                              <img src={pdf} alt="pdf" /> 
                            </a>
                        </li>
                    </ul>
                </div>   

                <Form />  
            </section>    
        </footer>
    );
};

export default Footer;