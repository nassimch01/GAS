import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

function AboutUs() {


    return (
        <div className='background-image'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                                    <Link className="navbar-brand" to="/">
                                        <img
                                            src="img/logo.png"
                                            alt="Logo"
                                            style={{
                                                height: "50px",
                                                marginRight: "10px",
                                                verticalAlign: "middle",
                                                transition: "transform 0.3s ease"
                                            }}
                                            onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
                                            onMouseOut={e => e.currentTarget.style.transform = "scale(1.0)"}
                                        />
                                    </Link>
                
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="fas fa-bars"></i>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                
                                            <li className="nav-item">
                
                                                <Link className="nav-link nav-link-1 active" to="/">Photos</Link>
                
                                            </li>
                
                                            <li className="nav-item">
                                                <Link className='nav-link nav-link-2' to="/aboutus">About</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className='nav-link nav-link-3' to="/contact">Contact</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
            </nav>
           
            <div className="tm-hero d-flex justify-content-center align-items-center" data-parallax="scroll" data-image-src="img/hero.jpg"></div>

            <div className="container-fluid tm-mt-60">
                <div className="row mb-4">
                    <h2 className="col-12 tm-text-primary">
                        About GAS
                    </h2>
                </div>
                <div className="row tm-mb-74 tm-row-1640">
                    <div className="col-lg-5 col-md-6 col-12 mb-3">
                        <img src="img/gas-cover.jpg" alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-lg-7 col-md-6 col-12">
                        <div className="tm-about-img-text">
                            <p className="mb-4">
                                You may support TemplateMo website by making <a href="https://paypal.me/templatemo" target="_parent" rel="sponsored">a small contribution</a> via PayPal. This will be helpful for us. We hope you like this GAS-Z photo / video template for your website. We are making new templates regularly for you. Please come back and visit our <a rel="sponsored" href="https://templatemo.com" target="_parent">TemplateMo website</a> again. </p>
                            <p>
                                Credits go to Pexels and Unsplash for photos and video used in this template. GAS is free <a rel="sponsored" href="https://v5.getbootstrap.com/">Bootstrap 5</a> Alpha 2 HTML Template designed for video and photo websites.</p>
                            <p>You are <b>allowed</b> to use this template for your commercial or non-commercial websites. You can integrate it with any kind of CMS website. You are <b>NOT allowed</b> to redistribute the downloadable template ZIP file on any template collection website. Please <a rel="nofollow" href="https://templatemo.com/contact" target="_parent">contact us</a> for more information. Thank you.</p>
                        </div>
                    </div>
                </div>
                <div className="row tm-mb-50">
                    <div className="col-md-6 col-12">
                        <div className="tm-about-2-col">
                            <h2 className="tm-text-primary mb-4">
                                Left side of 2-Column content
                            </h2>
                            <p className="mb-4">
                                Pellentesque urna odio, scelerisque eu mauris vitae, vestibulum sodales neque. Ut augue justo, tincidunt nec aliquet ac, cursus vel augue. Suspendisse vel quam imperdiet, sodales tellus sed, ullamcorper lorem.
                            </p>
                            <p>
                                Suspendisse id consequat risus. Aliquam varius posuere nunc, nec imperdiet neque condimentum at. Aenean porta eleifend venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="tm-about-2-col">
                            <h2 className="tm-text-primary mb-4">
                                Right-side Title goes here
                            </h2>
                            <p className="mb-4">
                                Pellentesque urna odio, scelerisque eu mauris vitae, vestibulum sodales neque. Ut augue justo, tincidunt nec aliquet ac, cursus vel augue. Suspendisse vel quam imperdiet, sodales tellus sed, ullamcorper lorem.
                            </p>
                            <p>
                                Suspendisse id consequat risus. Aliquam varius posuere nunc, nec imperdiet neque condimentum at. Aenean porta eleifend venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row tm-mb-50">
                    <div className="col-md-4 col-12">
                        <div className="tm-about-3-col">
                            <div className="tm-about-icon-container mb-5">
                                <i className="fas fa-desktop fa-3x tm-text-primary"></i>
                            </div>
                            <h2 className="tm-text-primary mb-4">Three-column title one</h2>
                            <p className="mb-4">Integer tristique arcu scelerisque mauris posuere convallis. Fusce egestas ipsum sapien, hendrerit ultricies nisi viverra eget. Vestibulum in tortor eget elit rutrum interdum. </p>
                            <p>Cras auctor velit urna, et feugiat ex tincidunt ut. Sed viverra, elit at pulvinar tristique, sem quam vehicula dolor, sed scelerisque augue mauris non dolor.</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="tm-about-3-col">
                            <div className="tm-about-icon-container mb-5">
                                <i className="fas fa-mobile-alt fa-3x tm-text-primary"></i>
                            </div>
                            <h2 className="tm-text-primary mb-4">Title two of three-column</h2>
                            <p className="tm-mb-50">Donec nec est tincidunt, rhoncus nulla sit amet, imperdiet augue. Phasellus sodales placerat ipsum ac auctor. Mauris molestie blandit turpis. Mauris ante tellus, feugiat nec metus non, bibendum semper velit.</p>
                            <div className="text-center">
                                <a href="#" className="btn btn-primary">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className="tm-about-3-col">
                            <div className="tm-about-icon-container mb-5">
                                <i className="fas fa-photo-video fa-3x tm-text-primary"></i>
                            </div>
                            <h2 className="tm-text-primary mb-4">Third Title goes here</h2>
                            <p className="mb-4">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec nec est tincidunt, rhoncus nulla sit amet, imperdiet augue. </p>
                            <p>Phasellus sodales placerat ipsum ac auctor. Mauris molestie blandit turpis. Mauris ante tellus, feugiat nec metus non, bibendum semper velit.</p>
                        </div>
                    </div>
                </div>
            </div>

           <Footer/>
            )



        </div>
    )
}

export default AboutUs