import Header from "../components/Header"
import Footer from "../components/Footer"
import './Contact.css'
import { useState } from 'react'

const Contact = () => {

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    const [result, setResult] = useState("Send");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "d40d3035-f2f4-4265-bcc7-bd0333955af0");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();
        
        if (data.success) {
            event.target.reset();
            setResult("Success!");
            await delay(3000);
            setResult("Send");
        } else {
            setResult("Error");
        }

  };
    return (
        <>
        <Header />
        <div className="bg-bright-blue white-text py-4">
            <div className="max-width mx-auto flex-column lg-nav-flex-row p-2 align-center space-between">
                <div className="center-text lg-nav-left-text">
                    <h1>Contact Us</h1>
                    <p className="mt-1">Questions, comments, or compliments? We're here to help!</p>
                    <div className="mt-3">
                        <div className="flex wrap gap-2">
                            <div className="flex gap-1 align-center">
                                <img className="contact-icon" src="/icons/phone-green-circle.svg"/>
                                <p>(909)-444-1871</p>
                            </div>
                            <div className="flex gap-1 align-center">
                                <img className="contact-icon" src="/icons/email-green-circle.svg"/>
                                <p>totallearningeducation@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex gap-1 mt-2 align-center">
                            <img className="contact-icon" src="/icons/location-green-circle.svg"/>
                            <p>2157 S Brea Canyon Rd, Diamond Bar, CA 91765</p>
                        </div>
                    </div>
                    <div className="mt-3">
                        <p className="left-text">Follow our socials!</p>
                        <div className="flex gap-1 mt-1 align-center">
                           <img className="contact-icon" src="/icons/instagram-blue-circle.svg"/>
                            <p>totallearning.education</p>
                        </div>
                    </div>
                </div>
                <div className="px-2 relative mt-4 lg-nav-mt-0 lg-nav-w-50p">
                    <img className="bean-sprout" src="/icons/bean-sprout.svg"/>
                    <div className="bg-cream border-radius-2 py-3 px-2 black-text light-text relative">
                        <form onSubmit={onSubmit}>
                            <div className="flex gap-2">
                                <div className="flex-column w-full">
                                    <label>First Name: </label>
                                    <input 
                                        className="form-field"
                                        type="text" 
                                        placeholder="Enter your first name..." 
                                        name='firstName' 
                                        required />
                                </div>
                                <div className="flex-column w-full">
                                    <label>Last Name: </label>
                                    <input className="form-field" type="text" placeholder="Enter your last name..." name="lastName" required />
                                </div>
                            </div>
                            <div className="flex-column mt-2">
                                <label>Email: </label>
                                <input className="form-field" type="text" placeholder="Enter your email address..." name='email' required />
                            </div>
                            <div className="flex-column mt-2">
                                <label>Message: </label>
                                <textarea className="form-field" rows={4} type="text" placeholder="Enter your message..." name="message" required />
                            </div>
                            <div className="flex-row-reverse">
                                <button className="mt-2 button bg-dark-green white-text" type="submit">{result}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Contact