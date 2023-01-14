import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "react-alice-carousel/lib/alice-carousel.css";
import './App.css';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header'
import MainMenu from './components/MainMenu'
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import Section8 from './components/Section8';
import Section9 from './components/Section9';
import Section10 from './components/Section10';
import Footer from './components/Footer';
import Detail from './components/Detail'
import { useState } from 'react';
import { products } from './data/products'
function App() {
  const [addWishlist, setAddWishlist] = useState([]);

 console.log(addWishlist)
  return (
    <div className="App container">
      <Header addWishlist={addWishlist} />
      <MainMenu />
      <Section1/>
      <Section2/>
      <Section3 setAddWishlist={setAddWishlist} addWishlist={addWishlist} />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Footer />
    </div>
  );
}

export default App;
