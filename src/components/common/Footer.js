import { useState } from "react"


function Footer(){
 const [footer, setFooter] = useState([
     {
         title: "For home",
         Suuport: "Suuport",
         Security: "Security",
         Privacy: "Privacy",
         Performance: "Performance",
         Blog: "Blog",
         Forum: "Forum",

     },
     {
         title: "For business",
         Suuport: "Business support",
         Security: "Business products",
         Privacy: "Business partners",
         Performance: "Business blog",
         Blog: "Affiliates",
     },

     {  title: "For partners",
        Suuport: "Mobile Carriers",

     }, 

     {
         title: "Company",
         Suuport: "Contact Us",
         Security: "INverstors",
         Privacy: "Careers",
         Performance: "Press Center",
         Blog: "Diversity Inclusion",
         Forum: "Digital trust",
         Technology: "Technology",
         description: "Reserch Participation",
     }
 ])

    return(
        <div className="fotter_nav">
            <div className="body_footer">
                <div className="avast_footer">
                    <div className="avast_footer_text">
                            <img src="/img/main-logo.svg" className="img_footer" />
                            <p className="flag">
                                <a href="" className="body_flag">
                                    <img src="./img/imagesUSA.png" className="fla_united_states"/>
                                    <span className="text_united_states"> United States(English) </span>
                                    <img className="arrow_flag" src="/img/arrow-down.png" />
                                </a>
                            </p>
                            <div className="footer_icon">
                                    <span className="icon_footer"> f </span>
                                    <span className="icon_footer"> <img src="./img/instagram.png"/> </span>
                                    <span className="icon_footer"> <img src="./img/twitter.jpg"/></span>
                                    <span className="icon_footer"> <img src="./img/YouTube.png"/></span>
                                </div>
                    </div>
                {
                                footer?.map((el, i) => {
            
                                    return (
                                    
                                <div  className="text_for_menu_footer">
                                    <p> {el.title} </p>
                                    <a href=""> <li> {el.Suuport} </li></a>
                                    <a href=""> <li> {el.Security} </li></a>
                                    <a href=""> <li> {el.Privacy} </li></a>
                                    <a href=""> <li> {el.Blog} </li></a>
                                    <a href=""> <li> {el.Forum} </li></a>
                                    <a href=""> <li> {el.Technology} </li></a>
                                    <a href=""> <li> {el.description} </li></a>
                                   
                                </div>
                        )
                    })
                }
    
    
                    

                </div>
                               
                <div className="liner_footer"></div>
                <div className="footer_fotter">
                    <div className="footer_copiright_avast">
                        <p className="footer_copiright_avast_text"> 1988-2022 Copyright Avast Software s.r.o. </p>
                    </div>
                    <div className="footer_navigation">
                        <a href="" className="privacy_policy"> Privacy policy  </a>
                        <a href="" className="privacy_policy "> <a className="tochka"> . </a> Legal </a>
                        <a href="" className="privacy_policy"> <a className="tochka"> . </a> Report vulnerability </a>
                        <a href="" className="privacy_policy"> <a className="tochka"> . </a> Contact security </a>
                        <a href="" className="privacy_policy"> <a className="tochka"> . </a> Modern Slavery Statement </a>
                        <a href="" className="privacy_policy"> <a className="tochka"> . </a> Do not sell my info </a>
                        <a href="" className="privacy_policy"> <a className="tochka"> . </a> Subscription details </a>
                        <a href="" className="privacy_policy"> <a className="tochka"> . </a> Cookie Preferences </a>
                        
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default Footer