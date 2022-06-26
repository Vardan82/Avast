
import   "../../stylesheets/security.css"
import { plastik,  anti, encription, cross} from "../../svg";
import {useState, useEffect} from "react"


function Security(){
    
    const[play, setPlay] = useState(false)
    const [showTopBtn, setShowTopBtn] = useState(false);
      
    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if (window.height >81) {
    //             setShowTopBtn(true);
    //         } else {
    //             setShowTopBtn(false);
    //         }
    //     });
    // }, []);

    // useEffect(()=>{
    //     window.addEventListener("scroll", ()=>{
    //         if(window.height < 150){
    //             setShowTopBtn(true)
    //         } else {
    //             setShowTopBtn(false)
    //         }
    //     })
    // })



    console.log(showTopBtn);

    return(
        <div className="security" >
            <div className="securityBacgraund">
                <div className="securityAndMedia">
                    <div className="securityBody">
                        <span className="wordSecurity"> SECURITY </span>
                        <h2 className="body"> Do what you want online, securely </h2>
                        <p className="bodyWord"> Our private browser has advanced security built in, so you can browse, shop, and bank safely on any website. </p>
                        <div className="learnMoreImg"> 
                            <span className="LearnMore"> LEARN MORE  </span>
                            <span className="img">&#8594;</span>
                        </div>
                    </div>
                    <div className="video" >
                            <img className="imgBrous" src="./img/browse.png"/>
                            
                           <div onClick={() => setPlay(true)}> 
                                <img  className="play" src="./img/play.png"/> 
                           
                            
                           </div>
                           
                    </div>
                  
                </div>
                    <div className="websitesDanger">
                       <div className="hedInformations">
                        <div className="informations">
                                <div className="plastik"> {plastik} </div>
                                <h5 className="newsWord"> Prevent hackers from stealing your data </h5>
                                <span className="plastikHide"> Hide everything you type online to keep your sensitive data safe. </span>

                            </div>
                       </div>
                       <div className="hedInformations">
                        <div className="informations">
                                <div className="plastik"> {anti} </div>
                                <h5 className="newsWord"> Block malicious websites and downloads </h5>
                                <span className="plastikHide"> Protect your device from threats with powerful anti-phishing technology. </span>

                            </div>
                       </div>
                       <div className="hedInformations">
                        <div className="informations">
                               <div className="plastik"> {encription} </div>
                                <h5 className="newsWord"> Automatically force websites to use encryption </h5>
                                <span className="plastikHide"> Make sure supported websites use encryption to secure your data. </span>

                            </div>
                       </div>
                    </div> 
              
            </div>
            <div className="mask"  style={{display: play ? "block" : "none"}}  onClick={() => setPlay(false)}>
                
            </div>

            <div className="popup"    style={{display: play ? "block" : "none"}} > 
                <iframe className="videpPopup" width="900" height="500" src="https://www.youtube.com/embed/tgbNymZ7vqY" >
               
               </iframe>
               <button className="cross" onClick={() => setPlay(false)}>
                   x
               </button>
            </div>

            {/* <div className="avastHover">
                <div className="avast">
                     <img className="avatsHoverImg" src="/img/product-.svg" />
                     <h6 className="avastHoverWord"> Avast Secure Browser</h6>    
                </div>
                <div className="buttonDownload">
                    <span className="DownloadHover"> DOWNLOAD NOW</span>
                </div>
            </div> */}
           
        </div>
    )
};

export default Security