import rootReducer from "./reducers";
import { createStore } from "redux";

const initialState = {
  dogList: [
    {
      image: "dog.png",
      text: "Some dog lipsum goes here 1",
      type: 1,
    },
    {
      image: "dog.png",
      text: "Some dog lipsum goes here 2",
      type: 2,
    },
    {
      image: "dog.png",
      text: "Some dog lipsum goes here 3",
      type: 3,
    },
    {
      image: "dog.png",
      text: "Some dog lipsum goes here 4",
      type: 4,
    },
  ],
};

const persistedState = localStorage.getItem('dogListState') 
                       ? JSON.parse(localStorage.getItem('dogListState'))
                       : initialState

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem("dogListState", JSON.stringify(store.getState()));
});

export default store;
