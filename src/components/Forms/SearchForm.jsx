import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./searchForm.scss";
import { useNavigate } from "react-router-dom";

export default function SearchForm({ searchTerm, setSearchTerm }) {
  const searchDataRef = useRef();
  const [searchActive] = useState(false);
  const [searchData, setSearchData] = useState("");

  const navigate = useNavigate();


  const activateSearch = (e) => {
    try {
      e.preventDefault();
     
      navigate(`/feature?search=${searchData}&page=1`);

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="search d-flex">
      <Form
        onSubmit={activateSearch}
        className="d-flex align-items-center searchIcon"
      >
        <div
          className={` inputContainer + ${searchActive ? "toggleSearch" : ""} `}
        >
          <Form.Control
            className={`toggleSearch`}
            value={searchData}
            ref={searchDataRef}
            onChange={(e) => setSearchData(e.target.value)}
            type="search"
            placeholder="Search movies & TV Shows"
          />
        </div>
        <Button className="ms-2 searchButton">
          <FaSearch />
        </Button>
      </Form>
    </div>
  );
}
