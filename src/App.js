import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Refrigerator from "./components/Refrigerator/Refrigerator";
import foodItems from "./components/sampleData/sampleData";
import FoodEditor from "./components/FoodEditor/FoodEditor";

import takePhotoUtil from "./components/TakePhoto";

import blank from "./img/_.png";

class App extends React.Component {
  blankItemState = {
    img: blank,
    quantity: "",
    name: "",
    added: "",
    expires: ""
  };
  state = {
    selectedSection: "fridge",
    editorOpen: false,
    currentItem: this.blankItemState,
    foodItems: foodItems,
    editorMode: "Add"
  };
  handleSectionChange = changeEvent => {
    const selectedTarget = changeEvent.target.value;
    this.setState({ selectedSection: selectedTarget }, () => {
      document.body.style.backgroundColor =
        selectedTarget === "freezer" ? "#333" : "";
    });
  };
  deleteItem = itemId => {
    const filteredList = this.state.foodItems.filter(
      foodItem => foodItem.id !== itemId
    );
    this.setState({ foodItems: filteredList });
  };
  openEditor = item => {
    this.setState({ editorOpen: true });
    if (item.id) {
      this.setState({ currentItem: item, editorMode: "Edit" });
    } else {
      this.setState({ editorMode: "Add" });
    }
    document.body.classList.add("noscroll");
  };
  takePhoto = e => {
    const itemBeforePhoto = this.state.currentItem;
    const updatePhoto = photo => {
      const itemWithNewPhoto = { ...itemBeforePhoto, img: photo };
      this.setState({ currentItem: itemWithNewPhoto });
    };
    takePhotoUtil(e, updatePhoto);
  };
  componentDidMount() {
    // eslint-disable-next-line
    (function(l){var i,s={touchend:function(){}};for(i in s)l.addEventListener(i,s)})(document); // sticky hover fix in iOS
  }
  closeEditor = () => {
    this.setState({
      editorOpen: false,
      currentItem: this.blankItemState
    });
    document.body.classList.remove("noscroll");
  };
  deleteItemFromEditor = () => {
    const filteredList = this.state.foodItems.filter(
      foodItem => foodItem.id !== this.state.currentItem.id
    );
    this.setState({
      foodItems: filteredList,
      editorOpen: false,
      currentItem: this.blankItemState
    });
  };
  addNewItem = () => {
    const oldList = this.state.foodItems;
    const newList = [
      ...oldList,
      {
        ...this.state.currentItem,
        category: this.state.selectedSection,
        id: new Date().toString()
      }
    ];
    this.setState({
      foodItems: newList,
      editorOpen: false,
      currentItem: this.blankItemState
    });
  };
  saveChanges = () => {
    const beforeChange = this.state.foodItems;
    const changedResults = this.state.currentItem;
    const afterChange = beforeChange.map(item => {
      return item.id === this.state.currentItem.id
        ? { ...item, ...changedResults }
        : item;
    });
    this.setState({
      foodItems: afterChange,
      editorOpen: false,
      currentItem: this.blankItemState
    });
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
        foodItems={this.state.foodItems}
        category={this.state.selectedSection}
        openEditor={this.openEditor}
        deleteItem={this.deleteItem}
      />
      <FoodEditor
        open={this.state.editorOpen}
        closeEditor={this.closeEditor}
        editorMode={this.state.editorMode}
        currentItem={this.state.currentItem}
        editField={this.editField}
        takePhoto={this.takePhoto}
        editDate={this.editDate}
        deleteItemFromEditor={this.deleteItemFromEditor}
        saveChanges={this.saveChanges}
        addNewItem={this.addNewItem}
      />
      <Footer />
    </>
  );
}

export default App;
