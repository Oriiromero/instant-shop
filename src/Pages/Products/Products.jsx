import React, { useEffect, useState } from 'react';
import './products.scss'
import Gallery from '../../Components/Gallery/Gallery'
import axios from 'axios';

const Products = () => {
  const [numLimit, setNumLimit] = useState(8);
  const [url, setUrl] = useState('https://fakestoreapi.com/products?limit=');
  const categories = ["https://fakestoreapi.com/products/category/women's%20clothing", "https://fakestoreapi.com/products/category/men's%20clothing", "https://fakestoreapi.com/products/category/jewelery", "https://fakestoreapi.com/products/category/electronics"];
  const [products, setProducts] = useState([]);


  useEffect(()=> {
    axios.get(url + numLimit).then(res => {
      if(res.status === 200) {
         setProducts(res.data);
      }
    });
  }, [url, numLimit]);

  return (
    <div className='main-products'>
      <div className='main-products_search'>
        <p> Filters </p>
        <input type='text' placeholder='Search..'/>
      </div>
      <div className='main-products_categories'>
        <p onClick={()=> setUrl(categories[0])}> Woman </p>
        <p onClick={()=> setUrl(categories[1])}> Man </p>
        <p onClick={()=> setUrl(categories[2])}> Jewlery </p>
        <p onClick={()=> setUrl(categories[3])}> Electronics </p>
      </div>
      <div className='main-products_gallery'>
        <Gallery products={products} setNumLimit={setNumLimit} numLimit={numLimit}/>
      </div>
    </div>
  )
}

export default Products
