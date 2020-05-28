import React, { useState, useEffect } from "react";

import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

import "./styles.css";

import format from "../../../services/format";

const ContentTop = () => {
  const [cases, setCases] = useState(
    JSON.parse(localStorage.getItem("casesContentTop")) || {
      TotalConfirmed: "NULL",
      TotalRecovered: "NULL",
      TotalDeaths: "NULL",
    }
  );

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((response) => {
        try {
          const {
            data: {
              Global: { TotalConfirmed, TotalDeaths, TotalRecovered },
            },
          } = response;

          setCases({
            TotalConfirmed,
            TotalDeaths,
            TotalRecovered,
          });
        } catch (error) {
          console.warn(error);
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("casesContentTop", JSON.stringify(cases));

    setTimeout(() => {
      axios
        .get("https://api.covid19api.com/summary")
        .then((response) => {
          try {
            const {
              data: {
                Global: { TotalConfirmed, TotalDeaths, TotalRecovered },
              },
            } = response;

            setCases({
              TotalConfirmed,
              TotalDeaths,
              TotalRecovered,
            });
          } catch (error) {
            console.warn(error);
          }
        })
        .catch((error) => {
          console.warn(error);
        });
    }, 100000);
  }, [cases]);

  return (
    <div className="contentTop">
      <Row>
        <Col md="4">
          <Card style={{ width: "16rem" }}>
            <Card.Body>
              <Card.Title className="titleCardTop" style={{ color: "green" }}>
                {format(cases.TotalConfirmed)}
              </Card.Title>
              <Card.Subtitle>Total Confirmed</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card style={{ width: "16rem" }}>
            <Card.Body>
              <Card.Title className="text-info titleCardTop">
                {format(cases.TotalRecovered)}
              </Card.Title>
              <Card.Subtitle>Recovered</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card style={{ width: "16rem" }}>
            <Card.Body>
              <Card.Title className="text-danger titleCardTop">
                {format(cases.TotalDeaths)}
              </Card.Title>
              <Card.Subtitle>Global Deaths</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ContentTop;
