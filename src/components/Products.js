import React from "react";
import { connect } from "react-redux";
import { sepeteEkle } from "../actions/index";
import { Link } from "react-router-dom";

const Products = (props) => {
  console.log(props.bookList);
  return (
    <div>
      <h2>
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim</Link>
      </h2>
      {props.bookList.map((book) => (
        <div className="book">
          <img src={book.image} alt={book.name} />
          <div>
            <h4>{book.name}</h4>
            <p>Yazar: {book.author}</p>
            <p>Fiyat: &#8378; {book.price}</p>
            <button onClick={() => props.sepeteEkle(book)}>Sepete Ekle</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bookList: state.bookList,
    cart:state.cart
  };
};

const mapActionToProps = () => ({ sepeteEkle });

export default connect(mapStateToProps, mapActionToProps)(Products);
