import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './About.css'

const About = () => {
    const percentage1 = 90;
    const percentage2 = 85;
    const percentage3 = 90;
    const percentage4 = 65;
    const percentage5 = 60;
    const percentage6 = 65;
    const percentage7 = 55;
    const percentage8 = 45;
    
    return (
        <div>
            {/* FIRST PART */}
            <div className='heading'> 
                <h1><span>ABOUT </span>ME</h1>   
            </div>

           <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row left-info">
                        <h3>PERSONAL INFOS</h3>
                            <div className="col-md-6">   
                                <p>First Name : <span>Lucy</span></p>
                                <p>Last Name : <span> Milner</span></p>
                                <p>Age : <span>27 Years</span></p>
                                <p>Nationality : <span>Tunisian</span></p>
                                <p>Freelance : <span>Available</span></p>
                                <button className='rounded-pill'>DOWNLOAD CV<span><i class="fa-solid fa-download"></i></span> </button>
                            </div>

                            <div className="col-md-6">
                                <p> Address : <span>Tunis</span></p>
                                <p>Phone : <span>+21621184010</span></p>
                                <p>Email : <span>you@mail.com</span></p>
                                <p>Skype : <span>lucy.milner</span></p>
                                <p>Langages : <span>French, English</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6">
                            <div  className="number">
                                    <h1>12</h1>
                                    <p>YEARS OF<span className="d-block">EXPERIENCE</span> </p>
                            </div>

                            <div  className="number">
                                    <h1>81</h1>
                                    <p>HAPPY<span className="d-block">CUSTOMERS</span> </p>
                            </div>

                            
                        </div>


                        <div className="col-md-6">

                        <div  className="number">
                                    <h1>97</h1>
                                    <p>COMPLETED<span className="d-block">PROJECTS</span> </p>
                            </div>

                            <div  className="number">
                                    <h1>53</h1>
                                    <p>AWARDS<span className="d-block">WON</span> </p>
                            </div>

                        </div>
                    </div>
                    </div>
                </div>
                <hr/>

            {/* SECOND PART */}

            <div className="circular-part">
                <h3>MY SKILLS</h3>

                <div className="row">
                    <div className="col-md-12">
                        <div className="circular">
                            <div>
                            <CircularProgressbar  value={percentage1} text={`${percentage1}%`} />
                            <p>HTML</p>
                            </div>

                            <div>
                            <CircularProgressbar  value={percentage2} text={`${percentage2}%`} />
                            <p>CSS</p>
                            </div>

                            <div>
                            <CircularProgressbar  value={percentage3} text={`${percentage3}%`} />
                            <p>BOOTSTRAP</p>
                            </div>

                            <div>
                            <CircularProgressbar  value={percentage4} text={`${percentage4}%`} />
                            <p>GIT</p>
                            </div>                       
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="circular">
                            <div>
                            <CircularProgressbar  value={percentage5} text={`${percentage5}%`} />
                            <p>JAVASCRIPT</p>
                            </div>

                            <div>
                            <CircularProgressbar  value={percentage6} text={`${percentage6}%`} />
                            <p>REACTJS</p>
                            </div>

                            <div>
                            <CircularProgressbar  value={percentage7} text={`${percentage7}%`} />
                            <p>NODE JS</p>
                            </div>

                            <div>
                            <CircularProgressbar  value={percentage8} text={`${percentage8}%`} />
                            <p>MONGO DB</p>
                            </div>                      
                        </div>
                    </div>
                </div>

            </div>   
            <hr/>   

            {/* LAST PART */}

            <div className='container'>
                <div className="row exp-edu">
                <h3>EXPERIENCE & EDUCATION</h3>  
                    <div className="col-md-12 eduPart">
                    <div className="col-md-6">
                        <div className="resumebox">
                        <ul>
                            <li className="firstLi">
                                <div className='icon'>
                                <i class="fa-solid fa-briefcase"></i>
                                <span>2018 - PRESENT</span>
                                </div>
                                <div className='text'>
                                    <h5>WEB DEVELOPER <span>ENVATO</span> </h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,</p> 
                                </div>                                
                                                               
                            </li>

                            <li className="secondLi">   
                            <div className='icon'>
                                <i class="fa-solid fa-briefcase"></i>
                                <span>2013 - 2018</span>
                                </div>                                
                                <div className="text">
                                    <h5>UI/UX DESIGNER <span>THEMEFOREST</span> </h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,</p>  
                                </div>                                
                            </li>

                            <li className="thirdLi">
                            <div className='icon'>
                                <i class="fa-solid fa-briefcase"></i>
                                <span>2005 - 2013</span>
                                </div> 

                                <div className="text">
                                <h5>CONSULTANT <span>VIDEOHIVE</span> </h5>
                                <p>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,</p> 
                                </div>                               
                                 
                            </li>
                        </ul>
                        </div>
                       
                    </div>



                    <div className="col-md-6">
                    <div className="resumebox">
                        <ul>
                            <li className="fifthLi">   
                            <div className='icon'>
                                <i class="fa-solid fa-briefcase"></i>
                                <span>2015</span>
                                </div>  

                                <div className="text">
                                <h5>ENGINEERING DEGREE <span>OXFORD UNIVERSITY </span> </h5>
                                <p>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,</p>  
                                </div>                              
                                                                
                            </li>

                            <li className="fourthLi">
                                <div className='icon'>
                                <i class="fa-solid fa-briefcase"></i>
                                <span>2012</span>
                                </div>   
                                <div className="text">
                                <h5>MASTER DEGREE <span>KIEV UNIVERSITY</span> </h5>
                                <p>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,</p>    
                                </div>                             
                                                            
                            </li>

                            <li className="sixthLi">
                            <div className='icon'>
                                <i class="fa-solid fa-briefcase"></i>
                                <span>2009</span>
                                </div> 
                                <div className="text">
                                <h5>BACHELOR DEGREE <span>TUNIS HIGH SCHOOL</span> </h5>
                                <p>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,</p>  
                                </div>                               
                                
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                   
                </div>
            </div>

            
            </div>
        </div>
        
    );
};

export default About;