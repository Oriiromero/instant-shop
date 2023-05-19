import "./gallery.scss";
import axios from "axios";

const Gallery = ({ products, setNumLimit, numLimit, url, api, btnClass, setBtnClass}) => {
  const showMoreNum = 4;

  const showMore = async () => {

   await axios.get(api).then((res) => {
      if (res.status === 200) {
        if (res.data.length === numLimit + showMoreNum){
          setBtnClass("gallery-btn hidden");
          console.log('hola')
        }
        if (numLimit <= res.data.length - showMoreNum) {
          setNumLimit(numLimit + showMoreNum);
        }
        else if (res.data.length - numLimit < showMoreNum){
          setNumLimit(numLimit + (res.data.length - numLimit));
        }
        console.log(numLimit, res.data.length);
      }
    });
    
  }; 

  return (
    <div className="gallery">
      {products.map((product, index) => {
        return (
          <div className="gallery-product" key={index}>
            <div className="gallery-product_img">
              <img src={product.image} alt={product.title} />
            </div>
            <h3 className="gallery-product_title">{product.title}</h3>
            <p className="gallery-product_price">€ {product.price}</p>
            <button className="gallery-product_btn"> Add </button>
          </div>
        );
      })}
      <button onClick={showMore} className={btnClass}>
        {" "}
        Show more{" "}
      </button>
    </div>
  );
};

export default Gallery;
