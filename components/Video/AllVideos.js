import React from 'react';
import axios from 'axios';
import Image from 'next/image'

import Link from "next/link";
import YouTube from "react-youtube";

class AllVideo extends React.Component {
	state = {
		trending: []
	  }

	componentDidMount() {
		axios.get('https://diggdevelopment.com/blackstallion_new/api/video',
		)
		  .then(res => {
			const trending = res.data;
			this.setState({ trending });
		  })
	  }

	render() {
	const opts = {
           width:350,
            frameBorder: "0",
            title : "YouTube video player",
            playerVars: {
              autoplay: 0,
            },
          };



	  return (
		  <>





{this.state.trending.map((post, index) => {



return (
	<>
		<div className='col-lg-4 col-md-4 col-12 youtube-dv' data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
              {/* <img src='img/youtube.png' className='w-100'>
			 </img> */}

				<YouTube videoId={post.VideoId} 
            					opts={opts} />
		</div>
	</>
	 )
 })}
 




</>


	  );
	  
	}
  }

  export default AllVideo;
  

