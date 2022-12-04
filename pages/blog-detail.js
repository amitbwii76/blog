import Link from "next/link";
// import  {useRouter}  from "next/router";
import Script from 'next/script'
import { useEffect } from 'react'

function blog() {
    return (
        <>
<header className="inner-header">

            <div className="container">
                <nav className='navbar navbar-expand-lg main-header' >
                <Link href="/">
                    <a classNameName="navbar-brand" href=''> <img src="img/logo1.png" /> </a></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"><img src="img/list.svg" /></span>
                    </button>




                    <div className="collapse navbar-collapse  justify-content-start" id="navbarCollapse">
                        <ul className="navbar-nav  mt-2 mt-lg-0">

                            <li className="nav-item">
                                <a className="nav-link" href="#" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="200">Marketplace</a>
                            </li>
                            <li className="nav-item">

                                <a className="nav-link" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="200"> Blog </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="200"> Community</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="200">About us </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-aos="zoom-in" data-aos-delay="600" data-aos-duration="200">Contact us </a>
                            </li>


                        </ul>

                    </div>

                </nav>
            </div>
            </header>

            <div className="alfa-img">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="release-time">
                                <img className="mask-img" src="img/Mask Group 11.png" />
                            </div>
                            <div className="game-re">
                                <h2>Alpha Release Time !</h2>
                                <p>With the launch of our social media and publications, the only question is, When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p>
                                       </div>
                            <div className="you-tube-img">
                                <img className="tube" src="img/Group 4357.png" />
                            </div>
                            <p>With the launch of our social media and publications, the only question is, When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p>
                                      
                            <div className="table-responsive">
                                <div className="container">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Player</th>
                                                <th>XP</th>
                                                <th>Victory</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td>MBG-player-1</td>
                                                <td>1000</td>
                                                <td>15</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MBG-player-2</td>
                                                <td>900</td>
                                                <td>15</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MBG-player-3</td>
                                                <td>890</td>
                                                <td>14</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MBG-player-4</td>
                                                <td>860</td>
                                                <td>13</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>MBG-player-5</td>
                                                <td>820</td>
                                                <td>15</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>



                            <div className="lonch">
                            <p>With the launch of our social media and publications, the only question is When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p>
                                                <h6 className="post-date oct">Posted: 14 oct 22</h6>
                            </div>



                        </div>


                        <div className="col-md-5">
                            <div className="pined">
                                <h3>Pinned</h3>


                                <div className="img-content">
                                    <div className="img-pined">
                                        <img className="mask-on" src="img/Mask Group 11.png" />
                                    </div>
                                    <div className="alfa-lp">
                                        <h4>Alpha Release Time !</h4>
                                        <p>With the launch of our social media and publications, the only question is, When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p>
                                                 <h6 className="post-date post">Posted: 14 oct 22</h6>
                                    </div>
                                </div>

                                <div className="img-content">
                                    <div className="img-pined">
                                        <img className="mask-on" src="img/Mask Group 11.png" />
                                    </div>
                                    <div className="alfa-lp">
                                        <h4>Alpha Release Time !</h4>
                                        <p>With the launch of our social media and publications, the only question is,When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p>
                                                  <h6 className="post-date post">Posted: 14 oct 22</h6>
                                    </div>
                                </div>

                                <div className="img-content">
                                    <div className="img-pined">
                                        <img className="mask-on" src="img/Mask Group 11.png" />
                                    </div>
                                    <div className="alfa-lp">
                                        <h4>Alpha Release Time !</h4>
                                        <p>With the launch of our social media and publications, the only question is, When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p>
                                                <h6 className="post-date post">Posted: 14 oct 22</h6>
                                    </div>
                                </div>

                                <div className="img-content">
                                    <div className="img-pined">
                                        <img className="mask-on" src="img/Mask Group 11.png" />
                                    </div>
                                    <div className="alfa-lp">
                                        <h4>Alpha Release Time !</h4>
                                        <p>With the launch of our social media and publications, the only question is,When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p>
                                                <h6 className="post-date post">Posted: 14 oct 22</h6>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">

                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">NEWS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">PIN</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">MOST VIEWS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs-4" role="tab">ALL</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" id="tabs-1" role="tabpanel">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="tab1">
                                            <div className="tab1-img">
                                                <img className="mask-on tab" src="img/Mask Group 11.png" />
                                            </div>
                                            <div className="alfa-lp">
                                                <h4>Alpha Release Time !</h4>
                                                <p>With the launch of our social media and publications, the only question is,When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p>
                                                <h6 className="post-date">Posted: 14 oct 22</h6>
                                            </div>
                                            <div className="tab1-content">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tab1">
                                            <div className="tab1-img">
                                                <img className="mask-on tab" src="img/Mask Group 11.png" />
                                            </div>
                                            <div className="alfa-lp">
                                                <h4>Alpha Release Time !</h4>
                                                <p>With the launch of our social media and publications, the only question is,When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p>
                                                <h6 className="post-date">Posted: 14 oct 22</h6>
                                            </div>
                                            <div className="tab1-content">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tab1">
                                            <div className="tab1-img">
                                                <img className="mask-on tab" src="img/Mask Group 11.png" />
                                            </div>
                                            <div className="alfa-lp">
                                                <h4>Alpha Release Time !</h4>
                                                <p>With the launch of our social media and publications, the only question is,When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p>
                                                <h6 className="post-date">Posted: 14 oct 22</h6>
                                            </div>
                                            <div className="tab1-content">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tab1">
                                            <div className="tab1-img">
                                                <img className="mask-on tab" src="img/Mask Group 11.png" />
                                            </div>
                                            <div className="alfa-lp">
                                                <h4>Alpha Release Time !</h4>
                                                <p>With the launch of our social media and publications, the only question is,When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p>
                                                <h6 className="post-date">Posted: 14 oct 22</h6>
                                            </div>
                                            <div className="tab1-content">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tab1">
                                            <div className="tab1-img">
                                                <img className="mask-on tab" src="img/Mask Group 11.png" />
                                            </div>
                                            <div className="alfa-lp">
                                                <h4>Alpha Release Time !</h4>
                                                <p>With the launch of our social media and publications, the only question is;When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p>   <h6 className="post-date">Posted: 14 oct 22</h6>
                                            </div>
                                            <div className="tab1-content">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tab1">
                                            <div className="tab1-img">
                                                <img className="mask-on tab" src="img/Mask Group 11.png" />
                                            </div>
                                            <div className="alfa-lp">
                                                <h4>Alpha Release Time !</h4>
                                                <p>With the launch of our social media and publications, the only question is,When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p> <h6 className="post-date">Posted: 14 oct 22</h6>
                                            </div>
                                            <div className="tab1-content">

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="tabs-2" role="tabpanel">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="tab1">
                                            <div className="tab1-img">
                                                <img className="mask-on tab" src="img/Mask Group 11.png" />
                                            </div>
                                            <div className="alfa-lp">
                                                <h4>Alpha Release Time !</h4>
                                                <p>With the launch of our social media and publications, the only question is,When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p>  <h6 className="post-date">Posted: 14 oct 22</h6>
                                            </div>
                                            <div className="tab1-content">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tab1">
                                            <div className="tab1-img">
                                                <img className="mask-on tab" src="img/Mask Group 11.png" />
                                            </div>
                                            <div className="alfa-lp">
                                                <h4>Alpha Release Time !</h4>
                                                <p>With the launch of our social media and publications, the only question is,When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p> <h6 className="post-date">Posted: 14 oct 22</h6>
                                            </div>
                                            <div className="tab1-content">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tab1">
                                            <div className="tab1-img">
                                                <img className="mask-on tab" src="img/Mask Group 11.png" />
                                            </div>
                                            <div className="alfa-lp">
                                                <h4>Alpha Release Time !</h4>
                                                <p>With the launch of our social media and publications, the only question is,When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p> <h6 className="post-date">Posted: 14 oct 22</h6>
                                            </div>
                                            <div className="tab1-content">

                                            </div>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="tabs-3" role="tabpanel">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="tab1">
                                            <div className="tab1-img">
                                                <img className="mask-on tab" src="img/Mask Group 11.png" />
                                            </div>
                                            <div className="alfa-lp">
                                                <h4>Alpha Release Time !</h4>
                                                <p>With the launch of our social media and publications, the only question is When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p><h6 className="post-date">Posted: 14 oct 22</h6>
                                            </div>
                                            <div className="tab1-content">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tab1">
                                            <div className="tab1-img">
                                                <img className="mask-on tab" src="img/Mask Group 11.png" />
                                            </div>
                                            <div className="alfa-lp">
                                                <h4>Alpha Release Time !</h4>
                                                <p>With the launch of our social media and publications, the only question is,When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p><h6 className="post-date">Posted: 14 oct 22</h6>
                                            </div>
                                            <div className="tab1-content">

                                            </div>
                                        </div>
                                    </div>





                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="tabs-4" role="tabpanel">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="tab1">
                                            <div className="tab1-img">
                                                <img className="mask-on tab" src="img/Mask Group 11.png" />
                                            </div>
                                            <div className="alfa-lp">
                                                <h4>Alpha Release Time !</h4>
                                                <p>With the launch of our social media and publications, the only question is When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p><h6 className="post-date">Posted: 14 oct 22</h6>
                                            </div>
                                            <div className="tab1-content">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tab1">
                                            <div className="tab1-img">
                                                <img className="mask-on tab" src="img/Mask Group 11.png" />
                                            </div>
                                            <div className="alfa-lp">
                                                <h4>Alpha Release Time !</h4>
                                                <p>With the launch of our social media and publications, the only question is When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p> <h6 className="post-date">Posted: 14 oct 22</h6>
                                            </div>
                                            <div className="tab1-content">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tab1">
                                            <div className="tab1-img">
                                                <img className="mask-on tab" src="img/Mask Group 11.png" />
                                            </div>
                                            <div className="alfa-lp">
                                                <h4>Alpha Release Time !</h4>
                                                <p>With the launch of our social media and publications, the only question is When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p> <h6 className="post-date">Posted: 14 oct 22</h6>
                                            </div>
                                            <div className="tab1-content">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tab1">
                                            <div className="tab1-img">
                                                <img className="mask-on tab" src="img/Mask Group 11.png" />
                                            </div>
                                            <div className="alfa-lp">
                                                <h4>Alpha Release Time !</h4>
                                                <p>With the launch of our social media and publications, the only question is When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p> <h6 className="post-date">Posted: 14 oct 22</h6>
                                            </div>
                                            <div className="tab1-content">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tab1">
                                            <div className="tab1-img">
                                                <img className="mask-on tab" src="img/Mask Group 11.png" />
                                            </div>
                                            <div className="alfa-lp">
                                                <h4>Alpha Release Time !</h4>
                                                <p>With the launch of our social media and publications, the only question is When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p> <h6 className="post-date">Posted: 14 oct 22</h6>
                                            </div>
                                            <div className="tab1-content">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="tab1">
                                            <div className="tab1-img">
                                                <img className="mask-on tab" src="img/Mask Group 11.png" />
                                            </div>
                                            <div className="alfa-lp">
                                                <h4>Alpha Release Time !</h4>
                                                <p>With the launch of our social media and publications, the only question is,When will the game be released?&apos;
                                                    MBG plans to release the game in stages and versions such as alpha - first release, beta - second release, release and versions - which will be the final release and then MBG will release the latest updates through release versions.
                                                    Regarding the debut of MBG, the full steps of the games release will be announced when the roadmap is released</p> <h6 className="post-date">Posted: 14 oct 22</h6>
                                            </div>
                                            <div className="tab1-content">

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-2 col-md-3 col-12'>
              <img src='img/footer-logo.png' />
            </div>
            <div className='col-lg-6 col-md-6 col-12 text-white'>
              <div className='row'>
                <div className='col-lg-3 col-md-3 col-12 menu-list'>
                  <h2>Menu</h2>
                  <a href='#'>Marketplace</a>
                </div>
                <div className='col-lg-3 col-md-3 col-12 menu-list'>
                  <h2>Game</h2>
                  <a href='#'>Champions</a>
                  <a href='#'>Modes</a>
                  <a href='#'>Rules</a>
                </div>
                <div className='col-lg-3 col-md-3 col-12 menu-list'>
                  <h2>Company</h2>
                  <a href='#'>Blog</a>
                  <a href='#'>Privacy Policy</a>
                  <a href='#'>About us</a>
                  <a href='#'>Contact us</a>
                </div>
                <div className='col-lg-3 col-md-3 col-12 menu-list'>
                  <h2>BS Token</h2>
                  <a href='#'>Website</a>
                  <a href='#'>White paper</a>

                </div>
              </div>
            </div>
            <div className='col-1'>

            </div>
            <div className='col-lg-3 col-md-3 col-12 language'>
              <h2>Your Language</h2>
              <select className="form-select mb-3" aria-label="Default select example">
                <option selected>Eng</option>
                <option value="1">Eng</option>
                <option value="2">Eng</option>
                <option value="3">Eng</option>
              </select>
              <a href='#'><img src='img/footerlogo-2.png' /></a><a href=''> <img src="img/footer-logo1.png" /></a>
            </div>
          </div>
        </div>
      </footer>

        </>
    );


}
export default blog