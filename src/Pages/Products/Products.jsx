import React, { useContext, useEffect, useState } from "react";
import "./products.scss";
import Gallery from "../../Components/Gallery/Gallery";
import axios from "axios";
import { ProductsContext } from "../../Components/Shared/ProductsContext";

const Products = () => {
  const [numLimit, setNumLimit] = useState(8);
  const {api, allProducts, apiLimited} = useContext(ProductsContext);
  const [url, setUrl] = useState(apiLimited);
  const categories = [
    "/category/women's%20clothing",
    "/category/men's%20clothing",
    "/category/jewelery",
    "/category/electronics",
  ];
  const [products, setProducts] = useState([]);
  const [btnClass, setBtnClass] = useState("gallery-btn");
  const [productExist, setProductExist] = useState();
  let productsFiltered = [];

  //Get the products by a limited number
  useEffect(() => {
    axios.get(url + numLimit).then((res) => {
      if (res.status === 200) {
        setProducts(res.data);
      }
      if (allProducts.length === numLimit){
        setBtnClass("gallery-btn hidden");
      }
    });
  }, [numLimit, url]);

  //Filter the products by category as provided by the backend 
  const categoryFilter = async (category) => {
    const newUrl = api + category;

    try {
      const res = await axios.get(newUrl);
      if (res.status === 200) {
        setProducts(res.data);
        //show button or not
        if (newUrl.includes("category")) {
          setBtnClass("gallery-btn hidden");
        } else {
          setBtnClass("gallery-btn");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Get the products searched in an input
  const filterProducts = (e) => {
    if (e.key === "Enter") {
      let value = e.target.value.toLowerCase();

      allProducts.filter((product) => {
        if (product.title.toLowerCase().includes(value)) {
          //Push products into an empty array
          productsFiltered.push(product);
          //Update the products with this filtered ones
          setProducts(productsFiltered);
          //Hide the button
          setBtnClass("gallery-btn hidden");
          setProductExist(true);
        } else if(productsFiltered.length === 0){
          //The array is empty so we set this to false
          setProductExist(false);
        }
      });
    }    
  };

  return (
    <div className="main-products">
      <div className="main-products_search">
        <input
          className="main-products_search__input"
          type="text"
          placeholder="Search.."
          onKeyPress={(event) => filterProducts(event)}
        />
      </div>
      <div className="main-products_categories">
        <p
          className="main-products_categories__p"
          onClick={() => categoryFilter("?limit=" + 8)}
        >
          {" "}
          All{" "}
        </p>
        <p
          className="main-products_categories__p"
          onClick={() => categoryFilter(categories[0])}
        >
          {" "}
          Woman{" "}
        </p>
        <p
          className="main-products_categories__p"
          onClick={() => categoryFilter(categories[1])}
        >
          {" "}
          Man{" "}
        </p>
        <p
          className="main-products_categories__p"
          onClick={() => categoryFilter(categories[2])}
        >
          {" "}
          Jewelery{" "}
        </p>
        <p
          className="main-products_categories__p"
          onClick={() => categoryFilter(categories[3])}
        >
          {" "}
          Electronics{" "}
        </p>
      </div>
      <div className="main-products_gallery">
        <Gallery
          products={products}
          setNumLimit={setNumLimit}
          numLimit={numLimit}
          allProducts={allProducts}
          btnClass={btnClass}
          setBtnClass={setBtnClass}
          productExist={productExist}
        />
      </div>
    </div>
  );
};

export default Products;
