import { useState } from "react";
import "./ProductPanelQuestion.css";

const ProductPanelQuestion = () => {
  const [inputTest, setInputTest] = useState(0);
  return (
    <section className="product-panel">
      <div className="product-panel__conteiner-question-input">
        <p className="product-panel__title">Questions</p>
        <div className="product-panel__conteiner-input-question">
          <p className="product-panel__input-question" contentEditable="true">
            Escribi tu pregunta...
          </p>
        </div>
        <button className="product-panel__button-question" type="button">
          Question
        </button>
      </div>
      <div className="product-panel__list-questions">
        <p>Recent Questions:</p>
        <div>
          <ol>
            <li>
              <p className="product-panel__question-user-title">Question</p>
              <p className="product-panel__question-user">question list</p>
            </li>
          </ol>
        </div>
        <button className="product-panel__more-questions">ver mas...</button>
      </div>
    </section>
  );
};

export default ProductPanelQuestion;
