import React from 'react';
import "./Home.css";
import {withRouter} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Tabinfo from '../Tabs/Tabinfo';

const CityGuides = () => {
    return (
       <section>
           <Header/>
           <article>
           <div className="poster">
                <img src="cityguide.jpg" alt="" />
                    <h1>City Guides</h1>
                    <p>Quirky. Inspiring. Engaging. Informative.</p>
                    <input type="text" placeholder="Where would you like to go" />
            </div>
            <section className="city">
                <p className="option" >Select your country, state or region by continent</p>
                   <Tabinfo/>
        </section>
        <div className="hr1" >
                    < hr />
                </div>  
                <section>
                <div className="ct" >
                    <p>Find your city from the list of countries below</p>
                     <button>SEE MORE</button>
                     <div className="row">
                         <div className="cards" >
                              <img src="cl1.jpg" alt="" />
                              <h1>Namibia</h1>
                              <p>
                                  From the seemingly endless sand dunes of the Namib Desert to the tropical wetlands
                                  of the Caprivi Strip, Namibia is a country of epic landscapes, bountiful wild...
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="cl2.jpg" alt="" />
                               <h1>Morocco</h1>
                              <p>
                                Known for its incredible cultural riches, Morocco has fascinated travellers for centuries.
                                The name usually conjures up images of sprawling souks, walled medina...
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="cl3.jpg" alt="" />
                               <h1>Qatar</h1>
                              <p>
                                 Fuelled by oil and natural gas revenue, Qatar is developing at breakneck speed. Over half of
                                 Qatar's population lives in and around the capital, Doha. Other tow...
                              </p>
                         </div>
                     </div>
                     <div className="row">
                         <div className="cards" >
                              <img src="cl4.jpg" alt="" />
                              <h1>Japan</h1>
                              <p>
                                From kimono-clad geishas singing traditional songs in Kyoto to manga-crazed teenagers whizzing
                                around Akihabara 'Electric Town' in Tokyo, Japan is a fascinating...
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="cl5.jpg" alt="" />
                               <h1>Rwanda</h1>
                              <p>
                                Dubbed 'The Land of a Thousand Hills', Rwanda's lush green landscape, and the diverse wildlife
                                that inhabits it, is indeed the country's star attraction. This s...
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="cl6.jpg" alt="" />
                               <h1>Cuba</h1>
                              <p>
                                Much like the varying conditions of classic cars, Havana appears to be in a constant state of restoration.
                                A mishmash of beautifully restored colonial buildings...
                              </p>
                         </div>
                     </div>
                     <div className="row">
                         <div className="cards" >
                              <img src="cl7.jpg" alt="" />
                              <h1>Japan</h1>
                              <p>
                                From kimono-clad geishas singing traditional songs in Kyoto to manga-crazed teenagers whizzing
                                around Akihabara 'Electric Town' in Tokyo, Japan is a fascinating...
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="cl8.jpg" alt="" />
                               <h1>Rwanda</h1>
                              <p>
                                Dubbed 'The Land of a Thousand Hills', Rwanda's lush green landscape, and the diverse wildlife
                                that inhabits it, is indeed the country's star attraction. This s...
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="cl9.jpg" alt="" />
                               <h1>Cuba</h1>
                              <p>
                                Much like the varying conditions of classic cars, Havana appears to be in a constant state of restoration.
                                A mishmash of beautifully restored colonial buildings...
                              </p>
                         </div>
                     </div>
                     </div>
        </section> 
            
            <Footer/>
           </article>
       </section>
    )
}

export default withRouter (CityGuides);
