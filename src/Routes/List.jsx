import { useState } from "react";
import Filter from "../components/Filter/Filter";
import Path from "../components/Path/Path";
import ProductCard from "../components/ProductCard/ProductCard";

const List = () => {
  const [sections, setSections] = useState({
    title: "PRODUCTOS RANDOM",
    products: [
      {
        name: "TEST",
        img: "https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=160&height=160",
        price: 1000,
      },
      {
        name: "TEST",
        img: "https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=160&height=160",
        price: 1000,
      },
      {
        name: "TEST",
        img: "https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=160&height=160",
        price: 1000,
      },
      {
        name: "TEST",
        img: "https://imagecdn.app/v1/images/https%3A%2F%2Fimages.unsplash.com%2Fphoto-1525923838299-2312b60f6d69?width=160&height=160",
        price: 1000,
      },
    ],
  });
  return (
    <main className="background-color--w background-size--100vh">
      <Path />
      <Filter />
      <div>
        {sections &&
          sections.products.map((el, i) => <ProductCard data={el} key={i} />)}
      </div>
      <div className="list__conteiner-list-pag">
        <button className="list__buttons-list-pag">{"<"}</button>
        <p className="list__quantity-input">0</p>
        <button className="list__buttons-list-pag list__buttons-list-pag--right">
          {">"}
        </button>
      </div>
    </main>
  );
};

export default List;
