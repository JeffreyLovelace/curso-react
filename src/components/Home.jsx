import React, { useState, useRef } from "react";
import ListaPropiedades from "./ListaPropiedades";
import Header from "./Header";
import "../styles/home.css";
import FilterResults from "react-filter-search";

const Home = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const onChangeSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    console.log(searchTerm);
  };

  return (
    <div>
      <Header />

      <div className="container-home">
        <div className="container-title">
          <span className="title-header">{props.title}</span>
          <span className="count">{`${props.data.length}+ stays`}</span>
        </div>

        <ListaPropiedades data={props.data} />
      </div>
    </div>
  );
};

export default Home;
