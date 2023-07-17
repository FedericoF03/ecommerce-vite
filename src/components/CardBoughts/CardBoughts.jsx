import "./CardBoughts.css"

const CardBoughts = () => {
  return (
    <div className="card-boughts display--flex">
      <p className="card-boughts__product-name">Product</p>
      <img src="/engranaje.png" alt="" />
      <img className="card-cart__img-product" src="/318631210_2373135842841092_2080070328927308638_n.jpg" alt="" />
      <div className="card-boughts__conteiner-data">
        <p>kind</p>
        <p>kind</p>
        <p>kind</p>
      </div>
      <p className="card-boughts__facture-button">facture</p>
    </div>
  )
}

export default CardBoughts