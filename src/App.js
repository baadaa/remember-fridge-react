import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Refrigerator from "./components/Refrigerator/Refrigerator";

class App extends React.Component {
  state = {
    selectedSection: "fridge"
  };
  handleSectionChange = changeEvent => {
    this.setState({ selectedSection: changeEvent.target.value });
  };
  render = () => (
    <React.Fragment>
      <Header
        section={this.state.selectedSection}
        change={this.handleSectionChange}
      />
      <Refrigerator />
      <Footer />
    </React.Fragment>
  );
}

export default App;
