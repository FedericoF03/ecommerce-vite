import Cards from "../components/Cards/Cards";
import MenuCartOrFav from "../components/MenuCartOrFav/MenuCartOrFav";

const Cart = () => {
  return (
    <main className="background-color--b background-size--100vh">
      <MenuCartOrFav />
      <Cards typeCard={"Cart"}  />
      <div className="conteiner-data-carts">
        <p>price send</p>
        <p>quantity total</p>
        <p>total</p>
      </div>
      <button className="button-cart-buy-all">Buy all</button>
    </main>
  );
};

export default Cart;
