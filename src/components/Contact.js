import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Contact() {
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

                                <Link className="nav-link nav-link-1 active" to="/photos">Photos</Link>

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




            <div className="container-fluid tm-mt-60">
                <div className="row tm-mb-50">
                    <div className="col-lg-4 col-12 mb-5">
                        <h2 className="tm-text-primary mb-5">Contact Page</h2>
                        <form id="contact-form" action="" method="POST" className="tm-contact-form mx-auto">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control rounded-0" placeholder="Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control rounded-0" placeholder="Email" required />
                            </div>
                            <div className="form-group">
                                <select className="form-control" id="contact-select" name="inquiry">
                                    <option value="-">Subject</option>
                                    <option value="sales">Sales &amp; Marketing</option>
                                    <option value="creative">Creative Design</option>
                                    <option value="uiux">UI / UX</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <textarea rows="8" name="message" className="form-control rounded-0" placeholder="Message" required></textarea>
                            </div>

                            <div className="form-group tm-text-right">
                                <button type="submit" className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4 col-12 mb-5">
                        <div className="tm-address-col">
                            <h2 className="tm-text-primary mb-5">Our Address</h2>
                            <p className="tm-mb-50">Quisque eleifend mi et nisi eleifend pretium. Duis porttitor accumsan arcu id rhoncus. Praesent fermentum venenatis ipsum, eget vestibulum purus. </p>
                            <p className="tm-mb-50">Nulla ut scelerisque elit, in fermentum ante. Aliquam congue mattis erat, eget iaculis enim posuere nec. Quisque risus turpis, tempus in iaculis.</p>
                            <address className="tm-text-gray tm-mb-50">
                                120-240 Fusce eleifend varius tempus<br />
                                Duis consectetur at ligula 10660
                            </address>
                            <ul className="tm-contacts">
                                <li>
                                    <a href="#" className="tm-text-gray">
                                        <i className="fas fa-envelope"></i>
                                        Email: info@company.com
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="tm-text-gray">
                                        <i className="fas fa-phone"></i>
                                        Tel: 010-020-0340
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="tm-text-gray">
                                        <i className="fas fa-globe"></i>
                                        URL: www.company.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <h2 className="tm-text-primary mb-5">Our Location</h2>

                        <div className="mapouter mb-4">
                            <div className="gmap-canvas">
                                <iframe width="100%" height="520" id="gmap-canvas"
                                    src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row tm-mb-74 tm-people-row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                        <img src="img/people-1.jpg" alt="Image" className="mb-4 img-fluid" />
                        <h2 className="tm-text-primary mb-4">Ryan White</h2>
                        <h3 className="tm-text-secondary h5 mb-4">Chief Executive Officer</h3>
                        <p className="mb-4">
                            Mauris ante tellus, feugiat nec metus non, bibendum semper velit. Praesent laoreet urna id tristique fermentum. Morbi venenatis dui quis diam mollis pellentesque.
                        </p>
                        <ul className="tm-social pl-0 mb-0">
                            <li><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>

                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                        <img src="img/people-2.jpg" alt="Image" className="mb-4 img-fluid" />
                        <h2 className="tm-text-primary mb-4">Catherine Pinky</h2>
                        <h3 className="tm-text-secondary h5 mb-4">Chief Marketing Officer</h3>
                        <p className="mb-4">
                            Sed faucibus nec velit finibus accumsan. Sed varius augue et leo pharetra, in varius lacus eleifend. Quisque ut eleifend lacus.
                        </p>
                        <ul className="tm-social pl-0 mb-0">
                            <li><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>

                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                        <img src="img/people-3.jpg" alt="Image" className="mb-4 img-fluid" />
                        <h2 className="tm-text-primary mb-4">Johnny Brief</h2>
                        <h3 className="tm-text-secondary h5 mb-4">Accounting Executive</h3>
                        <p className="mb-4">
                            Sed faucibus nec velit finibus accumsan. Sed varius augue et leo pharetra, in varius lacus eleifend. Quisque ut eleifend lacus.
                        </p>
                        <ul className="tm-social pl-0 mb-0">
                            <li><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>

                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12 mb-5">
                        <img src="img/people-4.jpg" alt="Image" className="mb-4 img-fluid" />
                        <h2 className="tm-text-primary mb-4">George Nelson</h2>
                        <h3 className="tm-text-secondary h5 mb-4">Creative Art Director #C69</h3>
                        <p className="mb-4">
                            Nunc convallis facilisis congue. Curabitur gravida rutrum justo sed pulvinar. Pellentesque ac ante in erat bibendum dignissim.
                        </p>
                        <ul className="tm-social pl-0 mb-0">
                            <li><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>

                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
            )


        </div>
    )
}

export default Contact;