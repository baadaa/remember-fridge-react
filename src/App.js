import React from "react";
import axios from "axios";

import SimpleHeader from "./components/Header/SimpleHeader";
import Refrigerator from "./components/Refrigerator/Refrigerator";
import ShoppingList from "./components/ShoppingList/ShoppingList";

import user from "./components/sampleData/sampleUser";

import FoodEditor from "./components/FoodEditor/FoodEditor";
import SettingsModal from "./components/SettingsModal/SettingsModal";
import { BottomNavBar } from "./components/NavBar/NavBar";

import { takePhoto, rotatePhoto } from "./components/TakePhoto";

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
    activeArea: "fridge",
    editorLaunchIn: "fridge",
    darkMode: false,
    editorIsOpen: false,
    settingsIsOpen: false,
    listIsOpen: false,
    currentItem: this.blankItemState,
    foodItems: [],
    shoppingList: [],
    editorMode: "add"
  };
  handleNavigation = e => {
    const targetArea = e.target.dataset.id;
    this.setState({ activeArea: targetArea, editorLaunchIn: targetArea });
  };
  handleEditorRadioButtons = e => {
    const targetArea = e.id;
    this.setState({ activeArea: targetArea });
  };
  openEditor = item => {
    const launchData = {
      editorIsOpen: true,
      editorLaunchIn: this.state.activeArea,
      currentItem: item.id ? item : this.state.currentItem,
      editorMode: item.id ? "edit" : "add"
    };
    this.setState({ ...launchData }, () => {
      window.scrollTo({
        top: 0
      });
    });
  };
  closeEditor = closingAs => {
    this.setState({
      editorIsOpen: false,
      currentItem: this.blankItemState,
      activeArea: closingAs
    });
  };
  addItem = () => {
    const oldList = this.state.foodItems;
    const newList = [
      ...oldList,
      {
        ...this.state.currentItem,
        category: this.state.activeArea,
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
  deleteItem = itemId => {
    const filteredList = this.state.foodItems.filter(
      foodItem => foodItem.id !== itemId
    );
    this.setState({ foodItems: filteredList }, () => {
      this.setLocalStorage();
    });
  };
  deleteFromEditor = () => {
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
  takePhoto = e => {
    const itemBeforePhoto = this.state.currentItem;
    const updatePhoto = photo => {
      const itemWithNewPhoto = { ...itemBeforePhoto, img: photo };
      this.setState({ currentItem: itemWithNewPhoto });
    };
    takePhoto(e, updatePhoto);
  };
  rotatePhoto = () => {
    const itemBeforePhoto = this.state.currentItem;
    const updatePhoto = photo => {
      const itemWithNewPhoto = { ...itemBeforePhoto, img: photo };
      this.setState({ currentItem: itemWithNewPhoto });
    };
    rotatePhoto(this.state.currentItem.img, -90, updatePhoto);
  };
  setLocalStorage = () => {
    window.localStorage.setItem(
      "myFridgeItems",
      JSON.stringify(this.state.foodItems)
    );
    window.localStorage.setItem(
      "myFridgeDarkMode",
      JSON.stringify(this.state.darkMode)
    );
    window.localStorage.setItem(
      "myFridgeShoppingList",
      JSON.stringify(this.state.shoppingList)
    );
  };
  localStorageIsAvailable = data => {
    return window.localStorage.getItem(data) ? true : false;
  };
  componentDidMount() {
    // eslint-disable-next-line
    (function(l){var i,s={touchend:function(){}};for(i in s)l.addEventListener(i,s)})(document); // sticky hover fix in iOS
    if (this.localStorageIsAvailable("myFridgeShoppingList")) {
      this.setState(
        {
          foodItems: JSON.parse(window.localStorage.getItem("myFridgeItems")),
          darkMode: JSON.parse(window.localStorage.getItem("myFridgeDarkMode")),
          shoppingList: JSON.parse(
            window.localStorage.getItem("myFridgeShoppingList")
          )
        },
        () => {
          document.body.className = `${
            this.state.darkMode ? "darkMode" : "lightMode"
          }`;
        }
      );
    } else {
      this.setLocalStorage();
      document.body.className = `${
        this.state.darkMode ? "darkMode" : "lightMode"
      }`;
    }
  }
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
      this.setLocalStorage();
    });
  };
  toggleSettings = () => {
    const isOpen = this.state.settingsIsOpen;
    this.setState({ settingsIsOpen: !isOpen });
  };
  toggleList = () => {
    const isOpen = this.state.listIsOpen;
    this.setState({ listIsOpen: !isOpen }, () => {
      if (this.state.listIsOpen) {
        window.scrollTo({ top: 0 });
      }
    });
  };
  loadSamples = () => {
    axios.get("/sampleData.json").then(res => {
      this.setState({ foodItems: res.data, settingsIsOpen: false }, () => {
        this.setLocalStorage();
      });
    });
  };
  deleteAll = () => {
    this.setState({ foodItems: [], settingsIsOpen: false }, () =>
      this.setLocalStorage()
    );
  };
  updateShoppingList = list => {
    this.setState({ shoppingList: list }, () => this.setLocalStorage());
  };
  render = () => (
    <>
      <SimpleHeader user={user} toggleSettings={this.toggleSettings} />
      <Refrigerator
        foodItems={this.state.foodItems}
        category={this.state.activeArea}
        openEditor={this.openEditor}
        deleteItem={this.deleteItem}
        currentSection={this.state.activeArea}
        sectionChange={this.handleNavigation}
        toggleSettings={this.toggleSettings}
        toggleList={this.toggleList}
      />
      <BottomNavBar
        currentSection={this.state.activeArea}
        sectionChange={this.handleNavigation}
        toggleSettings={this.toggleSettings}
        toggleList={this.toggleList}
      />
      <FoodEditor
        sectionChange={this.handleEditorRadioButtons}
        currentSection={this.state.activeArea}
        editorLaunchIn={this.state.editorLaunchIn}
        isOpen={this.state.editorIsOpen}
        closeEditor={this.closeEditor}
        editorMode={this.state.editorMode}
        currentItem={this.state.currentItem}
        editField={this.editField}
        editCategory={this.editCategory}
        takePhoto={this.takePhoto}
        rotatePhoto={this.rotatePhoto}
        editDate={this.editDate}
        deleteFromEditor={this.deleteFromEditor}
        saveChanges={this.saveChanges}
        addItem={this.addItem}
        isDark={this.state.darkMode}
      />
      <SettingsModal
        isOpen={this.state.settingsIsOpen}
        closeModal={this.toggleSettings}
        darkMode={this.state.darkMode}
        changeColor={this.toggleDarkMode}
        loadSamples={this.loadSamples}
        deleteAll={this.deleteAll}
      />
      <ShoppingList
        isOpen={this.state.listIsOpen}
        isDark={this.state.darkMode}
        closeList={this.toggleList}
        shoppingList={this.state.shoppingList}
        updateShoppingList={this.updateShoppingList}
      />
    </>
  );
}

export default App;
