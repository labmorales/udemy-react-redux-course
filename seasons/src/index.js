import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";
import useLocation from "./useLocation";

const App = () => {
  const [lat, errorMessage] = useLocation();

  let content;
  if (errorMessage && !lat) {
    content = <div>Error: {errorMessage}</div>;
  } else if (!errorMessage && lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Loading message="Please accept geo request" />;
  }

  return <div className="border red">{content}</div>;
};

ReactDom.render(<App />, document.querySelector("#root"));
