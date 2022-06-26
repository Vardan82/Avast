import {ImStarFull} from 'react-icons/im';


function Brauzer(){
    return(
        <div className="brauzer">
               <div className="img_Blue">
                 <div className="nav_Blue">
                        <div className="row_Blue">
                            <div className="body_Blue">
                                <h2 className="body_Blue_word">Sync your browser data across all your devices </h2>
                                <span className="media_text_blue"> You can sync your history and bookmarks between your desktop and mobile devices, all while fully encrypted.</span>
                            <div className="learn_blue"> 
                                <span className="learn_blue"> LEARN MORE  </span>
                                <span className="img_blue">&#8594;</span>
                            </div>
                            </div>
                        </div>
                            <div className="phone_Blue">
                                <img className="phone_Img-Blue" src="./img/secure.webp"/>
                            </div> 
                     </div>
               </div>
               <div className="built">
                   <div className="text_center">
                       <h2 className="head_Text_Built"> Built by security experts with you in mind </h2>
                       <p className="body_Text_Built"> But just don’t take our word for it. </p>
                   </div>
                   <div className="text_Futer_Built">
                       <div className="card_medium">
                           <div className="next_large">
                               <div className="text_icon"> <ImStarFull/> <ImStarFull/></div>
                               <p className="text"> This app is awesome. I love this app because it prevents any ads from popping up related to what you have recently searched. </p>
                           </div>
                           <div className="tyler_star">
                               <h6 className="tyler"> Tyler P. </h6>
                               <div className="stars"> <span> <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarFull/> </span> </div>
                           </div>

                       </div>
                       <div className="card_medium">
                           <div className="next_large">
                               <div className="text_icon"> <ImStarFull/> <ImStarFull/></div>
                               <p className="text_length"> I have tried many different browsers while always looking for the ones with built-in security features. The Avast Secure Browser is the best browser by far in comparison to the many browsers I have used before it. </p>
                           </div>
                           <div className="tyler_star_length">
                               <h6 className="tyler"> Mandi R. </h6>
                               <div className="stars"> <span> <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarFull/> </span> </div> 
                           </div>

                       </div>
                       <div className="card_medium">
                           <div className="next_large">
                               <div className="text_icon"> <ImStarFull/> <ImStarFull/></div>
                               <p className="text"> Fast, secure and easy. A must have on your Android or PC for a clean and safe browsing experience. </p>
                           </div>
                           <div className="tyler_star">
                               <h6 className="tyler"> Pritesh </h6>
                               <div className="stars"> <span> <ImStarFull /> <ImStarFull/> <ImStarFull/> <ImStarFull/> <ImStarFull/> </span> </div>
                           </div>

                       </div>

                   </div>

               </div>
        </div>
    )
}


export default Brauzer