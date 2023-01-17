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
import { Routes, Route, Link } from 'react-router-dom';
import SignUp from './components/SignUp';
import Home from './components/Home'
function App() {
  const [addWishlist, setAddWishlist] = useState([]);
  {products.map(data => {
    return (
        <ProductBox
    
   
        setAddWishlist={setAddWishlist}
            addWishlist={addWishlist}
            title={data.title}
            imgUrl={data.imgUrl}
            price={data.price}
            data={data} />
    )
}
)}

  return (
    <div className="App container">
      <Header addWishlist={addWishlist} setAddWishlist={setAddWishlist}/>
      <MainMenu />
      <Routes>
        <Route path="/" element={<Home addWishlist={addWishlist} setAddWishlist={setAddWishlist}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/detail" element={<Detail addWishlist={addWishlist} setAddWishlist={setAddWishlist}/>} />
      </Routes>
      <Section10 />
      <Footer />



    </div>
  );
}

export default App;
