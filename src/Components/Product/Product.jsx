import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../Shared/ProductsContext';

const Product = () => {
  let {id} = useParams();
  const { allProducts } = useContext(ProductsContext);
  const [singleProduct, setSingleProduct] = useState([null]);

  //Check if the product we need matches with the id in the url 
  useEffect(() => {
    allProducts.map((product)=> {
      if(id == product.id){
        //set that product that matches to our variable
        setSingleProduct(product);
      }
    })
  }, [id]);



  return (
    <div className='main-product'>
    <p>{singleProduct.title}</p>
    </div>
  )
}

export default Product
