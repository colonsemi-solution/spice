import React, { useEffect } from 'react'
import ProductDetails from '../component/ProductDetails'

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div>
      <ProductDetails/>
    </div>
  )
}

export default index
