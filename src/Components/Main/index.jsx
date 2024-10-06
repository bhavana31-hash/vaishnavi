import React, { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'


export default function Index() {
    let [isDistShow , setIsDistShow] =  useState(false)
    let [isContactShow , setIsContactShow] =  useState(false)


    let HandleClickDistribute = () =>{
        setIsDistShow(!isDistShow)
    }
    let HandleClickContact= () =>{
        console.log("hhhh");
        
        setIsContactShow(!isContactShow)
    }
    console.log(isContactShow);
    

  return (
    <div className="container">
  

        <div className="col">
            <a href="https://www.instagram.com/king.energydrink_morena/profilecard/?igsh=Y3Jvb2Q0OXJ0ZDJn" target='_blank' className="fb btnCls">
            <FontAwesomeIcon icon={faInstagram} />  Instagram
            </a>
            <a href="https://www.facebook.com/shubham.gour.986?mibextid=ZbWKwL" target='_blank' className="fb btnCls">
            <FontAwesomeIcon icon={faFacebook} />  Facebook
            </a>
            <a href="#" className="google btnCls" onClick={HandleClickDistribute}>Distributer</a>
            {
                isDistShow ?
                <div className="content">
                    <ul className='ulData'>
                        <li>Phone: +91-9111111519</li>
                        <li>Phone 2: +91-9302180687</li>

                    </ul>
                </div>
                : null
            }
            <a href="https://wa.me/9111111519" className="twitter btnCls">
            <FontAwesomeIcon icon={faWhatsapp} />   Whatsapp
            </a>
            <a href="#" className="google btnCls" onClick={HandleClickContact}>Contact</a>
            {
                isContactShow ?
                <div className="content">
                    <ul className='ulData'>
                        <li>Phone: +91-9111111519</li>
                        <li>Phone 2: +91-9302180687</li>
                        <a><li>https://vaishnavi.trading.vercel.com</li></a>

                    </ul>
                </div>
                : null
            }
            #
        </div>

     
    </div>
  )
}
