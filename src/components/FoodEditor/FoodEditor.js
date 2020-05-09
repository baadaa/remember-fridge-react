import React from "react";
import "../../styles/flatpick.scss";
import flatpickr from "flatpickr";
import blank from "../../img/_.png";
// import closeIcon from "../img/close.svg";
// import expireIcon from "../img/expires.svg";
// import ColorPalette from "./ColorPalette";
import css from "./FoodEditor.module.scss";

class FoodEditor extends React.Component {
  addDatePicker = React.createRef();
  expDatePicker = React.createRef();
  closeEditor = () => {
    this.props.closeEditor();
  };
  onChangeDate = (selectedDates, dateStr, instance) => {
    this.props.editDate(dateStr, instance.element.id);
  };
  deleteItemFromEditor = () => {
    alert("delete?");
    this.props.deleteItemFromEditor();
  };
  componentDidMount() {
    flatpickr(this.addDatePicker.current, {
      onChange: this.onChangeDate,
      dateFormat: "F j, Y"
    });
    flatpickr(this.expDatePicker.current, {
      onChange: this.onChangeDate,
      dateFormat: "F j, Y"
    });
  }
  render() {
    const visible = this.props.open === false ? "" : css.open;
    const {
      img = blank,
      quantity = "",
      name = "",
      added = "",
      expires = ""
    } = this.props.currentItem;
    return (
      <div className={`${css.editorView} ${visible}`}>
        <div className={css.editorViewInner}>
          <form className={css.editor} onSubmit={e => e.preventDefault()}>
            <h2 onClick={this.closeEditor}>{this.props.editorMode} an item</h2>
            <div className={css.photo}>
              <label className={css.photoFile}>
                <input
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  placeholder=""
                  onChange={this.props.takePhoto}
                />
                <img src={img} alt="" />
              </label>
            </div>
            <div className={css.fields}>
              <div className={css.fieldLabel}>
                <label htmlFor="name">
                  Item name<span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Item name"
                  style={{ boxShadow: "none" }}
                  value={name}
                  onChange={this.props.editField}
                />
              </div>
              <div className={css.fieldLabel}>
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  placeholder="Quantity"
                  onChange={this.props.editField}
                  value={quantity}
                />
              </div>
              <div className={css.fieldLabel} style={{ boxShadow: "none" }}>
                <label htmlFor="added">
                  Added Date<span className="req">*</span>
                </label>
                <input
                  className="flatpickr-input form-control input"
                  placeholder="Added date"
                  type="text"
                  id="added"
                  name="added"
                  value={added}
                  readOnly="readonly"
                  ref={this.addDatePicker}
                />
              </div>
              <div className={css.fieldLabel} style={{ boxShadow: "none" }}>
                <label htmlFor="expires">Expiration Date (optional)</label>
                <input
                  className="flatpickr-input form-control input"
                  placeholder="Expiring date"
                  type="text"
                  id="expires"
                  name="expires"
                  value={expires}
                  readOnly="readonly"
                  ref={this.expDatePicker}
                />
              </div>
            </div>
            <div>
              <button
                style={{ background: "#333", color: "#FFF" }}
                onClick={this.props.saveChanges}
              >
                Save
              </button>
              <button
                style={{ background: "#333", color: "#FFF" }}
                onClick={this.deleteItemFromEditor}
              >
                Remove
              </button>
              <button
                style={{ background: "#333", color: "#FFF" }}
                onClick={this.closeEditor}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FoodEditor;
