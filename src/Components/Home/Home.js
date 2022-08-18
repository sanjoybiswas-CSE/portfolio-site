import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../../images/profile6.jpg';

import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>           
           <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className='left-color'></div>
                    <img className='home-img' src={bgImage} alt="" />
                </div>

                <div className="col-md-6 right-half">
                    <h1>I'M LUCY MILNER.<br/><span>WEB DESIGNER</span></h1>
                    <p>I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                    <button className='rounded-pill' onClick={()=>{
                        navigate("/about")
                    }}>More About Me <span><i class="fa-solid fa-arrow-right"></i></span> </button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Home;