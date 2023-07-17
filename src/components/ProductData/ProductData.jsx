import "./ProductData.css";
const ProductData = () => {
  return (
    <section className="product-data">
      <div className="product-data__caracteristic">
        <p>Caracteristic</p>
        <ol>
          <li className="justify-content--s-a display--flex">
            <p>test:</p>
            <p>0</p>
          </li>
        </ol>
      </div>
      <div className="product-data__description">
        <p className="product-data__description-title">Description</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        expedita eveniet quam voluptates porro laudantium voluptatem, omnis
        consequuntur facilis, tempora harum quo a fugiat perspiciatis ad!
        Assumenda dolore fuga quisquam.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consequatur expedita eveniet quam voluptates porro
        laudantium voluptatem, omnis consequuntur facilis, tempora harum quo a
        fugiat perspiciatis quisquam.
      </div>
    </section>
  );
};

export default ProductData;
