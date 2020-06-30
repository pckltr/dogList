import React from "react";
import App from "./App";
import List from "./components/List/List";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";

const initialState = {
  dogList: [
    {
      image: "dog.png",
      text: "Some dog lipsum goes here 1",
      type: 1,
    },
  ],
};
const mockStore = configureMockStore();
const store = mockStore(initialState);

test("should render app", () => {
  const wrapper = shallow(<App store={store} />);
});
