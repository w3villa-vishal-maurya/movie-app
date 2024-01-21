import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Row from "./row/Row";
import { mediaRequests } from "../../api/mediaRequests";
import NavBar from "./navBar/NavBar";
import Loading from "./spinner/Loading";

export default function BrowsePage(e) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? <Loading /> : <div className="releaseBody"></div>}
      <Container fluid className="homeScreen p-0">
        <NavBar /> <br /> <br /> <br /> <br />
        <Container fluid className="row-container ">
          {mediaRequests.map(({ rowId, category, type, url }) => {
            return (
              <Row
                key={rowId}
                rowId={rowId}
                category={category}
                type={type}
                url={url}
              />
            );
          })}
        </Container>
      </Container>
    </>
  );
}
