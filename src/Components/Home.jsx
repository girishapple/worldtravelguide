import React from 'react';
import "./Home.css";
import Header from './Header';
import Footer from './Footer';
import Tabinfo from '../Tabs/Tabinfo';

const Home = () => {
    return (
       <section>
           <article>
               <Header/>
                <div className="poster">
                <img src="trave.jpg" alt="" />
                    <h1>World Travel Guide</h1>
                    <input type="text" placeholder="Where would you like to go" />
                </div>
                <div className="follow">
                    <h4>FOLLOW US</h4>
                    <div className="icons">
                          <i class="fab fa-facebook-square"></i>
                          <i class="fab fa-twitter"></i>
                          <i class="fab fa-pinterest"></i>
                          <i class="fas fa-envelope"></i>
                    </div>
                </div>
                <div className="editor">
                    <div className="content">
                        <h1>Editorial Foreword</h1>
                        <p>
                          The World Travel Guide (WTG) is the flagship digital consumer brand 
                          within the Columbus Travel <br /> Media portfolio. Available in English, 
                          German, and Spanish versions, the WTG provides detailed and <br /> accurate travel
                          content designed to inspire global travellers. It covers all aspects, from
                          cities to <br /> airports, cruise ports to ski and beach resorts, attractions to events,
                          and it also includes offbeat <br/>travel news, stories, quizzes and guides for adventurous travellers.
                       </p>
                    </div>
                   
                </div>

                <section className="Travel">
                    <div>
                    <p>Travel Features</p>
                     <button>SEE MORE</button>
                     <div className="row">
                         <div className="cards" >
                              <img src="pic1.jpg" alt="" />
                              <h1>Getting high: 13 of the best adrenaline activities</h1>
                              <p>
                                  From death-defying heights to nail-biting adventures,these
                                  activities will definitely get your heart pumping
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="pic2.jpg" alt="" />
                               <h1>Alternative activities to spice up your Paris visit</h1>
                              <p>
                                  Beyond iconic sights, the streets of Paris reveal a
                                   smattering of pleasant surprises and here is how to find them
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="pic3.jpg" alt="" />
                               <h1>The 12 weird but wonderful wellness retreats</h1>
                              <p>
                                  We round up unique retreats that adventurers seek out
                                   to soothe both body and mind
                              </p>
                         </div>
                     </div>
                     <div className="row">
                         <div className="cards" >
                              <img src="pic4.jpg" alt="" />
                              <h1>Seven days in Marrakech</h1>
                              <p>
                                  Make the most of a week in Marrakech, including day trips
                                 to Ourika and the Atlas Mountains, with our seven-day guide and travel tips
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="pic5.jpg" alt="" />
                               <h1>My secret London</h1>
                              <p>
                                  London has a curious air of quirkiness enhanced by a string of
                                  lesser-known nooks that locals have kept close to their chests,writes Thomas Clarke
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="pic6.jpg" alt="" />
                               <h1>Best British seaside towns</h1>
                               <p>
                                   The Great British beach holiday is back in vogue,
                                   so we round up the best coastal resorts for a sun and
                                   fun holiday in England, Wales and Scotland
                                </p>
                         </div>
                     </div>
                    </div>
                     <hr />
                     <div>
                     <p>Food And Drink</p>
                     <button>SEE MORE</button>
                     <div className="row">
                         <div className="cards" >
                              <img src="pic7.jpg" alt="" />
                              <h1>The world’s love affair with tea</h1>
                              <p>
                                  From death-defying heights to nail-biting adventures,these
                                  activities will definitely get your heart pumping
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="pic8.jpg" alt="" />
                               <h1>Around the world in 8 pancakes</h1>
                                <p>
                                   Beyond iconic sights, the streets of Paris reveal a
                                   smattering of pleasant surprises and here is how to find them
                                </p>
                         </div>
                         <div className="cards" >
                               <img src="pic9.jpg" alt="" />
                               <h1>In search of the perfect restaurant experience</h1>
                              <p>
                                  We round up unique retreats that adventurers seek out
                                   to soothe both body and mind
                              </p>
                         </div>
                     </div>
                     <div className="row">
                         <div className="cards" >
                              <img src="pic10.jpg" alt="" />
                              <h1>Italian wine for major occasions</h1>
                              <p>
                                  Great wine can amp up your mood and enhance your experience,
                                  and this guide can help you choose fantastic Italian wine for major
                                  foodie and special occasions
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="pic11.jpg" alt="" />
                               <h1>Everything you need to know about canned food</h1>
                              <p>
                                  Convenient, cheap and nutritious,canned food is enjoying a popularity boom,
                                  here is (almost) everything you need to know about the pantry staples
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="pic12.jpg" alt="" />
                               <h1>Everything you need to know about Italian wine</h1>
                              <p>
                                  Italian wines are varied and popular,and this expert guide helps you understand
                                  Italian wines from 20 different regions and recommends the best ones to try 
                              </p>
                         </div>
                     </div>
                     </div>
                     <hr />
                     <div>
                     <p>City Guides</p>
                     <button>SEE MORE</button>
                     <div className="row">
                         <div className="cards" >
                              <img src="pic13.jpg" alt="" />
                              <h1>Osaka</h1>
                              <p>
                                  Bustling and energetic, Osaka is a thriving metropolis with a distinct
                                  commercial culture and with a regional identity that sets it apart from
                                  elsewhere in Japan.
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="pic14.jpg" alt="" />
                               <h1>Paris</h1>
                              <p>
                                  Paris rarely disappoints. Home to beautiful architecture,arresting art 
                                 and the world’s finest restaurants, only the hard–hearted will leave the
                                 City of Light without falling in love.
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="pic15.jpg" alt="" />
                               <h1>Eilat</h1>
                              <p>
                                 Sandwiched between the Red Sea and the mighty Negev desert,Eilat is a 
                                 water sport and desert adventure paradise. The southernmost city of Israel 
                                 has all the hallmarks of a fantastic sun and fun holiday.
                              </p>
                         </div>
                     </div>
                     
                     </div>
                     <hr />
                     <div>
                     <p>Country/ State/ Region Guides</p>
                     <button>SEE MORE</button>
                     <div className="row">
                         <div className="cards" >
                              <img src="pic16.jpg" alt=""/>
                              <h1>Greece</h1>
                              <p>
                                  A flavourful melting pot of sparkling nightspots, fresh seafood,
                                  sizzling Mediterranean passion and mythical legend, Greece is a fascinating and 
                                  enchanting destination.
                             </p>
                         </div>
                         <div className="cards" >
                               <img src="pic17.jpg" alt="" />
                               <h1>Qatar</h1>
                              <p>
                                 The eyes of the world are on Qatar right now. Following the discovery of oil in the 1940s,
                                 this small Gulf state has been catapulted from a small fishing and trading hub to one of the
                                 richest (per capita) countries in the world.
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="pic18.jpg" alt="" />
                               <h1>The Islands of Tahiti</h1>
                              <p>
                                  The Islands of Tahiti are known for their laid-back vibes.Expect romantic sunsets and giant curls of
                                 turquoise breaking over reefs. Remote and pristine, the islands give you a glimpse of paradise on Earth.
                              </p>
                         </div>
                     </div>
                     <div className="row">
                         <div className="cards" >
                              <img src="pic19.jpg" alt="" />
                              <h1>Mongolia</h1>
                              <p>
                                 Mongolia is far-flung and little visited yet has much to offer, from the stunning scenery and wildlife of mountains
                                 and deserts to the emerging luxury hotels and restaurants of capital Ulaanbaatar.
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="pic20.jpg" alt="" />
                               <h1>Cuba</h1>
                              <p>
                                  Much like the varying conditions of classic cars, Havana appears to be in a constant state of restoration.
                                  A mishmash of beautifully restored colonial buildings rubs shoulders with dilapidated tenements of regular 
                                  Cubans.
                              </p>
                         </div>
                     </div>
                     </div>
                     <hr />
                </section>
               <Footer/>
           </article>
       </section>
    )
}

export default Home;
