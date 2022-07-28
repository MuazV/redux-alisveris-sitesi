import React from "react";
import {connect} from "react-redux"

import "./styles.css";
import { Route, Routes } from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";


const App = props => {
  console.log(props.bookList);
  return (
    <div className="App">
      <h1>
        Alışveriş Sepeti Yapımı
        <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
        />
        React Dersleri
      </h1>
      <Routes>
        <Route exact path="/" element={<Products/>} />
      <Route path="/cart" element={<Cart/>} />
      </Routes>
      
    </div>
  );
}

const MapStateToProps = state => {
  return {
    bookList: state.bookList
  };
};

export default connect(MapStateToProps)(App);
