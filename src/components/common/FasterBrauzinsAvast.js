import { product } from "../../svg"
import { AiFillWindows } from 'react-icons/ai';
import { IoIosAppstore, IoIosCube } from 'react-icons/io';
import { SiIos } from 'react-icons/si';

function FasterBrauzinsAvast(){
    return(
        <div className="faster_Brauzins_Avast_nav">
             <div className="main_Secure_faster_brauzing">
                 
                        <div className="secure_Hider_brauzing">
                                
                                    <div className="logo-brauzing"  > 
                                            <div className="logoDiv"> <img className="logoImg" src="./img/img.jpeg"/> </div>
                                            <span className="avast_Secure_Brayuzing"> SECURE BROWSER </span>
                                    </div>
                                   
                                           <span className="text_browsong"> Get safer, faster browsing today  </span>                                     
                                            <div className="download_Div_brauzing">
                                                    <div className="donwn_load">
                                                        <a href="" className="download_Hider_brauzing">
                                                            <img className="img_Downlod_brauzing" src="./img/787277.png"/>
                                                            <span className="downlod_Now_brauzing"> DOWNLOAD NOW</span>                  
                                                        </a>
                                                    </div>
                                            </div>  
                                                    <span className="also_Availabel_brauzing">
                                                    Also available for
                                                        <a className="mac_brauzing" href=""> Mac</a>,
                                                        <a className="android_brauzing" href=""> Android</a> and
                                                        <a className="os_brauzing" href=""> OS</a>
                                                    </span>
                                    
                               
                           
                    </div>
           </div>
           <div className="avast_intereest">
                   <h2 className="interest_heder_text"> You might be also interested in </h2>
               <div className="interest_heder">
                   <div className="informations_intereest">
                       <div className="avast_branch-antitrack">
                          <div className="productImg"> {product} </div>
                           <a href="" className="avast_securLine_breach_guard_anti_tac-text">  Avast SecureLine VPN </a>
                           <div className="hoverIcons">
                                    <div className="div_img"> <AiFillWindows /> </div>
                                    <div className="div_img"> <IoIosAppstore /> </div>
                                    <div className="div_img"> <IoIosCube /> </div>
                                    <div className="div_img"> <SiIos /> </div>
                                </div>
                           <span className="enjoyin_online-text">  Enjoy true online privacy — encrypt your connection with the click of a button. </span>
                           <div className="learn_blue_fotter"> 
                                <span className="learn_blue_fotter"> LEARN MORE  </span>
                                <span className="img_blue_fotter">&#8594;</span>
                            </div>
                       </div>
                   </div>
                   <div className="informations_intereest">
                       <div className="avast_branch-antitrack">
                          <div className="productImg"> {product} </div>
                           <a href="" className="avast_securLine_breach_guard_anti_tac-text">  Avast BreachGuard </a>
                           <div className="hoverIcons">
                                    <div className="div_img"> <AiFillWindows /> </div>
                                    <div className="div_img"> <IoIosAppstore /> </div>
                                   
                                </div>
                           <span className="enjoyin_online-text">  Get protection against identity theft, and keep your sensitive online info safe from data breaches. </span>
                           <div className="learn_blue_fotter"> 
                                <span className="learn_blue_fotter"> LEARN MORE  </span>
                                <span className="img_blue_fotter">&#8594;</span>
                            </div>
                       </div>
                   </div>
                   <div className="informations_intereest">
                       <div className="avast_branch-antitrack">
                          <div className="productImg"> {product} </div>
                           <a href="" className="avast_securLine_breach_guard_anti_tac-text">  Avast AntiTrack </a>
                           <div className="hoverIcons">
                                    <div className="div_img"> <AiFillWindows /> </div>
                                    <div className="div_img"> <IoIosAppstore /> </div>
                                   
                                </div>
                           <span className="enjoyin_online-text">  Get even more privacy by disguising your online identity and blocking invasive tracking cookies. </span>
                           <div className="learn_blue_fotter"> 
                                <span className="learn_blue_fotter"> LEARN MORE  </span>
                                <span className="img_blue_fotter">&#8594;</span>
                            </div>
                       </div>
                   </div>
               </div>

           </div>

        </div>
    )
}

export default FasterBrauzinsAvast