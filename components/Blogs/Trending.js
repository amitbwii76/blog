import React from 'react';
import axios from 'axios';
import Image from 'next/image'

import Link from "next/link";
import Moment from 'moment';
const MAX_LENGTH = 250000000000;

const mainFunction2 = (id) => {
  const data = {
            id: id
        };

        axios.post('https://diggdevelopment.com/blackstallion_new/api/addmostview/', data).then(function (response) {
            
      });
};



class Trending extends React.Component {
	state = {
		trending: []
	  }

	componentDidMount() {
		axios.get('https://diggdevelopment.com/blackstallion_new/api/newsblogs',
		)
		  .then(res => {
			const trending = Array.isArray(res.data) ? res.data : [];
			//const trending = res.data;
			this.setState({ trending });
		  })
	  }

	render() {

	  return (
                <>
                   {this.state.trending.map((post, index) => {
                       var dt = post.CreatedAt;
                            return (
                                <>
                                     
                                      <div className="blogs-all">
                                      <Link href={`/blog/${post.slug}`}><a>
                                        <div className="tab1">
                                            <div className="tab1-img">
                                            <img onClick={() => mainFunction2(post.id)} className="mask-on tab" src={post.image} />  
                                            </div>
                                            <div className="alfa-lp">
                                                
                                                	
                                                    <h4 onClick={() => mainFunction2(post.id)}>{post.title}</h4>
                                                   
                                                
                                                
                                                
                                                  
                                        
                                        
                                                    <p>
                                                        
                                                        
                                                           <div className="product-des" dangerouslySetInnerHTML={{ __html: post.description_front }} onClick={() => mainFunction2(post.id)} />
                                                       
                                                    </p> 
                                                
                                                
                                                
                                                <h6 className="post-date">Posted: {post.CreatedAt} </h6>
                                            </div>
                                            <div className="tab1-content">

                                            </div>
                                        </div></a></Link>
                                    </div>




                                </>
                            )
                            })}   
                    </>
	  );
	}
  }

  export default Trending;
  

