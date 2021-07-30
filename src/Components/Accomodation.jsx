import React from 'react';
import Footer from './Footer';
import Header from './Header';
import "./Home.css"

const Accomodation = () => {
    return (
        <section>
            <Header/>
            <article>
            <p className="booking">Accomodation</p>
                {/* <section>
                    <div>
                        <h1>map</h1>
                        <iframe src="" frameborder="0"></iframe>
                    </div>
                </section> */}
                <section>
               <div >
                    <p className="TF" >Travel Features</p>
                     <button className="btn" >SEE MORE</button>
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
               </section>
            </article>
            <Footer/>
        </section>
    )
}

export default Accomodation
