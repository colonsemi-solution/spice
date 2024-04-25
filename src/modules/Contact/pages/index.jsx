import React from 'react'
import Formtemplate from '../component/Formtemplate'

const index = () => {
    return (
        <div>
            <div className="row w-100 contact-container">
                <div className="contact-banner">
                    <div className="section-header">
                        <div className="container">
                            <h2>Contact Us</h2>
                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <Formtemplate/>
        </div>
    )
}

export default index
