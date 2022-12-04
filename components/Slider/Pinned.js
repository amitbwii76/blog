import React from 'react';
import axios from 'axios';
import Image from 'next/image'

import Link from "next/link";
import Moment from 'moment';
const MAX_LENGTH = 250;


const mainFunction2 = (id) => {
    //alert('id is '+ id);
  const data = {
            id: id
        };

        axios.post('https://diggdevelopment.com/blackstallion_new/api/addmostview/', data).then(function (response) {
            
      });
};


class Pinned extends React.Component {
	state = {
		trending: [],
    mostviews: [],
    trending2: [],
	  }

    


	componentDidMount() {
		axios.get('https://diggdevelopment.com/blackstallion_new/api/pinned',
		)
		  .then(res => {
        const trending = Array.isArray(res.data) ? res.data : [];
				this.setState({ trending });
		  })


axios.get('https://diggdevelopment.com/blackstallion_new/api/pinned2',
    )
      .then(res => {
        const trending2 = Array.isArray(res.data) ? res.data : [];
        this.setState({ trending2 });
      })


      axios.get('https://diggdevelopment.com/blackstallion_new/api/mostview3',
      )
        .then(res => {
          const mostviews = Array.isArray(res.data) ? res.data : [];
          this.setState({ mostviews });
        })



	  }

    




	render() {

	  return (
                <>
          
          
          
          
          <div className='col-lg-6 col-12 col-md-12 side-slider'>
              <div className='news' data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
                <h2 className='text-white'>pined</h2>
              </div>
              <div id="carouselExampleCaptions2" className="carousel slide" data-bs-ride="carousel" data-aos="fade-left" data-aos-delay="400" data-aos-duration="800">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                

                {this.state.trending.map((post, index) => {
                   return (
                    <>
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>

                  <Link href={`/blog/${post.slug}`}><a>
                    <div className='flex-dv'>


                      
                    <img onClick={() => mainFunction2(post.id)} src={post.image} className="d-block w-100" alt="..." />


                      <div className="carousel-caption d-md-block">
                      <h5 onClick={() => mainFunction2(post.id)}><a href={post.slug}>{post.title}</a></h5>
                     
                                <p onClick={() => mainFunction2(post.id)}>{post.txt}</p>
                              
                      <span>Posted : {post.CreatedAt}</span>
                      </div>
                    </div>
                    </a></Link>
                  </div>
                  </>
                 )
                    })}  




                </div>



                <div className='slider-buttons'>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions2" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

              </div>


              <div className='news' data-aos="fade-left" data-aos-delay="200" data-aos-duration="800">
                <h2 className='text-white kk'>Most views</h2>
              </div>
              <div id="carouselExampleCaptions3" className="carousel slide" data-bs-ride="carousel" data-aos="fade-left" data-aos-delay="400" data-aos-duration="800">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                 

                {this.state.trending2.map((post, index) => {
                   return (
                    <>
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>

                  <Link href={`/blog/${post.slug}`}><a>
                    <div className='flex-dv'>


                      
                    <img onClick={() => mainFunction2(post.id)} src={post.image} className="d-block w-100" alt="..." />


                      <div className="carousel-caption d-md-block">
                      <h5 onClick={() => mainFunction2(post.id)}><a href={post.slug}>{post.title}</a></h5>
                     
                                <p onClick={() => mainFunction2(post.id)}>{post.txt}</p>
                              
                      <span>Posted : {post.CreatedAt}</span>
                      </div>
                    </div>
                    </a></Link>
                  </div>
                  </>
                 )
                    })}  
                  
                  
                




                </div>
                <div className='slider-buttons'>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions3" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

              </div>
            </div>
           




              </>
	  );
	}
  }

  export default Pinned;
  

