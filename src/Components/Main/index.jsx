import React, { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown } from '@fortawesome/free-solid-svg-icons/faCrown'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
export default function Index() {
    let [isDistShow , setIsDistShow] =  useState(false)
    let [isContactShow , setIsContactShow] =  useState(false)


    let HandleClickDistribute = () =>{
        setIsDistShow(!isDistShow)
    }
    let HandleClickContact= () =>{
        setIsContactShow(!isContactShow)
    }

  return (
    <div className='legend'>
        <div className='items'>
            <h2 style={{color:'#8e5e0e',textDecoration:'underline',marginLeft:'50px'}}>Vashnavi Trading Company</h2>
            <button><a href='https://www.instagram.com/accounts/login/' target='_blank'> Instagram</a> </button>
            <button ><a href='https://www.facebook.com/people/Kingenergydrink/100092728865950/' target='_blank'>Facebook</a></button>
            
            <div className='toggle'>
            <button>For Distribution <span onClick={HandleClickDistribute}><FontAwesomeIcon icon={faChevronDown} /></span></button>
                {
                    isDistShow ? <ul className='ulData'>
                    <li>Work: 8340840334</li>
                    <li>Phone: 083409384</li>
                    <a><li>https://vaishnavi.trading.vercel.com</li></a>

                </ul> : null
                }
                
            </div>
            <button><a href="https://wa.me/7869546499" target='_blank'>Whatsapp</a> </button>
            <div>
            <button>Contact <span onClick={HandleClickContact}><FontAwesomeIcon icon={faChevronDown} /></span></button>
                {
                    isContactShow ? <ul className='ulData'>
                    <li>Work: 8340840334</li>
                    <li>Phone: 083409384</li>
                    <a><li>https://vaishnavi.trading.vercel.com</li></a>

                </ul> : null
                }
            </div>
            
            
        </div>
    </div>
  )
}
