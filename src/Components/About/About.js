import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <div className='heading'> 
                <h1><span>ABOUT </span>ME</h1>   
            </div>


           <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="row left-info">
                    <h3>PERSONAL INFOS</h3>
                        <div className="col-md-6">   
                            <p>First Name :<span>Lucy</span></p>
                            <p>Last Name :<span> Milner</span></p>
                            <p>Age :<span>27 Years</span></p>
                            <p>Nationality :<span>Tunisian</span></p>
                            <p>Freelance :<span>Available</span></p>
                            <button className='rounded-pill'>DOWNLOAD CV<span><i class="fa-solid fa-download"></i></span> </button>
                        </div>

                        <div className="col-md-6">
                            <p> Address :<span>Tunis</span></p>
                            <p>Phone :<span>+21621184010</span></p>
                            <p>Email :<span>you@mail.com</span></p>
                            <p>Skype : <span>lucy.milner</span></p>
                            <p>Langages : <span>French, English</span></p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                   
                </div>
            </div>
           </div>
        </div>
    );
};

export default About;