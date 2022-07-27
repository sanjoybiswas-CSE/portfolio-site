import React from 'react';
import {Link} from 'react-router-dom';
import './Portfolio.css'
import image1 from '../../images/portfolio-1.jpg';
import image2 from '../../images/portfolio-2.jpg';
import image3 from '../../images/portfolio-3.jpg';
import image4 from '../../images/portfolio-4.jpg';
import image5 from '../../images/portfolio-5.jpg';
import image6 from '../../images/portfolio-6.jpg';
import image7 from '../../images/portfolio-7.jpg';
import image8 from '../../images/portfolio-8.jpg';
import image9 from '../../images/portfolio-9.jpg';


const Portfolio = () => {
    return (
        <div className="grid-wrap">

            <div className='heading'> 
                <h1><span>MY </span>PORTFOLIO</h1>   
            </div>

            <div className="container">
                <div className="row animate__animated animate__backInLeft">  
                    <div className="col-md-4 "> 
                    <div className="card">
                        <img src={image1} alt="" />
                        <div className='overlay'>
                            <h1>
                                <Link to="/">Image Project</Link>
                            </h1>
                        </div>
                        </div>
                    </div>

                    <div className="col-md-4 card"> 
                        <img src={image2} alt="" />
                    </div>

                    <div className="col-md-4 card"> 
                        <img src={image3} alt="" />
                    </div>
               
                    <div className="col-md-4 card"> 
                        <img src={image4} alt="" />
                    </div>

                    <div className="col-md-4 card"> 
                        <img src={image5} alt="" />
                    </div>

                    <div className="col-md-4 card"> 
                        <img src={image6} alt="" />
                    </div>
                
               
                    <div className="col-md-4 card"> 
                        <img src={image7} alt="" />
                    </div>

                    <div className="col-md-4 card"> 
                        <img src={image8} alt="" />
                    </div>

                    <div className="col-md-4 card">
                        <img src={image9} alt="" /> 
                    </div>
                </div>
            </div>
        </div>
            
    );
};

export default Portfolio;