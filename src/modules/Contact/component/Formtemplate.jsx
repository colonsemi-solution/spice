import React, { useEffect } from 'react'

const Formtemplate = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
    return (
        <div>
            <div className="row col-sm-1 w-100 mt-3">
                <div className="col-md-6">
                <iframe className='w-100 h-100 contact-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.862396459453!2d72.8348893!3d21.197624599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0051ca3aa1%3A0xf89cf71224772c1!2sDwarkesh%20Villa!5e0!3m2!1sen!2sin!4v1710781472724!5m2!1sen!2sin" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                    <div className="contact-form">
                        <form action="" id="contact-form">
                            <h2>Send Message</h2>
                            <div className="input-box">
                                <input type="text" required="true" name="" placeholder="Full Name" />

                            </div>

                            <div className="input-box">
                                <input type="email" required="true" name="" placeholder="Email" />
                            </div>

                            <div className="input-box">
                                <textarea required="true" name="" placeholder="Type your Message..."></textarea>
                            </div>

                            <div className="input-box">
                                <input type="submit" value="Send" name="" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formtemplate
