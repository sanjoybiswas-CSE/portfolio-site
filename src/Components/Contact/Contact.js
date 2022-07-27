import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className='heading'> 
                <h1><span>GET IN </span>TOUCH</h1>   
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 contact-left-half">
                        <h2>DON'T BE SHY !</h2>
                        <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                        
                        <div className="row">
                            <col-md-6>
                            <p className="fontAwesome"><i class="fa-solid fa-envelope-open"></i> <span> MAIL ME <br/> <span>lucy@mail.com</span> </span></p>  
                            </col-md-6>

                            <col-md-6>
                            <p className="fontAwesome"><i class="fa-solid fa-phone"></i> <span>CALL ME <br/> <span>+216 21 184 010</span> </span></p>  
                            </col-md-6>

                            <div className="pagination_contact">
                        <ul>
                            <li><a href="#" ><i class="fa-brands fa-facebook-f"></i></a>
                            </li>
							<li class="/"><a href="#"><i class="fa-brands fa-twitter"></i></a>
                            </li>
                            <li class="/"><a href="#"><i class="fa-brands fa-youtube"></i></a>
                            </li>
                            <li class="/"><a href="#"><i class="fa-brands fa-dribbble"></i></a>
                            </li>
                           </ul>
                    </div>
                        </div>

                    </div>


                    <div className="col-md-8">
                        <form>
                            <input className='info rounded-pill' type="text" placeholder='YOUR NAME'/>
                            <input className='info rounded-pill' type='email' placeholder='YOUR EMAIL' />
                            <input className='info rounded-pill' type= "text" placeholder='YOUR SUBJECT' />
                            <textarea className='message' placeholder='YOUR MESSAGE' rows="" cols=""></textarea>
                        </form>
                        <button className='rounded-pill' type='submit' >SEND MESSAGE <span><i class="fa-solid fa-paper-plane"></i></span> </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;