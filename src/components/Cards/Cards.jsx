import { Fragment } from "react";
import CardCart from "../CardCart/CardCart";
import CardFav from "../CardFav/CardFav";
import PropTypes from "prop-types"
import CardHistory from "../CardHistory/CardHistory";
import CardBoughts from "../CardBoughts/CardBoughts";
import CardBought from "../CardBought/CardBought";

const Cards = ({typeCard}) => {
  
  return (
    <Fragment>
      {typeCard === "Cart" && <CardCart />}
      {typeCard === "Fav" && <CardFav />}
      {typeCard === "History" && <CardHistory />}
      {typeCard === "Boughts" && <CardBoughts />}
      {typeCard === "Bought" && <CardBought />}
    </Fragment>
  );
};

Cards.propTypes = {
  typeCard: PropTypes.string
}

export default Cards;
