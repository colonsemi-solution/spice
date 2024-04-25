import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Home = () => {
    return (
        <div>
            <OwlCarousel className='owl-theme' loop={true} lazyLoad={true} items={1}>
                <section className="main-slider">
                    <div className="item image">
                        <div className="slide-image slide-media">
                            <div className='slider-main'>
                                <img src='https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="image-entity" />
                                <div className="slider-item">
                                    <div className='slider-content'>
                                        <h2>Kurvin Global Export</h2>
                                        <p>We pride ourselves on sourcing only the highest quality spices directly from reputable growers and producers worldwide.
</p>
                                        <a href="#" className="slider-btn">see more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="main-slider">
                    <div className="item image">
                        <div className="slide-image slide-media">
                            <div className='slider-main'>
                                <img src='https://images.unsplash.com/photo-1606914469725-e398d2f1d7ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="image-entity" />
                                <div className="slider-item">
                                    <div className='slider-content'>
                                        <h2>Quality</h2>
                                        <p>We understand the importance of maintaining the quality and freshness of our spices during long-distance transport. Kurvin Global Exports invests in robust and quality packaging to ensure that our premium spices reach you in the same exceptional condition in which they left our facilities.</p>
                                        <a href="#" className="slider-btn">see more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="main-slider">
                    <div className="item image">
                        <div className="slide-image slide-media">
                            <div className='slider-main'>
                                <img src='https://images.unsplash.com/photo-1631515242808-497c3fbd3972?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="image-entity" />
                                <div className="slider-item">
                                    <div className='slider-content'>
                                        <h2>Shipping</h2>
                                        <p>Our commitment to timely deliveries means you can rely on us to fulfill your orders promptly and efficiently.</p>
                                        <a href="#" className="slider-btn">see more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </OwlCarousel>
        </div>
    )
}

export default Home
