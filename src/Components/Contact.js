import '../styles/contact.css';
import {Link, withRouter} from 'react-router-dom';
import emailjs from 'emailjs-com';
import { useState } from 'react';

let Contact = () => {

    let [emailSent, setEmailSent] = useState(false);
    let [errors, setErrors] = useState([]);
    let inputs = {
        contact_name: 'Name',
        contact_email: 'Email',
        contact_message: 'Message'
    }

    function sendEmail(e) {
        e.preventDefault();
        let formChildren = e.target.children;
        let errors = [];

        for(let c = 0; c < formChildren.length; c++){
            if(formChildren[c].nodeName === 'INPUT' || formChildren[c].nodeName === 'TEXTAREA'){
                if(formChildren[c].value === ''){
                    let fieldToFix = inputs[`${formChildren[c].name}`];
                    errors.push(fieldToFix)
                }
            };

        }
        if(errors.length){
            setErrors(errors)
            return;
        } else {
            emailjs.sendForm('service_jlnu76i', 'template_48gvodo', e.target, 'user_6RA5vbYbl9GFT2at7eAZz')
            .then((result) => {
                setEmailSent(true);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };
        
    }

    return (
        <div className='contact'>
            <Link to='/' id='back'>Back</Link>

            {emailSent ? (
                <div>
                    Thank You! I got your email.
                </div>
            ) : (
                <form className="contact-form" onSubmit={sendEmail}>
                    <h2>Feel free to shoot me an email and I'll get back to you as soon as I can. Ask me for my resume, tell me a joke, or ask me a question.</h2>
                    <input placeholder='Name' name="contact_name"></input>
                    <input placeholder='Email' name="contact_email"></input>
                    <textarea placeholder='Type me a message...' name="contact_message"></textarea>
                    {errors.length ? (
                        <div>
                            <p>Please fill out all fields:</p>
                            <p>{errors.join(', ')}</p>
                        </div>
                    ) : (
                        null
                    )}
                    <button type="submit">Send Email</button>
                </form>
                )
            }
        </div>
    )
}

export default withRouter(Contact);