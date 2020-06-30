import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

const Card = ({ text, image, count, isInCart, onClick }) => (
  <div className="Card" data-testid="Card">
    <div className="details">
      <img alt={text} src={image} />
      <p>{text}</p>
    </div>
    <div className="footer">
      {isInCart && <span>Total: {count}</span>}
      <button onClick={onClick}>{isInCart ? "Remove" : "Add"}</button>
    </div>
  </div>
);

Card.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  count: PropTypes.number,
  isInCart: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Card.defaultProps = {
  image: "defaultImage",
  text: "defaultText",
  count: 0,
  isInCart: false,
  onClick: () => {},
};

export default Card;
