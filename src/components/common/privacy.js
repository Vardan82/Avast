import "../../../src/Privacy.css"
import { plastik,  anti, encription} from "../../svg";


function Privacy(){
    return(
        <div className="headerPrivacy">
            <div className="privacy">
                <div className="privacyImg">
                    <img className="imgPrivacy" src ="./img/nkar.webp"/>
                </div>
                <div className="personalData">
                    <span className="privascy"> PRIVACY </span>
                    <h2 className="personalWord"> Keep your personal data personal </h2>
                    <span className="personalBiznes"> What you do online is your business, which is why we’ve included several layers of privacy protection to prevent online tracking and to mask your digital identity. </span>
                    <div className="learnMoreImg"> 
                            <span className="learnMore"> LEARN MORE  </span>
                            <span className="imgLernMore">  <span className="icon"> &#8594; </span></span>
                        </div>
                </div>
            </div>
            <div className="websitesDangerFooter">
                    <div className="websitesDanger">
                            <div className="hedInformations">
                                <div className="informations">
                                        <div className="plastik"> {plastik} </div>
                                        <h5 className="newsWord"> Block online tracking</h5>
                                        <span> Stay private online by preventing third parties from tracking you. </span>

                                    </div>
                            </div>
                            <div className="hedInformations">
                                <div className="informations">
                                        <div className="plastik"> {anti} </div>
                                        <h5 className="newsWord"> Mask your digital identity </h5>
                                        <span> Stop websites from identifying you based on your unique browser profile. </span>

                                    </div>
                            </div>
                            <div className="hedInformations">
                                <div className="informations">
                                    <div className="plastik"> {encription} </div>
                                        <h5 className="newsWord"> Control your login data </h5>
                                        <span> Monitor your email address to ensure your passwords haven’t leaked online. </span>

                                    </div>
                            </div>
                    </div>
                </div> 
              
    
        </div>
    )
}

export default Privacy