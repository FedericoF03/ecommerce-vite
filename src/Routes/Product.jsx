import { useState } from "react";
import HeroProduct from "../components/HeroProduct/HeroProduct";
import Map from "../components/Map/Map";
import PanelOpinionProduct from "../components/PanelOpinionProduct/PanelOpinionProduct";
import PanelProduct from "../components/PanelProduct/PanelProduct";
import ProductData from "../components/ProductData/ProductData";
import ProductPanelQuestion from "../components/ProductPanelQuestion/ProductPanelQuestion";
import ProductSections from "../components/ProductSections/ProductSections";

const Product = () => {
  const [sections, setSections] = useState([
    {
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
    },
  ]);
  return (
    <main className="background-color--w">
      <article className="product display--flex align-items--center justify-content--center flex-direction--column">
        <HeroProduct />
        <PanelProduct />
        <ProductData />
        <ProductPanelQuestion />
        <Map />
        <PanelOpinionProduct />
        {sections.map((el, i) => (
          <ProductSections dataSection={el} key={i} />
        ))}
      </article>
    </main>
  );
};

export default Product;
