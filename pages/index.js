import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
import ReactDOM from 'react-dom';
import Newslider from '../components/Slider/Newslider';
import Pinned from '../components/Slider/Pinned';
import $ from 'jquery';
import AllVideo from '../components/Video/AllVideos';
import { useEffect, useState } from "react";
import axios from "axios";


export default function Home() {


  const [state, setState] = useState({});
  
  

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
  };

  const msgChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value
    });
};

const countryChange = (e) => {
  const value = e.target.value;
  setState({
    ...state,
    [e.target.name]: value
  });
};







  const handleSubmit = (e) => {
    e.preventDefault();
     var email = state.name;
     var userinput = email;
     const msg = state.msgs;
     const country = state.country;

    // alert('msg is ' + msg);
     //alert('country is ' + country);


     var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
 
     if(!pattern.test(userinput))
     {
         $("#error").show("slow").delay(5000).fadeOut();
        $("#msg").hide();
     }

     if(msg==undefined)
     {
      $("#error5").show("slow").delay(5000).fadeOut();
     }

     if(country=='empty')
     {
      $("#error11").show("slow").delay(5000).fadeOut();
     }

    if(msg!=undefined && country!=undefined && pattern.test(userinput))
     {
                      $("#error").hide();
              //$("#msg").show("slow").delay(5000).fadeOut(); //display success message
              //$("#loading-bar2").show();
              // making array and will pass to api as parameter
              const data = {
                name: state.name,
                country: state.country,
                msgs: state.msgs
              };						
            
            
              
        
              axios.post('https://diggdevelopment.com/blackstallion_new/api/sendmsg/', data).then(function (response) {
              $("#loading-bar2").hide();
                if(response.data.msg=='exist')
              {
                $("#msg4").show("slow").delay(5000).fadeOut();
                $("#error").hide();
              }
            else
              {
                //alert('message sent');
                $("#msg").show("slow").delay(5000).fadeOut();
                $("#error").hide();
                setState({
                  ...state,
                  name: ""
                  });
              }	
              });
     }



    // else {
    //    $("#error").hide();
    //    //$("#msg").show("slow").delay(5000).fadeOut(); //display success message
    //    //$("#loading-bar2").show();
    //   // making array and will pass to api as parameter
    //    const data = {
    //      name: state.name,
    //      country: state.country,
    //      msgs: state.msgs
    //    };						
     
     
       
 
    //    axios.post('https://diggdevelopment.com/blackstallion_new/api/sendmsg/', data).then(function (response) {
    //    $("#loading-bar2").hide();
    //      if(response.data.msg=='exist')
    //    {
    //      $("#msg4").show("slow").delay(5000).fadeOut();
    //      $("#error").hide();
    //    }
    //  else
    //    {
    //      //alert('message sent');
    //      $("#msg").show("slow").delay(5000).fadeOut();
    //      $("#error").hide();
    //      setState({
    //        ...state,
    //        name: ""
    //        });
    //    }	
    //    });
    //  }
   
  };



  function handleChange3() {
    $("span").each(function () {
      var text = $(this).text()
    })
  }
  
  
  if (typeof window !== 'undefined') {
    handleChange3();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('nav.navbar').addClass("sticky");
      } else {
        $('nav.navbar').removeClass("sticky");
      }
    });
    var count = 1;
    $('.navbar-collapse .dropdown').click(function () {
      if (count % 2 == 0) {
        $('.dropdown-content').hide();
      }
      else {
        $('.dropdown-content').show();
      }
      count++;
    });
  }
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous" />

      {/* header background video start */}
      <div dangerouslySetInnerHTML={{ __html: ` <video loop unmuted autoplay playsinline src='https://firstversion-chi.vercel.app/img/video.mp4' />, ` }}></div>
      <div className='mobile-video' dangerouslySetInnerHTML={{ __html: ` <video loop unmuted autoplay playsinline src='https://firstversion-chi.vercel.app/img/video.mp4' />, ` }}></div>
      {/* header background video end */}

      {/* header nav start */}
      <header className='home-page-header'>
        <div className='container container-lg'>
          {/*nav start */}
          <nav className='navbar navbar-expand-lg' >
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="navbar-toggler-icon"><img src="img/list.svg" /></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                <li className="nav-item"><a className="nav-link" href="#" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="200">Marketplace <span className="tooltips">Coming soon <span className="arrow-down"></span></span></a></li>
                <li className="nav-item" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="200"><Link href={`/blog`}><a>Blog<img className="app-subnav__link" src='img/arrow-up.png' /></a></Link></li>
                <li className="nav-item"><a className="nav-link" href="#social" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="200"> Community</a></li>
                <li className="nav-item"><a className="nav-link" href="#company" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="200">About us </a></li>
                <li className="nav-item"><a className="nav-link" href="#news-letter" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="200">Contact us </a></li>
              </ul>
            </div>
          </nav>
          {/* header nav end */}
          {/* Banner content start */}
          <div className='video-section'>
            <div className='row'>
              <div className='col-lg-12 text-center'>
                <img src="img/logo.png" className='logo' data-aos="zoom-in" data-aos-delay="600" data-aos-duration="800" />
              </div>
              <div className='col-lg-12 text-center'>
                <img src="img/textlogoeffect.png" className='text-effect' data-aos="zoom-in" data-aos-delay="900" data-aos-duration="800" />
              </div>
              <div className='col-lg-12 text-center'>
                <button className='download-btn' data-aos="zoom-in" data-aos-delay="100" data-aos-duration="800"><img src="img/down.png" />Download Alpha <span className="tooltips">Coming soon <span className="arrow-down"></span></span></button>
              </div>
            </div>
          </div>
          {/* Banner content end */}
        </div>
      </header>
      {/* header nav end */}

      {/* Blog sliders start */}
      <div className='container container-lg container-xl'>
        <section>
          <div className='row mt-5'>
            {/* Newest sliders start */}
            <Newslider />
            {/* Pined and most recent sliders start */}
            <Pinned />
          </div>
        </section>
        {/* Blog sliders end */}

        {/* Champions section start */}
        <section id='champions'>
          <div className='row mt-5 pt-5 mb-5 pb-5'>
            {/* Champions content start */}
            <div className='col-lg-6 col-md-6 col-12 p'>
              <div className='cham-dv text-white'>
                <h2 data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">Our Champions Leaderboard </h2>
                <p data-aos="fade-right" data-aos-delay="400" data-aos-duration="800">Identifying our champions and appearing in the table, the players who achieve good results in addition to the gifts rewarded can constantly compete for the best results then show them by us. We daily, weekly, monthly, and annually show the best champions.</p>
                <button className="card-btn" data-aos="fade-right" data-aos-delay="800" data-aos-duration="800">Show all <img src="img/arrow-right.png" /></button>
              </div>
            </div>
            {/* Champions content end */}

            {/* Champions table content start */}
            <div className='col-lg-6 col-12 col-md-6 p' data-aos="fade-left" data-aos-delay="400" data-aos-duration="800">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Daily</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Weekly</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Monthly</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Yearly</button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <table className="table  table-striped text-white">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Player</th>
                        <th scope="col">XP</th>
                        <th scope="col">VICTORY</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>MBG_Player_1</td>
                        <td>1000</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>MBG_Player_2</td>
                        <td>1000</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>MBG_Player_3</td>
                        <td>1000</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>MBG_Player_4</td>
                        <td>1000</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>MBG_Player_5</td>
                        <td>1000</td>
                        <td>15</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <table className="table  table-striped text-white">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Player</th>
                        <th scope="col">XP</th>
                        <th scope="col">VICTORY</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>MBG_Player_1</td>
                        <td>1000</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>MBG_Player_2</td>
                        <td>1000</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>MBG_Player_3</td>
                        <td>1000</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>MBG_Player_4</td>
                        <td>1000</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>MBG_Player_5</td>
                        <td>1000</td>
                        <td>15</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                  <table className="table  table-striped text-white">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Player</th>
                        <th scope="col">XP</th>
                        <th scope="col">VICTORY</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>MBG_Player_1</td>
                        <td>1000</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>MBG_Player_2</td>
                        <td>1000</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>MBG_Player_3</td>
                        <td>1000</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>MBG_Player_4</td>
                        <td>1000</td>
                        <td>15</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>MBG_Player_5</td>
                        <td>1000</td>
                        <td>15</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Champions table content end */}
          </div>
        </section>
        {/* Champions section end */}
        {/* Modes section start */}
        <section id='modes'>
          <div className='row mt-5 pt-5 mb-5 pb-5 allblogs'>
            {/* Death Match start */}
            <div className='col-lg-4 col-md-4 col-12 p' data-aos="zoom-in" data-aos-delay="200" data-aos-duration="600">
              <div className='blog-list'>
                <div className='blog-image'>
                  <img src="img/blog-img.png" />
                </div>
                <div className='blog-content text-white'>
                  <h2>Death Match</h2>
                  <p>Deathmatch is one of the modes in MBG. with the alpha version of MBG, this mode will be available, and gamers will interact with it. The mode lasts for 15 minutes and consists of 10 players. Only single match will be available for the alpha version. In deathmatch, whoever gets the most point in the match is the winner of the game.</p>
                </div>
              </div>
            </div>
            {/* Death Match end */}
            {/* Battle Royale start */}
            <div className='col-lg-4 col-md-4 col-12 p' data-aos="zoom-in" data-aos-delay="400" data-aos-duration="600">
              <div className='blog-list'>
                <div className='blog-image'>
                  <img src="img/blog-2.png" />
                </div>
                <div className='blog-content text-white'>
                  <h2>Battle Royale</h2>
                  <p>One of the other modes of the MBG game. It will be available for the versions that come after the alpha version, that are the beta and release versions. In this mode a match Consists of a group of players, and the winner of this mode is the one who stays alive till the end of the game and explodes the other tanks. This mode consists of single match and team match.</p>
                </div>
              </div>
            </div>
            {/* Battle Royale end */}
            {/* Conquer start */}
            <div className='col-lg-4 col-md-4 col-12 p' data-aos="zoom-in" data-aos-delay="600" data-aos-duration="600">
              <div className='blog-list'>
                <div className='blog-image'>
                  <img src="img/blog-3.png" />
                </div>
                <div className='blog-content text-white'>
                  <h2>Conquer </h2>
                  <p>Conquer is one of the most potent modes of MBG. in the release versions, this mode will be available for our gamers. In the mode, several areas exist that gamers can conquest. The match continues for a limited time. Whoever gets the most points is the winner of the match.</p>
                </div>
              </div>
            </div>
            {/* Conquer end */}
          </div>
        </section>
        {/* Modes section end */}

        {/* Products start */}
        <section>
          <div className='row mt-5 pt-5 mb-5 pb-5 tk '>
            <div className='tank-image'>
              <img src='img/tankimg.png' data-aos="zoom-in" data-aos-delay="400" data-aos-duration="600" />
            </div>
          </div>
          <div className='box-size'>

         
          <div className='row '>
            <div className='col-lg-2 col-md-4 col-12 col-sm-6' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              {/* Turret start */}
              <div className='marketplace-list'>
                <div className='tank-part text-white'>
                  <div className='tank-image'>
                    <img src='img/turret.png' />
                  </div>
                  <div className='nft-content'>
                    <div className='nft-name '>
                      <h2>Turret</h2>
                      <span>25 <img src="img/black-stalion white.png" /></span>
                    </div>
                  </div>
                  <div className='nft-detail'>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a</p>
                    <div className='card-footer'>
                      <span>1000 Edition</span>
                      <button className='btn-primary'>Buy</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Turret end */}
            </div>
            <div className='col-lg-2 col-md-4 col-12 col-sm-6' data-aos="fade-down" data-aos-delay="400" data-aos-duration="1000">
              {/* Secondery weapon start */}
              <div className='marketplace-list'>
                <div className='tank-part text-white'>
                  <div className='tank-image'>
                    <img src='img/seconderyweapon.png' />
                  </div>
                  <div className='nft-content'>
                    <div className='nft-name '>
                      <h2>Secondery weapon</h2>
                      <span>17 <img src="img/black-stalion white.png" /></span>
                    </div>
                  </div>
                  <div className='nft-detail'>
                    <p>Secondary weapon is another part of the tank that the tank can use to attack, but it is not an essential piece. The tank does not need to have.</p>
                    <div className='card-footer'>
                      <span>1200 Edition</span>
                      <button className='btn-primary'>Buy</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Secondery weapon end */}
            </div>
            <div className='col-lg-2 col-md-4 col-12 col-sm-6' data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              {/* Cannon  start */}
              <div className='marketplace-list'>
                <div className='tank-part text-white'>
                  <div className='tank-image'>
                    <img src='img/Cannon.png' />
                  </div>
                  <div className='nft-content'>
                    <div className='nft-name '>
                      <h2>Cannon</h2>
                      <span>15 <img src="img/black-stalion white.png" /></span>
                    </div>
                  </div>
                  <div className='nft-detail'>
                    <p>Here any desired tank cannon can be used and equipped to the tank. It can be bought in the marketplace section</p>
                    <div className='card-footer'>
                      <span>700 Edition</span>
                      <button className='btn-primary'>Buy</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Cannon  end */}
            </div>
            <div className='col-lg-2 col-md-4 col-12 col-sm-6' data-aos="fade-down" data-aos-delay="800" data-aos-duration="1000">
              {/* TIRE  start */}
              <div className='marketplace-list'>
                <div className='tank-part text-white'>
                  <div className='tank-image'>
                    <img src='img/tire(2).png' />
                  </div>
                  <div className='nft-content'>
                    <div className='nft-name '>
                      <h2>TIRE</h2>
                      <span>11 <img src="img/black-stalion white.png" /></span>
                    </div>
                  </div>
                  <div className='nft-detail'>
                    <p>Player may want to use a slightly faster tire so the player can choose faster tire, as all the other pieces have their properties.</p>
                    <div className='card-footer'>
                      <span>850 Edition</span>
                      <button className='btn-primary'>Buy</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* TIRE  end */}
            </div>
            <div className='col-lg-2 col-md-4 col-12 col-sm-6' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
              {/* Track  start */}
              <div className='marketplace-list'>
                <div className='tank-part text-white'>
                  <div className='tank-image'>
                    <img src='img/tire.png' />
                  </div>
                  <div className='nft-content'>
                    <div className='nft-name '>
                      <h2>Track</h2>
                      <span>9 <img src="img/black-stalion white.png" /></span>
                    </div>
                  </div>
                  <div className='nft-detail'>
                    <p>To adjust the track with the tire, another track can be equipped if being faster is the priority. Otherwise, the current track can be used.</p>
                    <div className='card-footer'>
                      <span>640 Edition</span>
                      <button className='btn-primary'>Buy</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Track  end */}
            </div>
            <div className='col-lg-2 col-md-4 col-12 col-sm-6' data-aos="fade-down" data-aos-delay="1200" data-aos-duration="1000">
              {/* Marketplace  start */}
              <div className='market-place'>
                <a href='#'>Marketplace <img src='img/arrow-market.png' /></a>
              </div>
              {/* Marketplace  end */}
            </div>
          </div>
          </div>
        </section>
        {/* Products end */}

        {/* aboutus section start */}
        <section id='company'>
          <div className='row mt-5 pt-5 mb-5 pb-5  '>
            <div className='col-lg-4 col-md-6 col-12' data-aos="fade-right" data-aos-delay="400" data-aos-duration="1000">
              {/* Game Rules card start */}
              <div className='card-items'>
                <img src='img/game-rule.png' />
                <div className='overlay'>
                  <h2>Game Rules</h2>
                  <p>The MBG rules can be found here when the first version is released.</p>
                </div>
              </div>
              {/* Game Rules card end */}
            </div>
            <div className='col-lg-4 col-md-6 col-12 ' data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              {/* Company card start */}
              <div className='card-items'>
                <img src='img/Company.png' />
                <div className='overlay'>
                  <h2>Company</h2>
                  <p>MBG is made by Black Stallion, is platform and The BS Token are products of (Blackstallion) company, which is based in 603,Prism Tower- Al Mustaqbal Street - Business Bay - Dubai - United Arab Emirates
                  </p>
                </div>
              </div>
              {/* Company card end */}
            </div>
            <div className='col-lg-4 col-md-6 col-12 mb-0' data-aos="fade-left" data-aos-delay="800" data-aos-duration="1000">
              {/* Privacy Policy card start */}
              <div className='card-items'>
                <img src='img/Privacy Policy.png' />
                <div className='overlay'>
                  <h2>Privacy Policy</h2>
                  <p>The MBG privacy and policies can be found here when the first version is released.</p>
                </div>
              </div>
              {/* Privacy Policy card start */}
            </div>
          </div>
        </section>
        {/* Aboutus section end */}

        {/* social media section start */}
        <section id='social'>
          <div className='row' >
            <div className='col-lg-4 col-md-4 col-12 ' data-aos="fade-right" data-aos-delay="200" data-aos-duration="800">
             {/* Youtube video section start */}
              <AllVideo />
             {/* Youtube video section end */}
            </div>
            <div className='col-lg-8 col-md-8 col-12 social-dv'>
               {/* Commuinity section start */}
              <div className='row'>
                <div className='col-12 text-white' data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                  <h2>Commuinity</h2>
                </div>
                <div className='col-lg-3 col-md-3 col-3' data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                  <a href='#'><img src="img/facebook.png" className='w-100' /></a>
                </div>
                <div className='col-lg-3 col-md-3 col-3' data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                  <a href='#'><img src="img/insta.png" className='w-100' /></a>
                </div>
                <div className='col-lg-3 col-md-3 col-3' data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                  <a href='#'><img src="img/link.png" className='w-100' /></a>
                </div>
                <div className='col-lg-3 col-md-3 col-3' data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                  <a href='#'><img src="img/tele.png" className='w-100' /></a>
                </div>
                <div className='col-lg-3 col-md-3 col-3' data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
                  <a href='#'><img src="img/tweet.png" className='w-100' /></a>
                </div>
                <div className='col-lg-3 col-md-3 col-3' data-aos="fade-up" data-aos-delay="1200" data-aos-duration="800">
                  <a href='#'><img src="img/code.png" className='w-100' /></a>
                </div>
                <div className='col-lg-3 col-md-3 col-3' data-aos="fade-up" data-aos-delay="1400" data-aos-duration="800">
                  <a href='#'><img src="img/social.png" className='w-100' /></a>
                </div>
                <div className='col-lg-3 col-md-3 col-3' data-aos="fade-up" data-aos-delay="1500" data-aos-duration="800">
                  <a href='#'><img src="img/social2.png" className='w-100' /></a>
                </div>
              </div>
               {/* Commuinity section end */}
            </div>
          </div>
        </section>
        {/* social media section end */}
        {/* We Listening section start */}
        <section>
          <div className='row mt-5 pt-5 mb-5 pb-5 newsletter' id='news-letter'>
            <div className='col-12 text-white' data-aos="fade-right" data-aos-delay="400" data-aos-duration="800">
              <h2>We are   <br />Listening </h2>
            </div>
            <div className='col-lg-12 col-md-12 col-12'>
              
              
              
              
{/*               
            <form  className='row'>
            <div className='col-lg-5 col-md-6 col-12' data-aos="fade-right" data-aos-delay="800" data-aos-duration="800">
                
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your Email"
                     
                      
                      className='input-group'
                    />




                    
                  </div>
                <div className='col-lg-7 col-md-6 col-12' data-aos="fade-left" data-aos-delay="1000" data-aos-duration="800">
                  <textarea></textarea>
                  <button type="submit" className='sendbtnmobile'>send</button>

                </div>
                    <input type="submit" value="send" className='sendbtn' />
                    </form> */}

              <div id="msg">Your message has been sent!</div>
				       <div id="error">Please enter your valid email!</div>

              <form className='row' onSubmit={handleSubmit}>
                <div className='col-lg-5 col-md-6 col-12' data-aos="fade-right" data-aos-delay="800" data-aos-duration="800">
                <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your Email"
                      value={state.name}
                      onChange={handleChange}
                      className='input-group'
                    />

