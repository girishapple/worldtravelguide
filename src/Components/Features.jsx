import React from 'react';
import Footer from './Footer';
import Header from './Header';
import "./Home.css";

const Features = () => {
    return (
       <section id="feat">
           <Header/>
           <article>
               <section className="featblock" >
                   <div class="row">
                       
                       <div className="f1" >
                            <img src="pic1.jpg" alt="" />
                            <h1>Getting high : 13 of the best <br /> adrenaline activities</h1>
                       </div>
                   <div>
                   <div class="row">
                        <div className="f2" >
                                <div className="f3" >
                                   <img src="pic2.jpg" alt="" />
                                   <img src="pic4.jpg" alt="" />
                                </div>
                                <div className="f4" >
                                  <img src="pic3.jpg" alt="" />
                                  <img src="pic5.jpg" alt="" />
                                </div>
                           </div>
                        </div>
                           
                   </div>
                       
                    </div>
                </section>
                <section id="feat-cards">
                <div className="features" >
                    <p className="fea" >Features</p>
                     <button>SEE MORE</button>
                     <div className="row">
                         <div className="cards" >
                              <img src="f1.jpg" alt="" />
                              <h1>19 of the best British seaside towns and holidays</h1>
                              <p>
                              The Great British beach holiday is back in vogue, so we round up the best coastal
                               resorts for a sun and fun holiday in England, Wales and Scotland
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="f2.jpg" alt="" />
                               <h1>Bathe thyself: Searching for the ‘Kneipp Cure’ in Germany</h1>
                              <p>
                              Once upon a time, Europeans flocked to Germany in search of the 'Kneipp Cure' or Kneippism,
                               so find out what it is and why it is popular again
                              </p>
                         </div>
                     </div>
                     <div className="row">
                         <div className="cards" >
                              <img src="f3.jpg" alt="" />
                              <h1>Space tourism: Ground control to… anybody with a big enough bank balance</h1>
                              <p>
                              Rapid advances in technology mean that we're getting closer to a new era in space tourism
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="f4.jpg" alt="" />
                               <h1>18 of the best art and culture festivals around the world</h1>
                              <p>
                              Discover the best art and culture festivals around the world through
                               craft, comedy, dance, theatre and cultural performances
                              </p>
                         </div>
                     </div>
                     <div className="row">
                         <div className="cards" >
                              <img src="f5.jpg" alt="" />
                              <h1>The 9 best dark tourism spots in Europe</h1>
                              <p>
                                From warfare to natural disasters,Europe has many bloody periods.
                                Here are nine places... 
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="f6.jpg" alt="" />
                               <h1>A quick guide to Kochi Prefecture</h1>
                              <p>
                              In this quick guide, we are exploring Kochi Prefecture, along with its cultural
                               and natural wonders
                              </p>
                         </div>
                     </div>
                     <div className="row">
                         <div className="cards" >
                              <img src="f7.jpg" alt="" />
                              <h1>Diversity of Kagawa Prefecture</h1>
                              <p>
                              The pretty Kagawa Prefecture and its Shodoshima Island 
                              are well worth a trip, as we explore Kagawa's delicacies and cultural highlights
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="f8.jpg" alt="" />
                               <h1>13 of the best lost cities</h1>
                              <p>
                                Determined archaeologists have helped to uncover
                                 ancient lost cities and put them on the map again, and here are our top picks
                              </p>
                         </div>
                     </div>
                     <div className="row">
                         <div className="cards" >
                              <img src="f9.jpg" alt="" />
                              <h1>Miyoshi, gateway to the unspoilt Iya Valley</h1>
                              <p>
                               Mountains, rivers, authentic villages and generous hospitality,
                               Miyoshi offers travellers a chance to pause and reconnect.
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="f10.jpg" alt="" />
                               
                              <h1>The 7 best cliché-free Valentine’s Day breaks</h1>
                              <p>
                              Valentine's Day can be more than roses and a candlelit dinner,
                              here are the top seven cliché-free options to celebrate this Valentine's Day
                              </p>
                         </div>
                     </div>
                     </div>
                     </section>
                     <hr />
           </article>
           <Footer/>
       </section>
    )
}

export default Features;
