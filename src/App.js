import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Header from './header';
import Main from './main';
import Security from './components/common/Security';
import Privacy from './components/common/privacy';
import Avast from './components/common/Avast';
import Manange from './components/common/Manange';
import Brauzer from './components/common/Brauzer';
import AvastInformations from './components/common/AvastInformations';
import GetBrauzer from './components/common/GetBrauzer';
import ImgSection from './components/common/ImgSection';
import FasterBrauzinsAvast from './components/common/FasterBrauzinsAvast';
import Footer from './components/common/Footer';
import AppMob from './components/common/MediaAvastOnclivk.Map';

import './stylesheets/card.css';
import "./stylesheets/Manange.css";
import "./stylesheets/Brauzer.css"
import "./stylesheets/AvastInformations.css"
import "./stylesheets/GetBrauzer.css"
import "./stylesheets/ImgSection.css"
import "./stylesheets/FasterBrauzinsAvast.css"
import "./stylesheets/Footer.css"




function App() {

  

  return (
    <div className="App">
      <Nav/>
      <Header/>
      <AppMob/>
      <Main/>
      <Security/>
      <Privacy/>
      <Manange/> 
      <Avast/>
      <Brauzer/>
      <AvastInformations/>
      <GetBrauzer/>
      <ImgSection/>
      <FasterBrauzinsAvast/>
      <Footer/>
    </div>
  );
}

export default App;
