import React from "react";
import PropTypes from "prop-types";
import "./List.scss";
import Card from "../Card/Card";

const List = ({ dogList, addDog, removeDog, isCart }) => {
  return (
    <ul className="List" data-testid="List">
      {dogList &&
        dogList.map((dog) =>
          isCart && !dog.count ? null : (
            <li key={dog.type}>
              <Card
                key={dog.type}
                isInCart={isCart}
                onClick={() =>
                  isCart ? removeDog(dog.type) : addDog(dog.type)
                }
                {...dog}
              />
            </li>
          )
        )}
    </ul>
  );
};

List.propTypes = {
  dogList: PropTypes.array.isRequired,
  addDog: PropTypes.func,
  removeDog: PropTypes.func,
  isCart: PropTypes.bool,
};

List.defaultProps = {
  dogList: [],
  addDog: () => {},
  removeDog: () => {},
  isCart: false,
};

export default List;
