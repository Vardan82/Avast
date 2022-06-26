import { useState, useEffect } from "react";
import MainPopup from "./components/common/MainPopup";
import Avast from "./components/common/Avast";
// import PrivacyPopup from "./components/common/PrivacyPopup";
// import PerformancePopup from "./components/common/PerformancePopup";
// import BlogsPopup from "./components/BlogsPopup";
import { shop } from "./svg";


function Nav() {
 const[showBar, setShowBar] = useState(false)

    const  handleScrole = (e) =>{
      
       if(window.scrollY > 800){
           setShowBar(true)
       } else{
           setShowBar(false)
       }

       console.log(showBar);
    }
    // setTimeout(()=>{

    // }, 1000)

    useEffect(()=>{
        window.addEventListener("scroll", handleScrole)

        return () =>{
            window.removeEventListener("scroll", handleScrole)
        }
        
    })


    const [showSecurityModal, setShowSecurityModal] = useState(0);
    const[showBlogsModal, setShowBlogsModal] = useState(false)

    const [tarif, setTarif] = useState(
    [
        {
            
            title: "Free Antivirus",
            description: "Basic protection for all your devices",
            
        },
        {
            
            title: "Premium Security",
            name: "Looking for a product for your device? Free Antivirus for PC, Free Security for Android, Free Security for Mac, Free Security for iPhone/iPad",
            description: "Complete protection against all internet threats",
               
        },
        {
            title: "Ultimat",
            description: "Our best security, privacy, and performance apps in one package",
            

        },

      
        
        
    ]
    )

    const [tarifOne, setTarifoOne] = useState([
        {
            title: "SecureLine VPN",
            description: "Encrypt your connection to stay safe on public networks",  
        },

        {
            title: "AntiTrack",
            description: "Disguise your digital fingerprint to avoid personalized ads",  
        },
        
        {
            title: "Secure Brauzer",
            description: "Secure, private, and easy to use web browser",  
        },

        {
            title: "BreachGuard",
            description: "Protect your personal info from being exposed and sold",  
        },
        
        {
            title: "Online Security & Privacy",
            description: "Privacy and security browser extension from Avast",  
        }
        


    ])

    const [tarifTwoo, setTarifTwoo] = useState([
        {
            title: "Cleanup Premium",
            description: "Boost your computer’s speed and performance",  
        },

        {
            title: "Driver Updater",
            description: "Automatically update drivers with a single click",  
        },
        
        {
            title: "Battery Server",
            description: "Maximize your battery life",  
        }

    ])

    const [tarifTree, SetTarifTree] = useState([
        {
            title: "Avast Blog",
            description: "Read about recent from the security world",
        },
        {
            title: "Avast Academy",
            description: "Expert tips and guides about digital security and privacy"
        },
        {
            title: "Avast Decoded",
            description: "In-depth technical articles regarding security threats",
        },
        {
            title: "Avast Forum",
            description: "Discuss with the community",
        },
        {
            title: "Avast Resarch Lab",
            description: "Explore more about AL in cybersecurity",
        }
    ])

    


    return (
     <div className="Nav">
           

            <img src="/img/main-logo.svg" />
       
            <div className="header">
                      <div className="headerForHomeSecurity">
                          <div className="ForHomeNav">
                              <a className="ForHome" href=""> For home  </a>
                              <a className="ForBusiness" href=""> For business </a>
                              <a className="ForPartners" href=""> For partners </a>
                          </div>

                          <div className="SecurityNav">

                            <div 
                                className="Security" 
                                onMouseLeave={() => {
                                    setShowSecurityModal(0)
                                }}
                            >

                                <a href="" className="securityA" onMouseEnter={() => setShowSecurityModal(1)}> 
                                    Security 
                                    <img className="arrow" src="/img/arrow-down.png" />  
                                </a>

                                { showSecurityModal == 1 &&  <MainPopup data={tarif}/> }

                            </div>
                            {/* {  <MainPopup data={tarif}/> } */}
                           <div className="Privacy" 
                            onMouseLeave={() => {
                                setShowSecurityModal(0)
                            }}>
                          
                                <a className="privacyA" href="" onMouseEnter={() => setShowSecurityModal(2)}  > 
                            
                                Privacy 
                                <img className="arrow" src="/img/arrow-down.png" /> 
                                </a>
                                { showSecurityModal==2 &&  <MainPopup data={tarifOne} /> }
                                
                           </div>
                           <div className="Performance" onMouseLeave={() => {setShowSecurityModal(0)}}>
                           <a className="performanceA" href="" onMouseEnter={() => setShowSecurityModal(3)}> Performance <img className="arrow" src="/img/arrow-down.png" /> </a>
                           { showSecurityModal==3 &&  <MainPopup data={tarifTwoo} /> }
                

                           </div>
                           {/* <MainPopup data={tarifTwoo} /> */}
                            <div className="AvastOne"  >  Avast One  <span className="New"> NEW </span> </div>
                            
                            <div className="Line"></div > 
                            <a className="Store" href=""> 

                                <span className="shop" > { shop } </span>
                                <span> Store  </span>  </a>
                          </div>
                          
                              
                      </div>
                      <div>
                        <div className="headerSecurityNavRigth">
                                  <div className="AboutUsNav" >
                                      <li className="liBlogs" >  <a className="aboutUs" href=""> About us  </a> </li>
                                      <div className="liBlogs" onMouseLeave={() => {setShowBlogsModal(false)}} >
                                            <a className="blogs" href="" onMouseEnter={() => setShowBlogsModal(true)}> Blogs <img className="arrow" src="/img/arrow-down.png" /> </a>
                                                { showBlogsModal  &&  <Avast data={tarifTree} /> }
                                      </div>
                                      
                                      <div className="LineHederRight"></div > 
                                      <a className="worldwideEnglish" href=""> <span> <img className="worldwide" src="./img/worldwide.png"/> <span className="worldwideWord"> Worldwide(English) </span> <img className="arrow" src="/img/arrow-down.png" /> </span> </a>
                                  </div>
                                  {/* <Avast data={tarifTree} />  */}
                                  <div className="supportNav">
                                      <a className="support" href="">  <img className="supportWumen" src="./img/wumen.png"/>  Support   </a>
                                      <a className="account" href="">  <img className="men" src="./img/men.png"/> <span>  Account </span>  </a>
                                      
                                  </div>
                        </div>
                  </div>
            </div>
           
            {
                showBar &&
                <div className="avastHover">
                    <div className="avast">
                        <img className="avatsHoverImg" src="/img/product-.svg" />
                        <h6 className="avastHoverWord"> Avast Secure Browser</h6>    
                    </div>
                    <div className="buttonDownload">
                        <span className="DownloadHover"> DOWNLOAD NOW</span>
                    </div>
            </div>
            }
            <button ></button>
         
           
      </div>
    );
  }
  
  export default Nav;