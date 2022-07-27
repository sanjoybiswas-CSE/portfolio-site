import React from 'react';
import './Blog.css'
import image1 from '../../images/blog-post-1.jpg'
import image2 from '../../images/blog-post-2.jpg'
import image3 from '../../images/blog-post-3.jpg'
import image4 from '../../images/blog-post-4.jpg'
import image5 from '../../images/blog-post-5.jpg'
import image6 from '../../images/blog-post-6.jpg'

const Blog = () => {
    return (
        <div>
            <div className='heading'> 
                <h1><span>MY </span>BLOG</h1>   
            </div>

           <div className= 'container'>
                    <div className = 'row'>
                        <div className='col-md-4 card-show'>
                            <div className="card image-box" > 
                                <img src={image1} className="card-img-top" alt="..." />
                                     <div className="card-body">
                                    <h5 className="card-title text-border">How to Own Your Audience by Creating an Email List</h5>
                                    <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 card-show'>
                            <div className="card image-box" >
                              <img src={image2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Top 10 Toolkits for Deep Learning in 2020</h5>
                                    <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </p>
                                    
                                </div>
                            </div>
                       </div>

                       <div className='col-md-4 card-show'>
                            <div className="card image-box" >
                              <img src={image3} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Everything You Need to Know About Web Accessibility</h5>
                                    <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </p>
                                    
                                </div>
                            </div>
                       </div>

                       <div className='col-md-4 card-show'>
                            <div className="card image-box" >
                              <img src={image4} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">How to Inject Humor & Comedy Into Your Brand</h5>
                                    <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </p>
                                    
                                </div>
                            </div>
                       </div>

                       <div className='col-md-4 card-show'>
                            <div className="card image-box" >
                              <img src={image5} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Women in Web Design: How To Achieve Success</h5>
                                    <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </p>
                                    
                                </div>
                            </div>
                       </div>

                       <div className='col-md-4 card-show'>
                            <div className="card image-box" >
                              <img src={image6} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Evergreen versus topical content: An overview</h5>
                                    <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </p>
                                    
                                </div>
                            </div>
                       </div>

                    </div>
           </div>



           <div className="pagination_rounded">
                        <ul>
                            <li><a href="#" >1</a>
                            </li>
							<li class="/"><a href="#">2</a>
                            </li>
                            <li class="/"><a href="#">3</a>
                            </li>
                            <li class="/"><a href="#">4</a>
                            </li>
                            <li class="/"><a href="#">5</a>
                            </li>
							<li><a href="#">6</a>
                            </li>
                           </ul>
                    </div>



        </div> 
    );
};

export default Blog;