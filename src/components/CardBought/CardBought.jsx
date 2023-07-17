import "./CardBought.css"

const CardBought = () => {
  return (
    <div className="card-bought display--flex">
      <p className="card-bought__product-name width--70p">Product</p>
      <img className="card-cart__img-product" src="/318631210_2373135842841092_2080070328927308638_n.jpg" alt="" />
      <div className="card-bought__conteiner-details">
        <p className="card-bought__details">details</p>
        <p className="card-bought__details">details2</p>
      </div>
    </div>
  )
}

export default CardBought