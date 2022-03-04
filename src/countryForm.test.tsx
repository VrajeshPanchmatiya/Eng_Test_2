import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import CountryForm from "./components/CountryForm";
import { countryStore } from "./redux/countryDetails/countryStore";
const store = createStore(countryStore, applyMiddleware(thunk));

test("check Form", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <CountryForm />
      </BrowserRouter>
    </Provider>
  );
  const h1Element = screen.getByText("Country Detail Application");
  expect(h1Element).toBeInTheDocument();
  const input = screen.getByTestId("NameInput");
  expect(input).toBeInTheDocument();
});
