import React, { useState, useEffect } from "react";

import { Row, Col, Card, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";

import axios from "axios";

import "./styles.css";

import { useSelector } from "react-redux";

import format from "../../../services/format";

const ShowCountries = () => {
  const inputSearch = useSelector((state) => state.search.inputSearch);

  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [countriesFilter, setCountriesFilter] = useState([]);

  useEffect(() => {
    axios
      .get("https://corona.lmao.ninja/v2/countries?&sort=cases")
      .then((response) => {
        const countryRemoveDiamond = response.data.filter(
          (item) => item.country !== "Diamond Princess"
        );

        setCountries(countryRemoveDiamond);
        setCountriesFilter(countryRemoveDiamond);
        setLoading(false);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const countriesFilter = countries.filter((item) => {
      return (
        item.country.toLowerCase().indexOf(inputSearch.toLowerCase()) !== -1
      );
    });

    setCountriesFilter(countriesFilter);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputSearch]);

  return (
    <div>
      <Row>
        {!loading ? (
          countriesFilter.map((item) => (
            <Col
              md="3"
              style={{ marginTop: 12 }}
              key={item.countryInfo._id || Math.floor(Math.random())}
            >
              <Card>
                <Card.Img variant="top" src={item.countryInfo.flag} />
                <Card.Body>
                  <Card.Title>{item.country}</Card.Title>
                  <Card.Text>
                    Confirmed: {format(item.active)}
                    <br />
                    Deaths: {format(item.deaths)}
                    <br />
                    Recovered: {format(item.recovered)}
                  </Card.Text>
                  <Link
                    to={{
                      pathname: "/country",
                      country: {
                        item,
                      },
                    }}
                  >
                    <Button variant="primary">More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Spinner animation="border" variant="primary" />
        )}
      </Row>
    </div>
  );
};

export default ShowCountries;
