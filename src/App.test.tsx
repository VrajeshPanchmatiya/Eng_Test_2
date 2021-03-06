import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { countryStore } from "./redux/countryDetails/countryStore";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
const store = createStore(countryStore, applyMiddleware(thunk));

test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
