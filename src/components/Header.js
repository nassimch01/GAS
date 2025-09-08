import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <div>
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


        </div>







    )
}

export default Header