<div id="error11">Please select your country!</div> 
                  <select className="form-select" aria-label="Default select example"
                onChange={countryChange}
        name="country">
                    <option value="empty">Country</option>
                    <option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="American Samoa">American Samoa</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Anguilla">Anguilla</option>
<option value="Antartica">Antarctica</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Aruba">Aruba</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bermuda">Bermuda</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
<option value="Botswana">Botswana</option>
<option value="Bouvet Island">Bouvet Island</option>
<option value="Brazil">Brazil</option>
<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
<option value="Brunei Darussalam">Brunei Darussalam</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Cape Verde">Cape Verde</option>
<option value="Cayman Islands">Cayman Islands</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Christmas Island">Christmas Island</option>
<option value="Cocos Islands">Cocos (Keeling) Islands</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo">Congo</option>
<option value="Congo">Congo, the Democratic Republic of the</option>
<option value="Cook Islands">Cook Islands</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Cota D'Ivoire">Cote d'Ivoire</option>
<option value="Croatia">Croatia (Hrvatska)</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic">Czech Republic</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Dominican Republic</option>
<option value="East Timor">East Timor</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Falkland Islands">Falkland Islands (Malvinas)</option>
<option value="Faroe Islands">Faroe Islands</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="France Metropolitan">France, Metropolitan</option>
<option value="French Guiana">French Guiana</option>
<option value="French Polynesia">French Polynesia</option>
<option value="French Southern Territories">French Southern Territories</option>
<option value="Gabon">Gabon</option>
<option value="Gambia">Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Gibraltar">Gibraltar</option>
<option value="Greece">Greece</option>
<option value="Greenland">Greenland</option>
<option value="Grenada">Grenada</option>
<option value="Guadeloupe">Guadeloupe</option>
<option value="Guam">Guam</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-Bissau">Guinea-Bissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
<option value="Holy See">Holy See (Vatican City State)</option>
<option value="Honduras">Honduras</option>
<option value="Hong Kong">Hong Kong</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran">Iran (Islamic Republic of)</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Democratic People's Republic of Korea">Korea, Democratic People's Republic of</option>
<option value="Korea">Korea, Republic of</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Lao">Lao People's Democratic Republic</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon" selected>Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Macau">Macau</option>
<option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Marshall Islands">Marshall Islands</option>
<option value="Martinique">Martinique</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mayotte">Mayotte</option>
<option value="Mexico">Mexico</option>
<option value="Micronesia">Micronesia, Federated States of</option>
<option value="Moldova">Moldova, Republic of</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montserrat">Montserrat</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar">Myanmar</option>
<option value="Namibia">Namibia</option>
<option value="Nauru">Nauru</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands">Netherlands</option>
<option value="Netherlands Antilles">Netherlands Antilles</option>
<option value="New Caledonia">New Caledonia</option>
<option value="New Zealand">New Zealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="Niue">Niue</option>
<option value="Norfolk Island">Norfolk Island</option>
<option value="Northern Mariana Islands">Northern Mariana Islands</option>
<option value="Norway">Norway</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Palau">Palau</option>
<option value="Panama">Panama</option>
<option value="Papua New Guinea">Papua New Guinea</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines">Philippines</option>
<option value="Pitcairn">Pitcairn</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Puerto Rico">Puerto Rico</option>
<option value="Qatar">Qatar</option>
<option value="Reunion">Reunion</option>
<option value="Romania">Romania</option>
<option value="Russia">Russian Federation</option>
<option value="Rwanda">Rwanda</option>
<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
<option value="Saint LUCIA">Saint LUCIA</option>
<option value="Saint Vincent">Saint Vincent and the Grenadines</option>
<option value="Samoa">Samoa</option>
<option value="San Marino">San Marino</option>
<option value="Sao Tome and Principe">Sao Tome and Principe</option> 
<option value="Saudi Arabia">Saudi Arabia</option>
<option value="Senegal">Senegal</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra">Sierra Leone</option>
<option value="Singapore">Singapore</option>
<option value="Slovakia">Slovakia (Slovak Republic)</option>
<option value="Slovenia">Slovenia</option>
<option value="Solomon Islands">Solomon Islands</option>
<option value="Somalia">Somalia</option>
<option value="South Africa">South Africa</option>
<option value="South Georgia">South Georgia and the South Sandwich Islands</option>
<option value="Span">Spain</option>
<option value="SriLanka">Sri Lanka</option>
<option value="St. Helena">St. Helena</option>
<option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
<option value="Sudan">Sudan</option>
<option value="Suriname">Suriname</option>
<option value="Svalbard">Svalbard and Jan Mayen Islands</option>
<option value="Swaziland">Swaziland</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Syria">Syrian Arab Republic</option>
<option value="Taiwan">Taiwan, Province of China</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Tanzania">Tanzania, United Republic of</option>
<option value="Thailand">Thailand</option>
<option value="Togo">Togo</option>
<option value="Tokelau">Tokelau</option>
<option value="Tonga">Tonga</option>
<option value="Trinidad and Tobago">Trinidad and Tobago</option>
<option value="Tunisia">Tunisia</option>
<option value="Turkey">Turkey</option>
<option value="Turkmenistan">Turkmenistan</option>
<option value="Turks and Caicos">Turks and Caicos Islands</option>
<option value="Tuvalu">Tuvalu</option>
<option value="Uganda">Uganda</option>
<option value="Ukraine">Ukraine</option>
<option value="United Arab Emirates">United Arab Emirates</option>
<option value="United Kingdom">United Kingdom</option>
<option value="United States">United States</option>
<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
<option value="Uruguay">Uruguay</option>
<option value="Uzbekistan">Uzbekistan</option>
<option value="Vanuatu">Vanuatu</option>
<option value="Venezuela">Venezuela</option>
<option value="Vietnam">Viet Nam</option>
<option value="Virgin Islands (British)">Virgin Islands (British)</option>
<option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
<option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
<option value="Western Sahara">Western Sahara</option>
<option value="Yemen">Yemen</option>
<option value="Serbia">Serbia</option>
<option value="Zambia">Zambia</option>
<option value="Zimbabwe">Zimbabwe</option>
                  </select>
                  {/* <input type="submit" value="send" className='sendbtn' /> */}
                </div>
                <div className='col-lg-7 col-md-6 col-12' data-aos="fade-left" data-aos-delay="1000" data-aos-duration="800">
                  
                <div id="error5">Please enter your message!</div>
                  <textarea  onChange={msgChange} name="msgs"> 
                      </textarea>
                  
                  
                  {/* <input type={'button'} value="send" className='sendbtnmobile' /> */}
                  {/* <button type="submit" className='sendbtnmobile'>send3</button> */}

                  <input type="submit" value="send" className='sendbtn' /> 

                </div>
              </form>
            </div>
          </div>
        </section>
          {/* We Listening section end */}
      </div>
       {/* Footer start */}
      <footer>
        <div className='container ft-cont'>
          <div className='row'>
            <div className='col-lg-2 col-md-2  col-12 logo'>
              <img src='img/footer-logo.png' />
            </div>
            <div className='col'>
            </div>
            <div className='col-lg-6 col-md-7  col-12 text-white'>
              <div className='row'>
                <div className='col-lg-3 col-md-3 col-sm-3 col-12 menu-list'>
                  <h2>Menu</h2>
                  <a >Marketplace</a>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-3 col-12 menu-list'>
                  <h2>Game</h2>
                  <a href='#champions'>Champions</a>
                  <a href='#modes'>Modes</a>
                  <a href="#company">Rules</a>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-3 col-12 menu-list'>
                  <h2>Company</h2>
                  <Link href="/blog" className="app-subnav__link">Blog </Link>
                  <a href="#company" >Privacy Policy</a>
                  <a href='#social'>About us</a>
                  <a href='#news-letter'>Contact us</a>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-3 col-12 menu-list'>
                  <h2>BS Token</h2>
                  <a >Website</a>
                  <a>White paper</a>
                </div>
              </div>
            </div>
            <div className='col'>
            </div>
            <div className='col-lg-3 col-sm-12 col-md-3 col-12 language'>
              <h2>Your Language</h2>
              <select className="form-select mb-3" aria-label="Default select example">
                <option selected>English</option>
                <option value="1">English</option>
                <option value="2">English</option>
                <option value="3">English</option>
              </select>
              <span><img src='img/footerlogo-2.png' /></span><span> <img src="img/footer-logo1.png" /></span>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer end */}
    </>
  )
}
