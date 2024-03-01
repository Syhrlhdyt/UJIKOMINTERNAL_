import react, { useState } from "react";
import Card from "./ListLibrary";
import axios from "axios";
import Footer from "../../components/Footer/Footer"
import { useEffect } from "react";
import './Library.css'
const Library = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const [product, setProduct] = useState();
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=pelajaran&key=AIzaSyAmuiEZgX_Vnjgt0OHkQbkGxA1UPqV-hCQ" + "&maxResults=20"
    )
      .then((res) => res.json())
      .then((result) => setData(result.items));
  }, []);

  // useEffect(()=>)  
  return (
    <>
     <div className="library-header">
        <div className="row1">
          <h1>
            Carilah Buku Yang Kalian Mau
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src="./public/images/img3.png" alt="" />
        </div>
      </div>

      <div className="container">{<Card book={bookData} />}</div>
  <Footer/>
    </>
  );
};
export default Library;
