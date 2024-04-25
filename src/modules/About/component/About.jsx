import React, { useEffect } from 'react'

const About = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <div className="about-banner">
        <div className="section-header">
          <div className="container about-container">
            <h2>Our Story</h2>
            <p>At <span style={{ color: '#ff7720' }}>KURVIN GLOBAL EXPORTS</span>, we're passionate about bringing the vibrant world of spices to your kitchen. We believe that high-quality spices have the power to transform ordinary dishes into culinary masterpieces, and we're dedicated to providing you with the finest ingredients to elevate your cooking experience.</p>
          </div>
        </div>
      </div>
      <div className="row w-100 mt-5">
        <div className="col-md-6">
          <div className="about-image text-center">
            <img src="https://img1.wsimg.com/isteam/stock/ArKBBoB" alt="" className=''/>
          </div>
        </div>
        <div className="col-md-6 d-grid align-content-center">
          <div className="about-details text-center d-grid">
            <span className='about-details-title'>Our Mission</span>
            <span className='about-details-desc'>At Kurvin Global Export, we strive to provide high-quality and sustainable agricultural products to our customers. We believe in ethical and responsible farming practises that benefit both the environment and the community.</span>
          </div>
        </div>
      </div>
      <div className="row w-100 mt-5">
        
        <div className="col-md-6 d-grid align-content-center">
          <div className="about-details text-center d-grid">
            <span className='about-details-title'>Our History</span>
            <span className='about-details-desc'>Founded in 2019, Kurvin Global Export has been dedicated to improving the agriculture industry through innovation and technology. Over the years, we have expanded our operations and developed new products to meet the changing needs of our customers.</span>
          </div>
        </div>
        <div className="col-md-6">
          <div className="about-image text-center">
            <img src="https://img1.wsimg.com/isteam/stock/103678/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:1200,h:600,cg:true" alt="" className=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
