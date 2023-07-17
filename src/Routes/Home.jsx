import { useState } from "react";
import ProductSections from "../components/ProductSections/ProductSections";
import Ubi from "../components/Ubi/Ubi";

const Home = () => {
  const [sections, setSections] = useState([]);
  return (
    <>
      <Ubi />
      <main className="background-color--w background-size--100vh">
        {sections.map((el, i) => (
          <ProductSections dataSection={el} key={i} />
        ))}
      </main>
    </>
  );
};

export default Home;
