import React from 'react';
import {useState} from "react";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Button from '../button/button.jsx';
import styles from "./contactForm.module.css";
import contactImage from "../../assets/Images/contact-image.svg";
export default function ContactForm(){

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[text,setText]=useState("");
    
    function onSubmit(e){
        e.preventDefault();
        setName(e.target[0].value);
        setEmail(e.target[1].value);
        setText(e.target[2].value);
    }
  return (
    <>
        <div className={styles.container}>
            <div className={styles.contact_form}>
                
                <div className={styles.top_btn}>
                <button style={{color:'white',backgroundColor:'black',borderRadius:"4px"}}>VIA SUPPORT CHAT {<MdMessage fontSize="24px" />}</button>
                <button style={{color:'white',backgroundColor:'black',borderRadius:"4px"}}>VIA CALL {<FaPhoneAlt fontSize="24px" />}</button>
                </div>
                <Button
                isOutline={true}
                text="VIA EMAIL FORM"
                icon={<HiMail fontSize="24px" />}/>
            
                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor="Name">Name</label>
                        <input type="text" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="E-mail">E-mail</label>    
                        <input type="email" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="TEXT">Text</label>
                        <textarea name="text" rows={8}></textarea>
                    </div>
                    <div
                        style={{
                        display: "flex",
                        justifyContent: "end",
                        }}>
                        <Button text="SUBMIT BUTTON" />
                    </div>

                    <div>{name + " " + email + " " + text}</div>
                    
                </form>                    
            </div>
            <div className={styles.contact_image}>
                <img src={contactImage} alt="contact_image" />
            </div>
        </div>    
        
    </>
  )
}

