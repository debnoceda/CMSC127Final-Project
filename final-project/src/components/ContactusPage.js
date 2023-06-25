import React, {useState} from 'react';
import Axios from 'axios';
import '../styles/ContactusPage.css';


function ContactusPage() {
    const [contactUsName, setcontactUsName] = useState("");
    const [contactUsEmail, setcontactUsEmail] = useState("");
    const [contactUsMessage, setcontactUsMessage] = useState("");
    const [contactUsStatus, setcontactUsStatus] = useState ('');
    const [error, seterrorMessage] = useState('');

    const contactus = () => {
        Axios.post("http://localhost:3001/contact-us", {
            name: contactUsName,
            emailAdd: contactUsEmail,
            message: contactUsMessage
        }).then((response) => {
            if(response.data.success){
                setcontactUsStatus('Message sent');
                setcontactUsName('');
                setcontactUsEmail('');
                setcontactUsMessage('');
            }
            else{
               seterrorMessage('Unable to send a message. Please try again');
            }
        })
        .catch((error) => {
            seterrorMessage ('Maximum number of characters reached. Please try again');
            setcontactUsStatus('');
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!contactUsName || !contactUsEmail || !contactUsMessage) {
          seterrorMessage('Please fill in all fields');
        } else {
          seterrorMessage('');
          setcontactUsStatus('');
          contactus();
        }
      };

  return (
    <div className='contactUs-container'>
        <div className='contactUs'>CONTACT US</div>
        <div className='get-in-touch'>Get in Touch</div>
        <form className='contactUs-form' onSubmit = {handleSubmit}>
            <input 
                value={contactUsName}
                onChange = {(e) => setcontactUsName(e.target.value)}
                type='text'
                className='contactUs-name' 
                placeholder='Name'
            ></input>
            <input 
                value={contactUsEmail}
                onChange = {(e) => setcontactUsEmail(e.target.value)}
                type='text'
                className='contactUs-email' 
                placeholder='Email'
            ></input>
            <input
                value={contactUsMessage}
                onChange = {(e) => setcontactUsMessage(e.target.value)}
                type='text'
                className='contactUs-message' 
                placeholder='Message'
            ></input>
            <div className='latolato-email'>Email: latolatodeluxe@gmail.com</div>
            <div className='latolato-phoneNum'>Phone: +69 252315768</div>
            <div className='latolato-message'>Get in touch with us through our contact form and let us know how we can help you.
            We look forward to hearing from you!</div>
            <button className="send-button" type="submit">
            SEND
            </button>
            <p className="contactUs-error">{error}</p>
            <p className="contactUs-success">{contactUsStatus}</p>
        </form>
        <div className='latolato-logo'></div>
        <div className='contactUs-icons'></div>
    </div>
  );
}

export default ContactusPage