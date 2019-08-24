import React from "react";
import { Helmet } from "react-helmet";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Refrigerator from "./components/Refrigerator";

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Raleway:400,700"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <Refrigerator />
      <Footer />
    </React.Fragment>
  );
}

export default App;
