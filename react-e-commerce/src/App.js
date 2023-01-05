import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './Header'
import MainMenu from './MainMenu'
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
function App() {
  return (
    <div className="App">
      <Header/>
      <MainMenu />
      <Section1/>
      <Section2/>
      <Section3/>
    <section class="d-flex justify-content-end mt-5">
        <div class="w-50 d-flex flex-column justify-content-center align-items-center h-100">
            <button class="bg-warning text-white border-0 rounded w-25 m-2">New laptop</button>
            <h1 class="color ">Sale up to 50% off</h1>
            <p1 class="text-white">12 inch hd display</p1>
            <button class="bg-warning text-white border-0 rounded w-25 m-2">Shop now</button>
        </div>
    </section>
    <section class="row mt-5 ps-3">
        <div class="col-7 d-flex border rounded">
            <img class="w-50" src="./img/big-speaker.png" alt=""></img>
            <div class="w-50 d-flex flex-column justify-content-center ">
                <h5 class="color">JBL bar 2.1 deep bass</h5>
                <p1>$11,70</p1>
                <div>
                    <img src="./img/star.png" alt=""></img>
                    <img src="./img/star.png" alt=""></img>
                    <img src="./img/star.png" alt=""></img>
                    <img src="./img/star.png" alt=""></img>
                    <img src="./img/star.png" alt=""></img>
                </div>
                <div
                    class="bg-info  bg-opacity-50 w-50 p-1 mt-2 rounded d-flex align-items-center justify-content-between">
                    <p1>Add to cart</p1>
                    <img class="col-3" src="./img/shop.png" alt=""></img>
                </div>
            </div>
        </div>
        <div class="col-5 ps-4 d-flex flex-column justify-content-between h-100">
            <div class=" d-flex border rounded small-card">
                <img class="w-50" src="./img/playstation.png" alt=""></img>
                <div class="d-flex flex-column justify-content-center">
                    <h5>Play game</h5>
                    <p1>$11.70</p1>
                    <div>
                        <img src="./img/star.png" alt=""></img>
                        <img src="./img/star.png" alt=""></img>
                        <img src="./img/star.png" alt=""></img>
                        <img src="./img/star.png" alt=""></img>
                        <img src="./img/star.png" alt=""></img>
                    </div>
                </div>
            </div>
            <div class=" d-flex border rounded small-card">
                <img class="w-50" src="./img/laptop.png" alt=""></img>
                <div class="d-flex flex-column justify-content-center">
                    <h5>Play game</h5>
                    <p1>$11.70</p1>
                    <div>
                        <img src="./img/star.png" alt=""></img>
                        <img src="./img/star.png" alt=""></img>
                        <img src="./img/star.png" alt=""></img>
                        <img src="./img/star.png" alt=""></img>
                        <img src="./img/star.png" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class=" d-flex  bg-info bg-opacity-25 align-items-center rounded mt-5">
        <div class="col-4 d-flex justify-content-center">
            <img class="me-2" src="./img/1.png" alt=""></img>
            <div class="">
                <h5>Free delivery</h5>
                <p1>on order above $50,00</p1>
            </div>
        </div>
        <div class="col-4 d-flex justify-content-center">
            <img class="me-2" src="./img/1.png" alt=""></img>
            <div class="">
                <h5>Best quality</h5>
                <p1>best quality in low price</p1>
            </div>
        </div>
        <div class="col-4 d-flex justify-content-center">
            <img class="me-2" src="./img/1.png" alt=""></img>
            <div class="">
                <h5>1 year warranty</h5>
                <p1>Avaliable warranty</p1>
            </div>
        </div>
    </section>
    <section class="row mt-5 ">
        <div class="col m-2 border rounded">
            <img class="me-2" src="./img/person1.png" alt=""></img>
            <h5 class="d-inline">Savannah Nguyen</h5>
            <div class="bg-info bg-opacity-25 rounded">
                <p class="mt-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ipsam? Magni iusto
                    praesentium voluptates tempora modi vitae veritatis laudantium aliquam.</p>
            </div>
        </div>
        <div class="col m-2 border rounded">
            <img class="me-2" src="./img/person2.png" alt=""></img>
            <h5 class="d-inline">Esther Howard</h5>
            <div class="bg-info bg-opacity-25 rounded">
                <p class="mt-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ipsam? Magni iusto
                    praesentium voluptates tempora modi vitae veritatis laudantium aliquam.</p>
            </div>
        </div>
        <div class="col m-2 border rounded">
            <img class="me-2" src="./img/person3.png" alt=""></img>
            <h5 class="d-inline">Esther Howard</h5>
            <div class="bg-info bg-opacity-25 rounded">
                <p class="mt-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ipsam? Magni iusto
                    praesentium voluptates tempora modi vitae veritatis laudantium aliquam.</p>
            </div>
        </div>
    </section>
    <section class=" d-flex align-items-center bg-info bg-opacity-25 justify-content-between mt-5">
        <img class="col-2" src="./img/brand-1.png" alt=""></img>
        <img class="col-2" src="./img/brand-2.png" alt=""></img>
        <img class="col-2" src="./img/brand-3.png" alt=""></img>
        <img class="col-2" src="./img/brand-4.png" alt=""></img>
        <img class="col-2" src="./img/brand-5.png" alt=""></img>
    </section>
    <section class="mt-5">
        <div class="d-flex justify-content-between">
            <h5 class="color m-3">Latest news</h5>
            <h5 class="color m-3">View all</h5>
        </div>
        <div class="row">
            <div class="col m-2 border rounded d-flex p-3">
                <img class="w-50" src="./img/Blog-1.png" alt=""></img>
                <div class="ms-3">
                    <div class=" w-50 d-flex justify-content-center border rounded-pill mb-2">22 oct 2021</div>
                    <h5>Who avoids a pain that produces?</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae est ut, iste quaerat suscipit
                        fugit.</p>
                    <p>By spacing tech</p>
                </div>
            </div>
            <div class="col m-2 border rounded d-flex p-3">
                <img class="w-50" src="./img/Blog-2.png" alt=""></img>
                <div class="ms-3">
                    <div class=" w-50 d-flex justify-content-center border rounded-pill mb-2">22 oct 2021</div>
                    <h5>Who avoids a pain that produces?</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae est ut, iste quaerat suscipit
                        fugit.</p>
                    <p>By spacing tech</p>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-info bg-opacity-25 d-flex align-items-end mt-5">
        <div id="subscribe" class="w-100 d-flex justify-content-evenly align-items-center bg-white">
            <h3 class="color">Subscribe newsletter</h3>
            <div class="col-4 h-25 p-2 d-flex justify-content-between align-items-center rounded bg-warning text-white">
                <p1>Email address</p1>
                <img src="./img/send-2.png" alt=""></img>
            </div>
            <div class="d-flex ">
                <img class="me-3" src="./img/headphone.png" alt=""></img>
                <p1>Call us 24/7:<br></br>(+62) 0123 567 789</p1>
            </div>
        </div>
    </section>
    <footer class="bg-info bg-opacity-25 py-5">
        <div class="row">
            <div class="col">
                <img src="./img/logo-1 1.png" alt=""></img>
                <p class="my-4">64 st james boulevard hoswick, ze2 7zj</p>
                <hr></hr>
                <img class="me-2" src="./img/google.png" alt=""></img>
                <img class="me-2" src="./img/facebook.png" alt=""></img>
                <img class="me-2" src="./img/whatsapp.png" alt=""></img>
            </div>
            <div class="col">
                <h5 class="color">Find product</h5>
                <ul class="col">
                    <li>Brownze arnold</li>
                    <li>Chronograph blue</li>
                    <li>Smart phones</li>
                    <li>Automatic watch</li>
                    <li>Hair straighteners</li>
                </ul>
            </div>
            <div class="col">
                <h5 class="color">Get help</h5>
                <ul class="col">
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Return policy</li>
                    <li>Privacy policy</li>
                    <li>Payment policy</li>
                </ul>
            </div>
            <div class="col">
                <h5 class="color">About us</h5>
                <ul class="col">
                    <li>News</li>
                    <li>Service</li>
                    <li>Our policy</li>
                    <li>Custmer care</li>
                    <li>Faq's</li>
                </ul>
            </div>
        </div>
    </footer>
    </div>
            );
}

export default App;
