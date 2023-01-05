import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import Header from './Header'
import MainMenu from './MainMenu'
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';
import Section10 from './Section10';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <MainMenu />
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
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
