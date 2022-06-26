import { komp, close, hend, card } from "./svg";
import { useEffect, useRef, useState } from "react";

import "./main.css";



function Main(){

   

    return(
        <div className="main">
           <div className="mainSecure">
                    <img  className="blueImg" src="./img/images color.jpeg"/>
                        <div className="secureHider">
                                <div className="secure">
                                    <div className="logo"  > 
                                            <div className="logoDiv"> <img className="logoImg" src="./img/img.jpeg"/> </div>
                                            <span className="avastSecureBrowser"> AVAST SECURE BROWSER </span>
                                    </div>
                                    <span className="securePrivate"> Secure, private and easy to use. </span>
                                    
                                            <div className="downloadDiv">
                                                    <div className="var">
                                                        <a href="" className="downloadHider">
                                                            <img className="imgDownlod" src="./img/787277.png"/>
                                                            <span className="downlodNow"> DOWNLOAD NOW</span>                  
                                                        </a>
                                                    </div>
                                                    <span className="alsoAvailabel">
                                                    Also available for
                                                        <a className="mac" href=""> Mac</a>,
                                                        <a className="android" href=""> Android</a> and
                                                        <a className="os" href=""> OS</a>
                                                    </span>
                                            </div>  
                                    
                                </div>
                            <div children="phone">
                                <img className="phoneImg" src="./img/secure.webp"/>
                            </div> 
                    </div>
           </div>
           <div className="selection_img">
               <div className="iconsWord">
                    <div className="icons">  {komp} </div>
                    <div className="word"> <span> MADE BY SECURITY EXPERTS </span></div>
               </div>
               <div className="iconsWord">
                    <div className="icons">  {close} </div>
                    <div className="word"> <span> WITH YOUR PRIVACY IN MIND </span></div>
               </div>
               <div className="iconsWord">
                    <div className="icons">  {hend} </div>
                    <div className="word"> <span> EASY TO USE AND EASY TO SWITCH TO </span></div>
               </div>

               <div className="iconsWord">
                    <div className="icons" >  {card} </div>
                    <div className="word"> <span> FAST AS EVERY BROWSER SHOULD BE </span></div>
               </div>
              
            </div>
          

        </div>
    )
}

export default Main