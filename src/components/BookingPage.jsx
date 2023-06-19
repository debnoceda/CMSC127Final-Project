import React from 'react'
import "../styles/BookingPage.css"

const BookingPage = () => {
    return (
        <body>
            <div className='booking-page'>
                <h1 className="booking-form">BOOKING FORM</h1>
                <h2 className ="personal-details"> PERSONAL DETAILS</h2>
                <form>
                    <p className='previous-customer'>Are you a previous customer? (required)</p>
                    <div className="customer-check">
                        <input type="radio" id="yes" name="agreement" value="yes" />
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" id="no" name="agreement" value="no" />
                        <label htmlFor="no">No</label>
                    </div>
                </form>
                <p className ="firstname">FIRST NAME (required)</p>
                <input type="text" className="firstname-box"/>

                <p className ="lastname">LAST NAME (required)</p>
                <input type="text" className="lastname-box"/>

                <p className ="email">EMAIL (required)</p>
                <input type="text" className="email-box"/>

                <p className ="confirmedemail">CONFIRMED EMAIL (required)</p>
                <input type="text" className="confirmedemail-box"/>

                <p className ="contact">CONTACT NUMBER (required)</p>
                <input type="text" className="contact-box"/>

                <p className ="age">AGE (required)</p>
                <input type="text" className="age-box"/>

                <p className ="address">Address (required)</p>
                <input type="text" className="address-box"/>

                <form>
                    <p className='location-service'>LOCATION OF SERVICE</p>
                    <div className="location-check">
                        <input type="radio" id="clinic" name="agreement" value="clinic" />
                        <label htmlFor="clinic">CLINIC</label>
                        
                        <input type="radio" id="home" name="agreement" value="home" />
                        <label htmlFor="home">HOME SERVICE</label>
                    </div>
                </form>

                <form>
                    <p className='clinical-services'>CLINICAL SERVICES</p>
                    <div className ="services">
                        <input type="checkbox" id="service1" name="services" value="service1" />
                        <label htmlFor="service1">KOREAN SNOW DRIP (GLUTATHIONE)</label>
                        <p className='service1-price'>1200</p>
                        
                        <input type="checkbox" id="service2" name="services" value="service2" />
                        <label htmlFor="service2">MEGA WHITENING CINDERELLA DRIP</label>
                        <p className='service2-price'>1200</p>
                        
                        <input type="checkbox" id="service3" name="services" value="service3" />
                        <label htmlFor="service3">MESO LIPO (ARMS, LEGS, STOMACH)</label>
                        <p className='service3-price'>1200</p>

                        <input type="checkbox" id="service4" name="services" value="service4" />
                        <label htmlFor="service4">MESO LIPO (FACE V-SHAPE)</label>
                        <p className='service4-price'>1200</p>

                        <input type="checkbox" id="service5" name="services" value="service5" />
                        <label htmlFor="service5">EYEBAG REMOVAL</label>
                        <p className='service5-price'>1200</p>

                        <input type="checkbox" id="service6" name="services" value="service6" />
                        <label htmlFor="service6">ELIXIR WHOLE BODY SCULPTING</label>
                        <p className='service6-price'>1200</p>

                        <input type="checkbox" id="service7" name="services" value="service7" />
                        <label htmlFor="service7">UNDERARM WHITENING</label>
                        <p className='service7-price'>1200</p>

                        <input type="checkbox" id="service8" name="services" value="service8" />
                        <label htmlFor="service8">STEM CELL DRIP </label>
                        <p className='service8-price'>1200</p>

                        <input type="checkbox" id="service9" name="services" value="service9" />
                        <label htmlFor="service9">4D BODY CONTOUR</label>
                        <p className='service9-price'>1200</p>

                        <input type="checkbox" id="service10" name="services" value="service10" />
                        <label htmlFor="service10">ELIXIR FACIAL (BASIC,ACNE,3D)</label>
                        <p className='service10-price'>1200</p>

                        <input type="checkbox" id="service11" name="services" value="service11" />
                        <label htmlFor="service11">KOREAN GLASS SKIN FACIAL</label>
                        <p className='service11-price'>1200</p>

                        <input type="checkbox" id="service12" name="services" value="service12" />
                        <label htmlFor="service12">MICRONEEDLING</label>
                        <p className='service12-price'>1200</p>
                    </div>
                </form>

            </div>
        </body>
        
    )
}

export default BookingPage

