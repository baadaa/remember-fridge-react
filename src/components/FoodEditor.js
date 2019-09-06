import React from "react";
import styled from "@emotion/styled";
// import Color from "color";
// import "flatpickr/dist/themes/light.css";
import "../styles/flatpick.scss";
import flatpickr from "flatpickr";
import addPhoto from "../img/add-photo.svg";
import blank from "../img/_.png";
// import closeIcon from "../img/close.svg";
// import expireIcon from "../img/expires.svg";
// import ColorPalette from "./ColorPalette";

const EditorView = styled.div`
  position: absolute;
  z-index: 3;
  background: rgba(0, 0, 0, 0.85);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transform: translateX(100vw);
  transition: transform 0.3s;
  &.open {
    transform: translateX(0);
  }
`;

const Editor = styled.div`
  width: 600px;
  overflow-y: auto;
  text-align: center;
  border: 1px solid red;
  .photo-file {
    cursor: pointer;
    input[type="file"] {
      position: fixed;
      top: -1000px;
    }
  }
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 456px) {
    flex-direction: column;
  }
  h2 {
    width: 100%;
    margin: 0;
    margin-bottom: 0.6em;
  }
  .photo {
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 10px;
    margin-right: 10px;
    width: 223px;
    height: 223px;
    background-color: #fff;
    background-image: url(${addPhoto});
    background-size: inherit;
    box-shadow: none;
    cursor: pointer;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 200px;
      height: 200px;
    }
    @media screen and (max-width: 456px) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
  .fields {
    text-align: left;
    width: 223px;
    .field-label {
      width: 223px;
      height: 47px;
      box-sizing: border-box;
      border-radius: 7px;
      font-size: 0.5rem;
      line-height: 1rem;
      background: #fff;
      padding-top: 0.2rem;
      padding-left: 1rem;
      margin-bottom: 0.7rem;
      &:last-of-type {
        margin-bottom: 0;
      }
      color: #999;
      .req {
        color: $berry;
      }

      input {
        margin-top: -1.2rem;
        margin-left: -1rem;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0);
        width: 195px;
        height: 47px;
        padding-top: 1.1rem;
        padding-left: 1rem;
        border: 0;
        color: #000;
        border-radius: 7px;
        font-size: 1rem;
      }
    }
  }
`;
class FoodEditor extends React.Component {
  constructor(props) {
    super(props);
    this.addDatePicker = React.createRef();
    this.expDatePicker = React.createRef();
  }
  onChange(selectedDates, dateStr, instance) {
    console.log(selectedDates);
  }
  componentDidMount() {
    flatpickr(this.addDatePicker.current, {
      onChange: this.onChange
    });
    flatpickr(this.expDatePicker.current, {
      onChange: this.onChange
    });
  }
  render() {
    const visible = this.props.open === false ? "" : "open";

    return (
      <EditorView className={visible}>
        <div
          style={{
            border: "1px solid red",
            width: "100vw",
            height: "100vh",
            display: "flex",
            position: "fixed",
            top: "0",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Editor>
            <h2>Add an item</h2>
            <div className="photo">
              <label className="photo-file">
                <input
                  type="file"
                  id="i-image"
                  name="i-image"
                  accept="image/*"
                  placeholder=""
                />
                <img src={blank} alt="" />
              </label>
            </div>
            <div className="fields">
              <div className="field-label">
                Item name<span className="req">*</span>
                <input
                  type="text"
                  id="i-name"
                  name="i-name"
                  placeholder="Item name"
                  style={{ boxShadow: "none" }}
                />
              </div>
              <div className="field-label">
                Quantity
                <input
                  type="text"
                  id="i-quantity"
                  name="i-quantity"
                  placeholder="Quantity"
                />
              </div>
              <div className="field-label" style={{ boxShadow: "none" }}>
                Added Date<span className="req">*</span>
                {/* <input
                  type="hidden"
                  id="i-date"
                  name="i-date"
                  placeholder="Sep 5, 2019"
                  className="flatpickr-input"
                  value=""
                  ref={this.datePicker}
                /> */}
                <input
                  className="flatpickr-input form-control input"
                  placeholder="Sep 5, 2019"
                  type="text"
                  readOnly="readonly"
                  ref={this.addDatePicker}
                />
              </div>
              <div className="field-label" style={{ boxShadow: "none" }}>
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
                  readOnly="readonly"
                  ref={this.expDatePicker}
                />
              </div>
            </div>
          </Editor>
        </div>
      </EditorView>
    );
  }
}

export default FoodEditor;
