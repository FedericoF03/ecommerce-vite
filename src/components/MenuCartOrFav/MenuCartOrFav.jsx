import "./MenuCartOrFav.css"

const MenuCartOrFav = () => {
  return (
    <div className="menu-cart-or-fav display--flex">
      <button className="menu-cart-or-fav__cart-link">Cart</button>
      <button className="menu-cart-or-fav__cart-fav">Fav</button>
    </div>
  )
}

export default MenuCartOrFav