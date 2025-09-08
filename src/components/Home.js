import React from 'react'
import { useNavigate } from 'react-router-dom';




function Home() {
    const navigate = useNavigate();
    return (
        <div className="home-container">

            <div className="overlay">
                <button className="get-started-btn" onClick={() => navigate('/photos')}>
                    Get Started
                </button>
            </div>
        </div>
    )
}

export default Home