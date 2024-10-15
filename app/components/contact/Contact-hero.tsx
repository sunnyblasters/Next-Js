import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";








import './contact.css'


export default function ContactHero (){

    return (

        <div className='contact-main'>

                <h1>Get In Touch</h1>
                <p>We love to hear from you!</p>

                <div className="contact-wrapper">

                    <div className="contact-form">
                        <form action="" className='form1'>

                            <div className="input">
                                
                                <input type="text" id="fname" placeholder="Please Enter Your Full Name" name="FullName" required/>
                            </div>

                            {/* <div className="input">
                                
                                <input type="text" id="lname" placeholder="Please Enter Your Last Name" name="LastName" required/>
                            </div> */}

                            <div className="input">
                                
                                <input type="email" id="email" placeholder="Please Enter Your Email" name="EmailAddress" required/>
                            </div>

                            {/* <div className="input">
                               <input type="text" id="phoneNumber" placeholder="Please Enter Your PhoneNumber" name="PhoneNumber" required/>
                            </div> */}

                            <div className='input'>
                            <textarea id="message" rows={6} placeholder="message" name="message" required></textarea>
                            </div>

                            
                                <div className="btn-con">
                                <button className='contact-btn'>Submit</button>
                                </div>
                            


                        </form>
                    </div>

                    <div className="text-contact">

                        <div className='detail'>
                            <FaMapMarkerAlt className='icons'/>
                            <span>Karachi Pakistan</span>

                        </div>
                        <div className='detail'>
                            <FaPhoneVolume className='icons'/>
                            <span>+92 021 123 1123</span>
                        </div>

                        <div className='detail'>
                            <MdMarkEmailRead className='icons'/>
                            <span>srasheed@none.com</span>
                        </div>    
                            
                            <hr />

                        <div className="social">
                                <FaFacebook className='icons'/>
                                <AiFillTwitterCircle className='icons'/>
                                <AiFillInstagram className='icons'/>
                                <FaLinkedin className='icons'/>
                    
                        </div>
                            
                            <hr />
                    
                        

                        <div className='copyright'>
                            <h1>&#169; All rights reserved </h1>
                        </div>
                    </div>

                </div>

        </div>


    )
}