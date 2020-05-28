import React from "react";

import ContentTop from "../../components/Main/contentTop/";
import ShowCountries from "./../../components/Main/showCountries/";

import { useDispatch } from "react-redux";

export default function Main() {
  const dispatch = useDispatch();
  dispatch({ type: "TOGGLE_ACTIVE" });

  return (
    <>
      <ContentTop />
      <ShowCountries />
    </>
  );
}
