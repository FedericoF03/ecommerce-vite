import "./CardCart.css";

const CardCart = () => {
  return (
    <div className="card-cart display--flex justify-content--s-a align-items--center">
      <img
        className="card-cart__img-product"
        src="/318631210_2373135842841092_2080070328927308638_n.jpg"
        alt=""
      />
      <div className="card-cart__conteiner-info-cart">
        <p className="card-cart__product-name">product name</p>
        <div className="card-cart__conteiner-input">
          <button className="card-cart__buttons">{"<"}</button>
          <p
            className="card-cart__quantity-input"
            contentEditable="true"
            name=""
            id=""
          >
            0
          </p>
          <button className="card-cart__button--right">{">"}</button>
          <p>price</p>
        </div>
      </div>
      <div className="card-cart__conteiner-button-process">
        <img src="/engranaje.svg" className="card-cart__ajust-button" />
        <button className="card-cart__conteiner-buttons">buy</button>
        <button className="card-cart__conteiner-buttons">remove</button>
      </div>
    </div>
  );
};

export default CardCart;
