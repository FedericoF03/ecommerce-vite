import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a
        href="https://www.youtube.com/watch?v=mPZkdNFkNps&t=9811s"
        className="header__logo-container"
      >
        <img className="header__logo" src="/cart.svg"></img>
      </a>
      <div className="header__search-conteiner">
        <input
          className="header__search-input"
          placeholder="Search Product"
          type="search"
          name="searchproduct"
          id="searchProduct"
        />
        <button className="header__search-button">
          <img
            className="header__search-img"
            src="/image_2022-12-06_000803145-removebg-preview 1.png"
          />
        </button>
      </div>
      <button className="header__cart-conteiner">
        <img className="header__cart-img" src="/carrito.png" />
        <p className="header__cart-quantity">0</p>
      </button>
      <button className="header__conteiner-pfp display--flex align-items--center">
        <img
          className="conteiner-pfp__pfp"
          src="/318631210_2373135842841092_2080070328927308638_n.jpg"
          alt=""
        />
      </button>
    </header>
  );
};

export default Header;
