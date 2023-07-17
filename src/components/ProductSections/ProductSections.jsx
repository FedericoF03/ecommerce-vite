import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductSections.css";

const ProductSections = ({ dataSection: { title, products } }) => {
  return (
    <section className="products-slider">
      <h3 className="products-slider__title">{title}</h3>
      <article className="products-slider__conteiner-product-cards">
        {products.length > 0 &&
          products.map((el, i) => <ProductCard data={el} key={i} />)}
      </article>
    </section>
  );
};

ProductSections.propTypes = {
  dataSection: PropTypes.object,
  title: PropTypes.string,
  products: PropTypes.array,
};

export default ProductSections;
