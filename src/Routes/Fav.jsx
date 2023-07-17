import Cards from "../components/Cards/Cards";
import MenuCartOrFav from "../components/MenuCartOrFav/MenuCartOrFav";

const Fav = () => {
  return (
    <main className="background-color--b background-size--100vh">
      <MenuCartOrFav />
      <Cards typeCard={"Fav"}  />
    </main>
  );
};

export default Fav;
