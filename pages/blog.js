import Link from "next/link";
// import  {useRouter}  from "next/router";
import Script from 'next/script'
import { useEffect } from 'react'
import Trending from "../components/Blogs/Trending";
import Pin from "../components/Blogs/Pin";
import Mostview from "../components/Blogs/Mostview";
import Allblogs from "../components/Blogs/Allblogs";
import Slider from "../components/Slider/Slider";
import $ from 'jquery';

function blog() {
    function handleChange3() {
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
            <header className="inner-header">
                <div className="container container-lg">
                    <nav className='navbar navbar-expand-lg main-header ' >
                        <Link href="/"><a className="navbar-brand" href=''> <img src="img/logo1.png" /> </a></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"><img src="img/list.svg" /></span>
                        </button>
                        <div className="collapse navbar-collapse  justify-content-start" id="navbarCollapse">
                            <ul className="navbar-nav mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="200">Marketplace <span className="tooltips">Coming soon <span className="arrow-down"></span></span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="200"> Blog  <img className="app-subnav__link" src='img/arrow-up.png' /></a>
                                </li> 
                                <li className="nav-item" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="200">
                                    <Link href="/#social" className="app-subnav__link">Community</Link></li>
                                <li className="nav-item" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="200">
                                    <Link href="/#company" className="app-subnav__link">About us</Link></li>
                                <li className="nav-item" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="200">
                                    <Link href="/#news-letter" className="app-subnav__link">Contact us</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            <div className="alfa-img">
                <div className="container all-blog mb-5">
                    <Slider />
                </div>
                <div className="container">
                    <ul className="nav nav-tabs" role="tablist" id="myTab">
                        <li className="nav-item">
                            <a className="nav-link active" id="NEWS-tab" data-bs-toggle="tab" data-bs-target="#NEWS" type="button" role="tab" aria-controls="NEWS" aria-selected="true">Newest</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="PIN-tab" data-bs-toggle="tab" data-bs-target="#PIN" type="button" role="tab" aria-controls="PIN" aria-selected="false">Pinned</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="VIEWS-tab" data-bs-toggle="tab" data-bs-target="#VIEWS" type="button" role="tab" aria-controls="VIEWS" aria-selected="false">MOST VIEWS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="ALL-tab" data-bs-toggle="tab" data-bs-target="#ALL" type="button" role="tab" aria-controls="ALL" aria-selected="false">ALL</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active" id="NEWS" role="tabpanel" aria-labelledby="NEWS-tab">
                            <div className="container p-0"   >
                                <div className="flex-div">
                                    <Trending />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="PIN" role="tabpanel" aria-labelledby="PIN-tab">
                            <div className="container p-0">
                                <div className="flex-div">
                                    <Pin />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="VIEWS" role="tabpanel" aria-labelledby="VIEWS-tab">
                            <div className="container p-0">
                                <div className="flex-div">
                                    <Mostview />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="ALL" role="tabpanel" aria-labelledby="ALL-tab">
                            <div className="container p-0">
                                <div className="flex-div">
                                    <Allblogs />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
                                    <a>Marketplace</a>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-3 col-12 menu-list'>
                                    <h2>Game</h2>
                                    <Link href="/#champions" className="app-subnav__link">Champions </Link>
                                    <Link href="/#modes" className="app-subnav__link">Modes </Link>
                                    <Link href="/#company" className="app-subnav__link">Rules </Link>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-3 col-12 menu-list'>
                                    <h2>Company</h2>
                                    <Link href="/blog" className="app-subnav__link">Blog </Link>
                                    <Link href="/#company" className="app-subnav__link">Privacy Policy </Link>
                                    <Link href="/#company" className="app-subnav__link">About us </Link>
                                    <Link href="/#news-letter" className="app-subnav__link">Contact us </Link>

                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-3 col-12 menu-list'>
                                    <h2>BS Token</h2>
                                    <a>Website</a>
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
                            <a href='#'><img src='img/footerlogo-2.png' /></a><a href=''> <img src="img/footer-logo1.png" /></a>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );


}
export default blog