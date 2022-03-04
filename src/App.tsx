import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryForm from "./components/CountryForm";
import CountryDetail from "./components/CountryDetail";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { countryStore } from "./redux/countryDetails/countryStore";
import thunk from "redux-thunk";
const store = createStore(countryStore, applyMiddleware(thunk));
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<CountryForm />} />
          <Route path="/countrydetail" element={<CountryDetail />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
