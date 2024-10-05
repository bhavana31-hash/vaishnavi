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
            <a href="#" className="fb btnCls">
            <FontAwesomeIcon icon={faInstagram} />  Instagram
            </a>
            <a href="#" className="fb btnCls">
            <FontAwesomeIcon icon={faFacebook} />  Facebook
            </a>
            <a href="#" className="google btnCls" onClick={HandleClickDistribute}>Distributer</a>
            {
                isDistShow ?
                <div className="content">
                    <ul className='ulData'>
                        <li>Work: 8340840334</li>
                        <li>Phone: 083409384</li>

                    </ul>
                </div>
                : null
            }
            <a href="#" className="twitter btnCls">
            <FontAwesomeIcon icon={faWhatsapp} />   Whatsapp
            </a>
            <a href="#" className="google btnCls" onClick={HandleClickContact}>Contact</a>
            {
                isContactShow ?
                <div className="content">
                    <ul className='ulData'>
                        <li>Work: 8340840334</li>
                        <li>Phone: 083409384</li>
                        <a><li>https://vaishnavi.trading.vercel.com</li></a>

                    </ul>
                </div>
                : null
            }
            
        </div>

     
    </div>
  )
}
