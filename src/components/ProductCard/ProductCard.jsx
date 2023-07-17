import PropTypes from "prop-types";
import "./ProductCard.css";

const ProductCard = ({ data: { name, img, price } }) => {
  return (
    <article className="product-card">
      <img className="product-card__img" src={img} />
      <div className="product-card__conteiner-data">
        <p className="product-card__name">{name}</p>
        <p className="product-card__price">{price}</p>
      </div>
    </article>
  );
};

ProductCard.propTypes = {
  data: PropTypes.object,
  img: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
