import React, { useEffect, useState } from 'react'
import SingleProduct from '../Banner/SingleProduct';
import './HotDeal.css'

const HotDeal = () => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("fakeApi.json")
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(6,11)));
  }, []);
  return (
    <div className='container'>
        <div className='hot-text'>
            <p>Today’s hot deals</p>
        </div>
        <div className='hot-deals-product'>
            {
                products.map(product => <SingleProduct key={product._id} product={product}></SingleProduct>)
            }
        </div>
    </div>
  )
}

export default HotDeal;