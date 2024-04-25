import React, { useEffect } from 'react'
import Caruosal from '../component/Carousal' 
import ProductCard from '../component/ProductCard'
import Whatsapp from '../component/Whatsapp'

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <Caruosal/>
      <ProductCard/>
      <Whatsapp/>
    </div>
  )
}

export default index
