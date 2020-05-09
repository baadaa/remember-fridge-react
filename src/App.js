import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Refrigerator from "./components/Refrigerator/Refrigerator";
import foodItems from "./components/sampleData/sampleData";
import FoodEditor from "./components/FoodEditor/FoodEditor";

class App extends React.Component {
  state = {
    selectedSection: "fridge",
    editorOpen: false,
    currentItem: null,
    foodItems: foodItems,
    editorMode: ""
  };
  handleSectionChange = changeEvent => {
    this.setState({ selectedSection: changeEvent.target.value });
  };
  deleteItem = itemId => {
    const filteredList = this.state.foodItems.filter(
      foodItem => foodItem.id !== itemId
    );
    this.setState({ foodItems: filteredList });
  };
  openEditor = item => {
    this.setState({ editorOpen: true });
    if (item.props) {
      this.setState({ currentItem: item.props, editorMode: "Edit" });
    } else {
      this.setState({ editorMode: "Add" });
    }
    document.body.classList.add("noscroll");
  };
  closeEditor = () => {
    this.setState({ editorOpen: false, currentItem: null });
    document.body.classList.remove("noscroll");
  };
  editDate = (date, targetId) => {
    const dateBeforeEdit = { ...this.state.currentItem };
    const afterEdit = { ...dateBeforeEdit, [targetId]: date };
    this.setState({ currentItem: afterEdit });
  };
  editField = item => {
    const targetId = item.currentTarget.id;
    const newValue = item.currentTarget.value;
    const itemBeforeEdit = { ...this.state.currentItem };
    const afterEdit = { ...itemBeforeEdit, [targetId]: newValue };
    this.setState({ currentItem: afterEdit });
  };
  render = () => (
    <>
      <Header
        section={this.state.selectedSection}
        change={this.handleSectionChange}
      />
      <Refrigerator
        foodItems={this.state.foodItems.filter(
          food => food.category === "fridge"
        )}
        openEditor={this.openEditor}
        deleteItem={this.deleteItem}
      />
      <FoodEditor
        open={this.state.editorOpen}
        closeEditor={this.closeEditor}
        editorMode={this.state.editorMode}
        currentItem={this.state.currentItem}
        editField={this.editField}
        editDate={this.editDate}
      />
      <Footer />
    </>
  );
}

export default App;
