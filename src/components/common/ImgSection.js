import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import React, { Children, useState } from "react"


function ImgSection(){
    const [activeIndex, setActiveIndex] = useState(0);
    const [data, SetData] = useState(
        [
            {
                title: "What does your IP address reveal about you?",
                description: "Your IP address can be used to pin down the address of where your computer accessed the internet.",
                img: './img/one.jpg'
            },
            
            {
                title: "What is end-to-end encryption",
                description: "Encryption is “the process of converting information or data into a code, especially to prevent unauthorized access”.",
                img: "./img/two.webp"
            },

            {
                title: "Common internet scams and how to protect yourself",
                description: "Online scams have been around for as long as the internet is here. They’ve changed, mutated, and adapted over the years. Make sure you don't fall for one",
                img: "./img/tree.jpg",
                        
            },

            {
                title: "How your location is being tracked — and what to do about it",
                description: "A rundown of some of the most common ways how your location is being tracked.",
                img: "./img/foree.jpg",
            },

            {
                title: "App permissions and how to protect yourself",
                description: "Find out which app permissions are necessary, which are sketchy, and how to protect yourself.",
                img: "./img/five.png",
            },

            {
                title: "Why you should use a password manager",
                description: "Password managers act as a secure vault for all of your login information",
                img: "./img/six.webp",
            },

            {
                title: "Avast Secure Browser scores top position in Anti-Phishing Protection Test by AV-Comparatives",
                description: "Protect yourself online and make sure you block malicious websites and downloads that prevent your computer from becoming infected with ransomware.",
                img: "./img/sevn.jpg",
            },

            {
                title: "Protect yourself and your cash by using Bank Mode",
                description: "Online banking is safe again when you use Bank Mode in Avast Secure Browser.",
                img: "./img/eit.png",
            }

        ]   
    )

   

    const incrementIndex = () => {
        if(activeIndex < data.length - 1) {
            setActiveIndex(activeIndex+1)
        }else{
            setActiveIndex(activeIndex-0)
        }
    }

    const decrementIndex = () => {
        if(activeIndex >0){
            setActiveIndex(activeIndex-1)
            // e.target.style.backgroundColor="#0070F6";
            // e.target.style.color="white";
            // document.querySelector("left").style.backgroundColor="white";
            // document.querySelector("left").style.color="#0070F6";
        }else{
            setActiveIndex(false)
            
            
        }
    }

    return(

       <div className="header_selection">
            <div className="selection" >

            <div className="selection_body" >
                <div className="left_hover"></div>
                <div className="selection_pody_second"   style={{transform: `translateX(-${activeIndex < data.length-3 && activeIndex *352}px)`,}}>
               
                
                {
                    data?.map((el, i) => {
                            
                        return(
                            <div className="nav_img_section" style={{ backgroundColor: activeIndex == i ?  'rgb(247, 245, 245)' : ''}}>
                                

                                <div className="img_left_hover">   <img className="imgs"  src={el.img} /> </div>
                
                                        
                                <div className="card_body">
                                    <span className="header_img"> {el.title} </span>
                                            <p className="text_img">{el.description} </p>
                                    </div>
                        
                                 <div className="img_icon_head"> <span className="laern_img"> LEARN MORE </span>  <span className="icon_img"> &#8594; </span></div>
                        
                                   
                            </div>
                        )
                    })
            }
           
                </div>
                
               
                 <div className="left_rigt_icon">
                    <button className={"left_icon"}  style={{  backgroundColor: activeIndex ==0 ?  '#8abefd' : ''}}   onClick={decrementIndex}> <BsChevronLeft className='left'/> </button>
                    <button className="right_icon" style={{  backgroundColor: activeIndex < data.length-1 ?  '#0070F6' : '#8abefd'}}  onClick={incrementIndex}> <BsChevronRight className='right'/> </button>
                </div>
                
                <div className="right_hover"></div>
            </div>
         
        </div>
                <div className="scrol">
                    <button className="scrol_left" style={{backgroundColor: activeIndex ===data.length-1? "#0070F666":"#0070F6", width: activeIndex ===data.length-1? "7px":"9px", height: activeIndex ===data.length-1? "7px":"9px"}}></button> 
                    <button className="scrol_right" style={{backgroundColor: activeIndex < data.length-1? "#0070F666":"#0070F6", width: activeIndex < data.length-1? "7px":"9px", height: activeIndex < data.length-1? "7px":"9px"}}></button>
                </div>

               
       </div>

     


       
    )
}

export default ImgSection