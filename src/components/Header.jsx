import React from "react";
import "../styles/header.css";
import { FaBookOpen } from "react-icons/fa";

const Header = (props) => {
  const onChangeSearch = (e) => {
    const searchTerm = e.target.value;
    console.log(searchTerm);
  };

  return (
    <div className="header">
      <div className="flex-container">
        <div>
          {" "}
          <FaBookOpen color="red" />
        </div>
        <div>
          <a className="logo">windbnb</a>
        </div>
      </div>

      <div className="header-right">
        <input
          className="form-control"
          className="input-style"
          placeholder="Buscar..."
        />
      </div>
    </div>
  );
};

export default Header;
