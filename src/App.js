import React from "react";

import SimpleHeader from "./components/Header/SimpleHeader";
import Refrigerator from "./components/Refrigerator/Refrigerator";
// import foodItems from "./components/sampleData/sampleData";
import user from "./components/sampleData/sampleUser";

import FoodEditor from "./components/FoodEditor/FoodEditor";
import SettingsModal from "./components/SettingsModal/SettingsModal";
import { BottomNavBar } from "./components/NavBar/NavBar";

import takePhotoUtil from "./components/TakePhoto";

class App extends React.Component {
  blankItemState = {
    img: "",
    quantity: "",
    name: "",
    added: "",
    expires: "",
    category: "fridge"
  };
  state = {
    selectedSection: "fridge",
    darkMode: false,
    editorIsOpen: false,
    settingsIsOpen: false,
    currentItem: this.blankItemState,
    foodItems: [],
    editorMode: "add"
  };
  handleSectionChange = e => {
    const selectedTarget = e.id || e.target.dataset.id;
    this.setState({ selectedSection: selectedTarget }, () => {
      document.body.id = `${selectedTarget}Section`;
    });
  };
  deleteItem = itemId => {
    const filteredList = this.state.foodItems.filter(
      foodItem => foodItem.id !== itemId
    );
    this.setState({ foodItems: filteredList }, () => {
      this.setLocalStorage();
    });
  };
  openEditor = item => {
    this.setState({ editorIsOpen: true });
    if (item.id) {
      this.setState({ currentItem: item, editorMode: "edit" });
    } else {
      this.setState({ editorMode: "add" });
    }
    // document.body.classList.add("noscroll");
  };
  takePhoto = e => {
    const itemBeforePhoto = this.state.currentItem;
    const updatePhoto = photo => {
      const itemWithNewPhoto = { ...itemBeforePhoto, img: photo };
      this.setState({ currentItem: itemWithNewPhoto });
    };
    takePhotoUtil(e, updatePhoto);
  };
  setLocalStorage = () => {
    window.localStorage.setItem(
      "myFridgeItems",
      JSON.stringify(this.state.foodItems)
    );
  };
  localStorageIsAvailable = () => {
    return window.localStorage.getItem("myFridgeItems") ? true : false;
  };
  componentDidMount() {
    // eslint-disable-next-line
    (function(l){var i,s={touchend:function(){}};for(i in s)l.addEventListener(i,s)})(document); // sticky hover fix in iOS

    if (this.localStorageIsAvailable()) {
      this.setState({
        foodItems: JSON.parse(window.localStorage.getItem("myFridgeItems"))
      });
    } else {
      this.setLocalStorage();
    }
    document.body.id = `${this.state.selectedSection}Section`;

    document.body.className = `${
      this.state.darkMode ? "darkMode" : "lightMode"
    }`;
  }
  closeEditor = originalSection => {
    console.log(originalSection);
    this.setState({
      editorIsOpen: false,
      currentItem: this.blankItemState,
      selectedSection: originalSection
    });
    document.body.classList.remove("noscroll");
  };
  deleteItemFromEditor = () => {
    const filteredList = this.state.foodItems.filter(
      foodItem => foodItem.id !== this.state.currentItem.id
    );
    this.setState(
      {
        foodItems: filteredList,
        editorIsOpen: false,
        currentItem: this.blankItemState
      },
      () => {
        this.setLocalStorage();
      }
    );
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
    this.setState(
      {
        foodItems: newList,
        editorIsOpen: false,
        currentItem: this.blankItemState
      },
      () => {
        this.setLocalStorage();
      }
    );
  };
  saveChanges = () => {
    const beforeChange = this.state.foodItems;
    const changedResults = this.state.currentItem;
    const afterChange = beforeChange.map(item => {
      return item.id === this.state.currentItem.id
        ? { ...item, ...changedResults }
        : item;
    });
    this.setState(
      {
        foodItems: afterChange,
        editorIsOpen: false,
        currentItem: this.blankItemState
      },
      () => {
        this.setLocalStorage();
      }
    );
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
  editCategory = newCat => {
    const categoryBeforeEdit = { ...this.state.currentItem };
    const afterEdit = { ...categoryBeforeEdit, category: newCat };
    this.setState({ currentItem: afterEdit });
  };
  toggleDarkMode = () => {
    const currentMode = this.state.darkMode;
    this.setState({ darkMode: !currentMode }, () => {
      document.body.className = `${
        this.state.darkMode ? "darkMode" : "lightMode"
      }`;
    });
  };
  toggleSettings = () => {
    const isOpen = this.state.settingsIsOpen;
    this.setState({ settingsIsOpen: !isOpen });
  };
  render = () => (
    <>
      <SimpleHeader user={user} toggleSettings={this.toggleSettings} />
      <Refrigerator
        foodItems={this.state.foodItems}
        category={this.state.selectedSection}
        openEditor={this.openEditor}
        deleteItem={this.deleteItem}
        currentSection={this.state.selectedSection}
        sectionChange={this.handleSectionChange}
        toggleSettings={this.toggleSettings}
      />
      <BottomNavBar
        currentSection={this.state.selectedSection}
        sectionChange={this.handleSectionChange}
        toggleSettings={this.toggleSettings}
      />
      <FoodEditor
        sectionChange={this.handleSectionChange}
        currentSection={this.state.selectedSection}
        isOpen={this.state.editorIsOpen}
        closeEditor={this.closeEditor}
        editorMode={this.state.editorMode}
        currentItem={this.state.currentItem}
        editField={this.editField}
        editCategory={this.editCategory}
        takePhoto={this.takePhoto}
        editDate={this.editDate}
        deleteItemFromEditor={this.deleteItemFromEditor}
        saveChanges={this.saveChanges}
        addNewItem={this.addNewItem}
      />
      <SettingsModal
        isOpen={this.state.settingsIsOpen}
        closeModal={this.toggleSettings}
        darkMode={this.state.darkMode}
        changeColor={this.toggleDarkMode}
      />
    </>
  );
}

export default App;
