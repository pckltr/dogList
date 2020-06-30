const dogList = (state = [], action) => {
  switch (action.type) {
    case "ADD_DOG":
      return addDogAction(state, action.data);
    case "REMOVE_DOG":
      return removeDogAction(state, action.data);
    default:
      return state;
  }
};

const addDogAction = (state, dogType) => {
  let newState = [...state];
  let dogFound = newState.find((dog) => dog.type === dogType);

  if (dogFound.count) {
    dogFound.count += 1;
  } else {
    dogFound.count = 1;
  }

  return newState;
};

const removeDogAction = (state, dogType) => {
  let newState = [...state];
  let dogFound = newState.find((dog) => dog.type === dogType);

  dogFound.count -= 1;

  return newState;
};

export default dogList;
