import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
    return (

        <footer className="tm-bg-linear-gradient(rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)), pt-5 pb-3 tm-text-gray tm-footer">
            <div className="container-fluid tm-container-small">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12 px-5 mb-5">
                        <h3 className="tm-text-primary mb-4 tm-footer-title">About GAS</h3>
                        <p>GAS is free <a rel="sponsored" href="https://v5.getbootstrap.com/">Bootstrap 5</a> Alpha 2 HTML Template for video and photo websites. You can freely use this TemplateMo layout for a front-end integration with any kind of CMS website.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                        <h3 className="tm-text-primary mb-4 tm-footer-title">Our Links</h3>
                        <ul className="tm-footer-links pl-0">

                            <li> <Link to="/photos">Photos</Link></li>
                            <li> <Link to="/contact">Contact</Link></li>
                            <li> <Link to="/aboutus">A propos de nous</Link></li>


                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 px-5 mb-5">
                        <h3 className="tm-text-primary mb-4 tm-footer-title text-center">Our Page</h3>

                        <div className="text-center">
                            <a href="https://www.facebook.com/societeddar" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook fa-2x text-primary"></i>
                            </a>
                        </div>
                    </div>


                </div>

            </div>
        </footer>
    )
}

export default Footer