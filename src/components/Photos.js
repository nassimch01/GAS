import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function Photos() {
    return (
        <div className='background-image'>
            <Header />

            <div className="container-fluid tm-container-content tm-mt-60">
                <div className="row mb-4">
                    <h2 className="col-6 tm-text-primary">
                        Latest Photos
                    </h2>
                    <div className="col-6 d-flex justify-content-end align-items-center">
                        <form action="" className="tm-text-primary">
                            Page <input type="text" value="1" size="1" className="tm-input-paging tm-text-primary" /> of 200
                        </form>
                    </div>
                </div>
                <div className="row tm-mb-90 tm-gallery">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-03.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Clocks</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">18 Oct 2020</span>
                            <span>9,906 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-04.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Plants</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">14 Oct 2020</span>
                            <span>16,100 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-05.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Morning</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">12 Oct 2020</span>
                            <span>12,460 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-06.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Pinky</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">10 Oct 2020</span>
                            <span>11,402 views</span>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-01.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Hangers</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">24 Sep 2020</span>
                            <span>16,008 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-02.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Perfumes</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">20 Sep 2020</span>
                            <span>12,860 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-07.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Bus</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">16 Sep 2020</span>
                            <span>10,900 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-08.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>New York</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">12 Sep 2020</span>
                            <span>11,300 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-09.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Abstract</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">10 Sep 2020</span>
                            <span>42,700 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-10.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Flowers</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">8 Sep 2020</span>
                            <span>11,402 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-11.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Rosy</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">4 Sep 2020</span>
                            <span>32,906 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-12.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Rocki</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">28 Aug 2020</span>
                            <span>50,700 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-13.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Purple</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">22 Aug 2020</span>
                            <span>107,510 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-14.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Sea</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">14 Aug 2020</span>
                            <span>118,006 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-15.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Turtle</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">9 Aug 2020</span>
                            <span>121,300 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-16.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-17.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-18.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-19.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-20.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-21.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-22.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-23.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-24.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-25.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-26.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-27.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-28.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-29.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-30.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-31.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-32.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-33.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-34.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-35.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="/img/img-36.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Peace</h2>
                                <a href="photo-detail.html">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">3 Aug 2020</span>
                            <span>21,204 views</span>
                        </div>
                    </div>
                </div>


                <div className="row tm-mb-90">
                    <div className="col-12 d-flex justify-content-between align-items-center tm-paging-col">
                        <a href="javascript:void(0);" className="btn btn-primary tm-btn-prev mb-2 disabled">Previous</a>
                        <div className="tm-paging d-flex">
                            <a href="javascript:void(0);" className="active tm-paging-link">1</a>
                            <Link className="tm-paging-link" to="/photos">2</Link>
                            <Link className="tm-paging-link" to="/photos">3</Link>
                            <Link className="tm-paging-link" to="/photos">4</Link>
                        </div>
                        <a href="javascript:void(0);" className="btn btn-primary tm-btn-next">Next Page</a>
                    </div>
                </div>
            </div>
            {/*<div className="container-fluid tm-container-content tm-mt-60">
                <div className="row mb-4">
                    <h2 className="col-12 tm-text-primary">Photo title goes here</h2>
                </div>
                <div className="row tm-mb-90">
                    <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12">
                        <img src="img/img-01-big.jpg" alt="Image" className="img-fluid" />
                    </div>
                    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                        <div className="tm-bg-gray tm-video-details">
                            <p className="mb-4">
                                Please support us by making <a href="https://paypal.me/templatemo" target="_parent" rel="sponsored">a PayPal donation</a>. Nam ex nibh, efficitur eget libero ut, placerat aliquet justo. Cras nec varius leo.
                            </p>
                            <div className="text-center mb-5">
                                <a href="#" className="btn btn-primary tm-btn-big">Download</a>
                            </div>
                            <div className="mb-4 d-flex flex-wrap">
                                <div className="mr-4 mb-2">
                                    <span className="tm-text-gray-dark">Dimension: </span><span className="tm-text-primary">1920x1080</span>
                                </div>
                                <div className="mr-4 mb-2">
                                    <span className="tm-text-gray-dark">Format: </span><span className="tm-text-primary">JPG</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h3 className="tm-text-gray-dark mb-3">License</h3>
                                <p>Free for both personal and commercial use. No need to pay anything. No need to make any attribution.</p>
                            </div>
                            <div>
                                <h3 className="tm-text-gray-dark mb-3">Tags</h3>
                                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Cloud</a>
                                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Bluesky</a>
                                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Nature</a>
                                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Background</a>
                                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Timelapse</a>
                                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Night</a>
                                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Real Estate</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <h2 className="col-12 tm-text-primary">
                        Related Photos
                    </h2>
                </div>
                <div className="row mb-3 tm-gallery">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="img/img-01.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Hangers</h2>
                                <a href="#">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">16 Oct 2020</span>
                            <span>12,460 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="img/img-02.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Perfumes</h2>
                                <a href="#">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">12 Oct 2020</span>
                            <span>11,402 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="img/img-03.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Clocks</h2>
                                <a href="#">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">8 Oct 2020</span>
                            <span>9,906 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="img/img-04.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Plants</h2>
                                <a href="#">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">6 Oct 2020</span>
                            <span>16,100 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="img/img-05.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Morning</h2>
                                <a href="#">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">26 Sep 2020</span>
                            <span>16,008 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="img/img-06.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center" />
                            <h2>Pinky</h2>
                            <a href="#">View more</a>

                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">22 Sep 2020</span>
                            <span>12,860 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="img/img-07.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>Bus</h2>
                                <a href="#">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">12 Sep 2020</span>
                            <span>10,900 views</span>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                        <figure className="effect-ming tm-video-item">
                            <img src="img/img-08.jpg" alt="Image" className="img-fluid" />
                            <figcaption className="d-flex align-items-center justify-content-center">
                                <h2>New York</h2>
                                <a href="#">View more</a>
                            </figcaption>
                        </figure>
                        <div className="d-flex justify-content-between tm-text-gray">
                            <span className="tm-text-gray-light">4 Sep 2020</span>
                            <span>11,300 views</span>
                        </div>
                    </div>
                </div>
            </div>*/}
            <Footer />

        </div>
    )
}

export default Photos