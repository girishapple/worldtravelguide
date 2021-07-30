import React from 'react';
import "./Home.css";
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <section>
               <p className="covid-instruction">
                   Due to the impact of COVID-19, you are recommended to check travel restrictions
                    from your government sources and contact local venues to verify any new rules
                </p>
                <div className="logo">
                    <Link to="/">
                    <a><img src="logo.jpg" alt="img" /></a>
                    </Link>
                   
                </div>
                <div className="navbar">
                    <nav>
                        <ul className="nav-content">
                            <li><a href=""><i class="fas fa-search"></i></a></li>
                            <li><Link to="/CountryGuides"><a>Country Guides</a></Link></li>
                            <li><Link to="/CityGuides" ><a>City Guides</a></Link></li>
                            <li><Link to="features"><a>Features</a></Link></li>
                            {/* <li><Link to="/food&drink">Food & Drink</Link></li> */}
                            <li><Link to="/flights"><a>Flights</a></Link></li>
                            <li><Link to="/accomodation"><a>Accomodation</a></Link></li>
                        </ul>
                    </nav>
                </div>
        </section>
        
    )
}

export default Header;
