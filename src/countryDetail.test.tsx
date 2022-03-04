import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import CountryDetail from "./components/CountryDetail";
import { countryStore } from "./redux/countryDetails/countryStore";
const store = createStore(countryStore, applyMiddleware(thunk));

test("Country Detail", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CountryDetail />
      </BrowserRouter>
    </Provider>
  );
  const h1Element = screen.getByText("Country Details");
  expect(h1Element).toBeInTheDocument();
  
});
