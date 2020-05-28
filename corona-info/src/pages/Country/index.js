import React, { useEffect } from "react";

import { Image, ListGroup, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//import axios from "axios";

import "./styles.css";

import { useDispatch } from "react-redux";

import format from "../../services/format";

const Country = (params) => {
  const dispatch = useDispatch();

  //const [country, setCountry] = useState([]);

  let countryInfo = JSON.parse(localStorage.getItem("itemCountrySelect"));
  try {
    countryInfo = params.location.country.item;
    localStorage.setItem("itemCountrySelect", JSON.stringify(countryInfo));
  } catch (err) {}

  useEffect(() => {
    dispatch({ type: "TOGGLE_INACTIVE" });

    /*axios
      .get("https://api.covid19api.com/country/" + countryInfo.country)
      .then((response) => {
        setCountry(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });

    console.log(countryInfo);*/
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="topPage">
        <Image src={countryInfo.countryInfo.flag} thumbnail />
        <div>{countryInfo.country}</div>

        <Row>
          <Col md="4">
            <ListGroup.Item>
              Case active: {format(countryInfo.active)}
            </ListGroup.Item>
            <ListGroup.Item>
              Active per one million: {format(countryInfo.activePerOneMillion)}
            </ListGroup.Item>
            <ListGroup.Item>Cases: {format(countryInfo.cases)}</ListGroup.Item>
          </Col>
          <Col md="4">
            <ListGroup.Item>
              Cases Per One Million: {format(countryInfo.casesPerOneMillion)}
            </ListGroup.Item>
            <ListGroup.Item>
              Continent: {format(countryInfo.continent)}
            </ListGroup.Item>
            <ListGroup.Item>
              Critical Per One Million:{" "}
              {format(countryInfo.criticalPerOneMillion)}
            </ListGroup.Item>
          </Col>
          <Col md="4">
            <ListGroup.Item>
              Deaths: {format(countryInfo.deaths)}
            </ListGroup.Item>
            <ListGroup.Item>
              Deaths Per One Million: {format(countryInfo.deathsPerOneMillion)}
            </ListGroup.Item>
            <ListGroup.Item>
              Population: {format(countryInfo.population)}
            </ListGroup.Item>
          </Col>
          <Col md="4 mt-3">
            <ListGroup.Item>
              Recovered: {format(countryInfo.recovered)}
            </ListGroup.Item>
            <ListGroup.Item>
              Recovered Per One Million:{" "}
              {format(countryInfo.recoveredPerOneMillion)}
            </ListGroup.Item>
            <ListGroup.Item>Tests: {format(countryInfo.tests)}</ListGroup.Item>
          </Col>
          <Col md="4 mt-3">
            <ListGroup.Item>
              Today Cases: {format(countryInfo.todayCases)}
            </ListGroup.Item>
            <ListGroup.Item>
              Today Deaths: {format(countryInfo.todayDeaths)}
            </ListGroup.Item>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Country;
