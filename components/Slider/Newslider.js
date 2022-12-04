import React from 'react';
import axios from 'axios';
import Image from 'next/image'

import Link from "next/link";
import Moment from 'moment';
const MAX_LENGTH = 250;



const mainFunction2 = (id) => {
  const data = {
            id: id
        };

        axios.post('https://diggdevelopment.com/blackstallion_new/api/addmostview/', data).then(function (response) {
            
      });
};


class Newslider extends React.Component {
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
          
          
          
          
          <div className='col-lg-6 col-12 col-md-12 home-page-news' data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
              <div className='news' data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
                <h2 className='text-white'>Newest</h2>
              </div>
              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-aos="fade-right" data-aos-delay="400" data-aos-duration="800">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
               
                <div className="carousel-inner">
                  

                {this.state.trending.map((post, index) => {
                 
                       
                 return (
                     <>
                       
                       <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>


                       <Link href={`/blog/${post.slug}`}><a><img onClick={() => mainFunction2(post.id)} src={post.image} className="d-block w-100" alt="..." />
                           <div className="carousel-caption  d-md-block">
                           <h5 onClick={() => mainFunction2(post.id)}><a href={post.slug}>{post.title}</a></h5>
                             
                                <p onClick={() => mainFunction2(post.id)}>{post.txt}</p>
                             
                             <span>Posted : {post.CreatedAt}</span>
                           </div>
                           </a></Link>
                         </div>
                   </>
                 )
               })}  

                  
                  


                  </div>
                  
                 


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
           




              </>
	  );
	}
  }

  export default Newslider;
  

