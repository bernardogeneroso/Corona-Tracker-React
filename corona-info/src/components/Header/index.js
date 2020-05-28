import React from "react";

import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.search.active);
  const inputSearch = useSelector((state) => state.search.inputSearch);

  return (
    <Navbar bg="primary" variant="dark" id="headerFixed">
      <Navbar.Brand href="/">Coronavirus - Tracker</Navbar.Brand>
      <Nav className="mr-auto">
        {
          //<Nav.Link href="/">Home</Nav.Link>
        }
      </Nav>
      {active && (
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search countries..."
            className="mr-sm-2"
            onChange={(event) =>
              dispatch({
                type: "TOGGLE_CHANGE",
                inputSearch: event.target.value,
              })
            }
            value={inputSearch}
          />
        </Form>
      )}
    </Navbar>
  );
};

export default Header;
