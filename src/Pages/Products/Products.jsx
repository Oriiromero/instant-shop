import React, { useEffect, useState } from "react";
import "./products.scss";
import Gallery from "../../Components/Gallery/Gallery";
import axios from "axios";

const Products = () => {
  const [numLimit, setNumLimit] = useState(8);
  const api = "https://fakestoreapi.com/products";
  const apiLimited = `https://fakestoreapi.com/products?limit=`;
  const [url, setUrl] = useState(apiLimited);
  const categories = [
    "/category/women's%20clothing",
    "/category/men's%20clothing",
    "/category/jewelery",
    "/category/electronics",
  ];
  const [products, setProducts] = useState([]);
  const [btnClass, setBtnClass] = useState("gallery-btn");

  useEffect(() => {
    axios.get(url + numLimit).then((res) => {
      if (res.status === 200) {
        setProducts(res.data);
      }
    });
  }, [numLimit, url]);

  const categoryFilter = async (category) => {
    const newUrl = api + category;

    try {
      const res = await axios.get(newUrl);
      if (res.status === 200) {
        setProducts(res.data);

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

  const filterProducts = async (e) => {
    let allProducts = [];
    let productsFiltered = [];

   await axios.get(api).then((res) => {
      if (res.status === 200) {
        allProducts = res.data;
      }
    });

    if (e.key === "Enter") {
      let value = e.target.value.toLowerCase();

      allProducts.filter((product) => {
        if (product.title.toLowerCase().includes(value)) {
          productsFiltered.push(product);
          setProducts(productsFiltered);
          setBtnClass("gallery-btn hidden");
        }
      });
    }    
  };

  return (
    <div className="main-products">
      <div className="main-products_search">
        <p className="main-products_search__p"> Filters </p>
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
          url={url}
          api={api}
          btnClass={btnClass}
          setBtnClass={setBtnClass}
        />
      </div>
    </div>
  );
};

export default Products;
