import { useNavigate } from "react-router-dom";
import "./gallery.scss";

const Gallery = ({ products, setNumLimit, numLimit, allProducts, btnClass, setBtnClass, productExist}) => {
  const showMoreNum = 4;
  const navigate = useNavigate();

  //Show more button function by length of the products 
  const showMore = async () => {
        if (allProducts.length === numLimit + showMoreNum){
          setBtnClass("gallery-btn hidden");
        }
        if (numLimit <= allProducts.length - showMoreNum) {
          setNumLimit(numLimit + showMoreNum);
        }
        else if (allProducts.length - numLimit < showMoreNum){
          setNumLimit(numLimit + (allProducts.length - numLimit));
        } 
  }; 

  //Go to the next component when button is clicked
  const goToProduct = (id) => {
    navigate(`/products/${id}`);
  }


  return (
    <>
    {productExist === false ? <p className="nonexistent">Oops, it seems like that product doesn't exist!</p> : (
      <div className="gallery">
      {products.map((product, index) => {
        return (
          <div className="gallery-product" key={index}>
            <div className="gallery-product_img">
              <img src={product.image} alt={product.title} />
            </div>
            <h3 className="gallery-product_title">{product.title}</h3>
            <p className="gallery-product_price">€ {product.price}</p>
            <button onClick={() => goToProduct(product.id)} className="gallery-product_btn"> Add </button>
          </div>
        );
      })}
      <button onClick={showMore} className={btnClass}>
        {" "}
        Show more{" "}
      </button>
    </div>
    )}
    </>
  );
};

export default Gallery;
