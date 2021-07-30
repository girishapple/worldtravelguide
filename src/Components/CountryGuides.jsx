import React from 'react';
import Footer from './Footer';
import Header from './Header';
import "./Home.css";

const CountryGuides = () => {
    return (
       <section>
           <Header/>
           <article>
           <div className="poster">
                <img src="countryguide.jpg" alt="" />
                    <h1>World Travel Guide</h1>
                    <p>A comprehensive guide to the world's best destinations.</p>
                    <input type="text" placeholder="Where would you like to go" />
            </div>
            <section className="select">
                <p>Select your country, state or region by continent</p>
                <div className="tabs">
                    <nav>
                        <ul className="tabs-list">
                            <li><a href="">Africa</a></li>
                            <li><a href="">Antartica</a></li>
                            <li><a href="">Asia</a></li>
                            <li><a href="">Carribean</a></li>
                             <li><a href="">Europe</a></li>
                            <li><a href="">Middle East</a></li>
                            <li><a href="">North America</a></li>
                            <li><a href="">Ocenia</a></li>
                            <li><a href="">South America</a></li>
                        </ul>
                    </nav>
                </div>
                <section className="tab-content">
                <div className="first">
                    <ul>
                        <li> Algeria</li>   
                        <li>Angola</li>
                        <li>Benin</li>
                        <li>Botswana</li>
                        <li>Burkina Faso</li>
                        <li>Burundi</li>
                        <li>Cameroon</li>
                        <li>Cape Verde</li>
                        <li>Central African Republic</li>
                        <li>Chad</li>
                        <li>Comoros</li>
                        <li>Democratic Republic of Congo</li>
                        <li>Djibouti</li>
                        <li>Egypt</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Equatorial Guinea</li>   
                        <li>Eritrea</li>
                        <li>eSwatini</li>
                        <li>Ethiopia</li>
                        <li>Gabon</li>
                        <li>Gambia</li>
                        <li>Ghana</li>
                        <li>Guinea</li>
                        <li>Guinea-Bissau</li>
                        <li>Ivory Coast</li>
                        <li>Kenya</li>
                        <li>Lesotho</li>
                        <li>Liberia</li>
                        <li>Liberia</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li> Algeria</li>   
                        <li>Angola</li>
                        <li>Benin</li>
                        <li>Botswana</li>
                        <li>Burkina Faso</li>
                        <li>Burundi</li>
                        <li>Cameroon</li>
                        <li>Cape Verde</li>
                        <li>Central African Republic</li>
                        <li>Chad</li>
                        <li>Comoros</li>
                        <li>Democratic Republic of Congo</li>
                        <li>Djibouti</li>
                        <li>Egypt</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li> Algeria</li>   
                        <li>Angola</li>
                        <li>Benin</li>
                        <li>Botswana</li>
                        <li>Burkina Faso</li>
                        <li>Burundi</li>
                        <li>Cameroon</li>
                        <li>Cape Verde</li>
                        <li>Central African Republic</li>
                        <li>Chad</li>
                        <li>Comoros</li>
                        <li>Democratic Republic of Congo</li>
                        <li>Djibouti</li>
                        <li>Egypt</li>
                    </ul>
                </div>
                </section>
                <div className="hr" >
                    < hr />
                </div>
                <section>
                <div className="seemore" >
                    <p>Latest Country Guides</p>
                     <button>SEE MORE</button>
                     <div className="row">
                         <div className="cards" >
                              <img src="cg1.jpg" alt="" />
                              <h1>Namibia</h1>
                              <p>
                                  From the seemingly endless sand dunes of the Namib Desert to the tropical wetlands
                                  of the Caprivi Strip, Namibia is a country of epic landscapes, bountiful wild...
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="cg2.jpg" alt="" />
                               <h1>Morocco</h1>
                              <p>
                                Known for its incredible cultural riches, Morocco has fascinated travellers for centuries.
                                The name usually conjures up images of sprawling souks, walled medina...
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="cg3.jpg" alt="" />
                               <h1>Qatar</h1>
                              <p>
                                 Fuelled by oil and natural gas revenue, Qatar is developing at breakneck speed. Over half of
                                 Qatar's population lives in and around the capital, Doha. Other tow...
                              </p>
                         </div>
                     </div>
                     <div className="row">
                         <div className="cards" >
                              <img src="cg4.jpg" alt="" />
                              <h1>Japan</h1>
                              <p>
                                From kimono-clad geishas singing traditional songs in Kyoto to manga-crazed teenagers whizzing
                                around Akihabara 'Electric Town' in Tokyo, Japan is a fascinating...
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="cg5.jpg" alt="" />
                               <h1>Rwanda</h1>
                              <p>
                                Dubbed 'The Land of a Thousand Hills', Rwanda's lush green landscape, and the diverse wildlife
                                that inhabits it, is indeed the country's star attraction. This s...
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="cg6.jpg" alt="" />
                               <h1>Cuba</h1>
                              <p>
                                Much like the varying conditions of classic cars, Havana appears to be in a constant state of restoration.
                                A mishmash of beautifully restored colonial buildings...
                              </p>
                         </div>
                     </div>
                     <div className="row">
                         <div className="cards" >
                              <img src="cg7.jpg" alt="" />
                              <h1>Jersey</h1>
                              <p>
                                 The largest of the Channel Islands, Jersey's landscape is varied and breathtaking, from shimmering secluded
                                 coves and undulating farmland to magnificent cliff-t...
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="cg8.jpg" alt="" />
                               <h1>Channel Islands</h1>
                              <p>
                                 As their name suggests, the Channel Islands are sprinkled across that narrow channel of sea
                                 that divides France and the UK. Made up of Alderney, Guernsey, Jerse...
                              </p>
                         </div>
                         <div className="cards" >
                               <img src="cg9.jpg" alt="" />
                               <h1>Queensland</h1>
                              <p>
                                 Life in Queensland is riddled with all the right sort of Australian
                                 clichés: lazy barbecues, golden beaches, reef’n’rainforest, limitless sun...
                                 and much more
                              </p>
                         </div>
                     </div>
                     </div>
                </section>
                <hr />
               
            </section>
           </article>
           <Footer/>
       </section>
    )
}

export default CountryGuides;
