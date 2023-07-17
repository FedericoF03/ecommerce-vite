import "./PanelProduct.css"

const PanelProduct = () => {
  return (
    <section className="panel-product">
      <div className="panel-product__quantity-controllers-conteiner">
        <button>{"<"}</button>
        <input type="text" name="" id="" />
        <button>{">"}</button>
      </div>
      <div className="panel-product__controllers">
        <button className="panel-product__control-buttons">BUY</button>
        <button className="panel-product__control-buttons panel-product__control-buttons--grey">CART</button>
      </div>
    </section>
  );
};

export default PanelProduct;
