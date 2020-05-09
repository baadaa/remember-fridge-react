import React from "react";
import "../../styles/flatpick.scss";
import flatpickr from "flatpickr";
import blank from "../../img/_.png";
// import closeIcon from "../img/close.svg";
// import expireIcon from "../img/expires.svg";
// import ColorPalette from "./ColorPalette";
import css from "./FoodEditor.module.scss";

class FoodEditor extends React.Component {
  constructor(props) {
    super(props);
    this.addDatePicker = React.createRef();
    this.expDatePicker = React.createRef();
  }
  closeEditor = () => {
    this.props.closeEditor();
  };
  onChange = (selectedDates, dateStr, instance) => {
    this.props.editDate(dateStr, instance.element.id);
  };
  componentDidMount() {
    flatpickr(this.addDatePicker.current, {
      onChange: this.onChange,
      dateFormat: "F j, Y"
    });
    flatpickr(this.expDatePicker.current, {
      onChange: this.onChange,
      dateFormat: "F j, Y"
    });
  }
  render() {
    const visible = this.props.open === false ? "" : css.open;
    const currentItem = this.props.currentItem || null;
    return (
      <div className={`${css.editorView} ${visible}`}>
        <div className={css.editorViewInner}>
          <div className={css.editor}>
            <h2 onClick={this.closeEditor}>{this.props.editorMode} an item</h2>
            <div className={css.photo}>
              <label className={css.photoFile}>
                <input
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  placeholder=""
                />
                <img src={currentItem ? currentItem.img : blank} alt="" />
              </label>
            </div>
            <div className={css.fields}>
              <div className={css.fieldLabel}>
                Item name<span className="req">*</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Item name"
                  style={{ boxShadow: "none" }}
                  value={currentItem ? currentItem.name : ""}
                  onChange={this.props.editField}
                />
              </div>
              <div className={css.fieldLabel}>
                Quantity
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  placeholder="Quantity"
                  onChange={this.props.editField}
                  value={currentItem ? currentItem.quantity : ""}
                />
              </div>
              <div className={css.fieldLabel} style={{ boxShadow: "none" }}>
                Added Date<span className="req">*</span>
                {/* <input
                  type="hidden"
                  id="date"
                  name="date"
                  placeholder="Sep 5, 2019"
                  className="flatpickr-input"
                  value=""
                  onChange={this.props.editField}
                  ref={this.datePicker}
                /> */}
                <input
                  className="flatpickr-input form-control input"
                  placeholder="Sep 5, 2019"
                  type="text"
                  id="added"
                  name="added"
                  // readOnly="readonly"
                  ref={this.addDatePicker}
                />
              </div>
              <div className={css.fieldLabel} style={{ boxShadow: "none" }}>
                Expiration Date (optional)
                {/* <input
                  type="hidden"
                  id="i-exp"
                  name="i-exp"
                  className="flatpickr-input"
                  value=""
                  ref={this.datePicker}
                /> */}
                <input
                  className="flatpickr-input form-control input"
                  placeholder=""
                  type="text"
                  id="expires"
                  name="expires"
                  // readOnly="readonly"
                  ref={this.expDatePicker}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodEditor;
