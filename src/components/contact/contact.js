import React, { useRef , useState, useContext} from 'react'
import './contact.css'
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Location from "../../img/location.png"
import emailjs from '@emailjs/browser';
import {ThemeContext} from '../../context'



const contact = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const formRef =  useRef()
    const [done, setDone] = useState(false)
    
    const handelSubmit = (e)=>{
        e.preventDefault()
        
        emailjs.sendForm('service_u6u5tld', 'template_op5dsjg', formRef.current, 'user_hINgegAG3KQH8xXBzSOcV')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
        
    }
    
    return (
        <div className="container-contact">
            <div className="contact-background"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Let's Take</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={Phone} alt="" className="contact-icon" />
                            +32495734433
                        </div>
                        <div className="contact-info-item">
                            <img src={Email} alt="" className="contact-icon" />
                            mcpottier@gmail.com
                        </div>
                        <div className="contact-info-item">
                            <img src={Location} alt="" className="contact-icon" />
                            Sq. de Noville 5, 1081 Bruxelles
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handelSubmit}>
                        <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor:darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor:darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thanks you ;) "}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default contact
