import React, { useEffect, useState } from 'react';
import './gallery.scss';

const Gallery = ({products, setNumLimit, numLimit}) => {

  const [btnClass, setBtnClass] = useState('gallery-btn')

  const showMore = () => {
    if(numLimit <= 16){
      setNumLimit(numLimit + 4);
    } 
  }

  useEffect(()=>{
    if(numLimit === 20){
      setBtnClass('gallery-btn hidden')
    }
  }, [numLimit]);
  

  return (
    <div className='gallery'>
      {products.map((product, index)=> {
        return (
          <div className='gallery-product' key={index}>
            <div className='gallery-product_img'>
              <img src={product.image} alt={product.title} />
            </div>
            <h3 className='gallery-product_title'>{product.title}</h3>
            <p className='gallery-product_price'>€ {product.price}</p>
            <button className='gallery-product_btn'> Add </button>
          </div>
        )
      })}
      <button onClick={showMore} className={btnClass}> Show more </button>
    </div>
  )
}

export default Gallery
