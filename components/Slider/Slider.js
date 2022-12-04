import React from 'react';
import axios from 'axios';
import Image from 'next/image'

import Link from "next/link";
import Moment from 'moment';

class Slider extends React.Component {
	state = {
		trending: []
	  }

	componentDidMount() {
		axios.get('https://diggdevelopment.com/blackstallion_new/api/newestt',
		)
		  .then(res => {
        const trending = Array.isArray(res.data) ? res.data : [];
				this.setState({ trending });
		  })
	  }

	render() {

	  return (
                <>
                  
                 



                            {/* return (
                                <> */}

              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-aos="fade-right" data-aos-delay="400" data-aos-duration="800">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                
                
                <div className="carousel-inner blog-slider">
                  

                              
                {this.state.trending.map((post, index) => {
                 
                       
                            return (
                                <>
                                  
                                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>


                                  <Link href={`/blog/${post.slug}`}><a>
                                    <img src={post.image} className="d-block w-100" alt="..." />
                                      <div className="carousel-caption  d-md-block">
                                        <h5>{post.title}</h5>
                                        <p>{post.txt}</p>
                                      </div>
                                       </a></Link>
                                    </div>
                              </>
                            )
                          })}                

                {/* {this.state.trending.map((post, index) => { */}
                       {/* var dt = post.CreatedAt; */}
               
                  {/* <>
                  <div className="carousel-item active">
                    <img src="img/blog-slider.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption  d-md-block">
                      <h5>MBG starts Their Journey1</h5>
                      <p>Along with collecting as much data and information as possible, completing their research, and making their plan, the MBG team has now begun to implement their plan in detail, and they are in the initial steps. With the completion of any step, the MBG team will inform you about the latest news and information</p>
                    </div>
                  </div>
                  
                  <div className="carousel-item ">
                    <img src="img/blog-slider.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption  d-md-block">
                      <h5>MBG starts Their Journey2</h5>
                      <p>Along with collecting as much data and information as possible, completing their research, and making their plan, the MBG team has now begun to implement their plan in detail, and they are in the initial steps. With the completion of any step, the MBG team will inform you about the latest news and information</p>
                    </div>
                  </div>

                  <div className="carousel-item ">
                    <img src="img/blog-slider.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption  d-md-block">
                      <h5>MBG starts Their Journey3</h5>
                      <p>Along with collecting as much data and information as possible, completing their research, and making their plan, the MBG team has now begun to implement their plan in detail, and they are in the initial steps. With the completion of any step, the MBG team will inform you about the latest news and information</p>
                    </div>
                  </div>

                  
                  </> */}
                {/* //  })}   */}
                </div>



                
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>  


                                {/* </>
                            ) */}
                       




                    </>
	  );
	}
  }

  export default Slider;
  

