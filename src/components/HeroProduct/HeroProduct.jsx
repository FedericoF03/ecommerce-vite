import "./HeroProduct.css"

const HeroProduct = () => {
  return (
    <section className="gallery-product">
      <div className="gallery-product__data-product-conteiner">
        <p className="gallery-product__data-name">Product</p>
        <p className="gallery-product__data-price">Price</p>
      </div>
      <img className="gallery-product__figure" src="/testproduct.png" alt="figure-big" />
      <div className="gallery-product__slider">
        <img src="/slider_button.png" className="gallery-product__slider-buttons gallery-product__slider-buttons--left"/>
        <div className="gallery-product__figures-conteiner">
          <img className="gallery-product__figure-small" src="/testproduct.png"></img>
          <img className="gallery-product__figure-small" src="/testproduct.png"></img>
          <img className="gallery-product__figure-small" src="/testproduct.png"></img>
        </div>
        <img src="/slider_button.png" className="gallery-product__slider-buttons"/>
      </div>
    </section>
  );
};

export default HeroProduct;
