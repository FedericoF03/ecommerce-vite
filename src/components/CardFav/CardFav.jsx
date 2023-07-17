import "./CardFav.css";

const CardFav = () => {
  return (
    <div className="card-fav display--flex justify-content--s-a">
      <img
        className="card-cart__img-product"
        src="/318631210_2373135842841092_2080070328927308638_n.jpg"
        alt=""
      />
      <div className="card-fav__conteiner-controllers justify-content--center">
        <p className="width--70p card-fav__product-name">Product</p>
        <button className="card-fav__buttons">Delete</button>
        <button className="card-fav__buttons">Cart</button>
      </div>
    </div>
  );
};

export default CardFav;
