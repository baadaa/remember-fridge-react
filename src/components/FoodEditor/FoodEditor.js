import React from "react";
import "../../styles/flatpick.scss";
import flatpickr from "flatpickr";
import blank from "../../img/_.png";
// import closeIcon from "../img/close.svg";
// import expireIcon from "../img/expires.svg";
// import ColorPalette from "./ColorPalette";
import styled from "styled-components";
import photoPrompt from "../../img/add-photo.svg";

const fieldsWidth = 223;
const EditorOverlay = styled.div`
  position: fixed;
  z-index: 3;
  background: rgba(0, 0, 0, 0.9);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s, opacity 0.3s;
  transform: ${props => (props.isOpen ? "translateX(0)" : "translateX(100vw)")};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  & > div {
    width: 100vw;
    height: 100vh;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
  }
`;

const EditorOverlayWrapper = ({ isOpen, children }) => (
  <EditorOverlay isOpen={isOpen}>
    <div>{children}</div>
  </EditorOverlay>
);

const PhotoInput = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  margin-right: 10px;
  width: ${fieldsWidth}px;
  height: ${fieldsWidth}px;
  background-color: #fff;
  background-image: url(${photoPrompt});
  background-size: inherit;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: ${fieldsWidth}px;
    height: ${fieldsWidth}px;
    object-fit: cover;
  }
  label {
    cursor: pointer;
    height: ${fieldsWidth}px;

    input[type="file"] {
      position: fixed;
      top: -1000px;
    }
  }
  @media screen and (max-width: 456px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;
const PhotoBlock = ({ img, takePhoto }) => (
  <PhotoInput>
    <label>
      <input
        type="file"
        id="img"
        name="img"
        accept="image/*"
        placeholder=""
        onChange={takePhoto}
      />
      <img src={img === "" ? blank : img} alt="" />
    </label>
  </PhotoInput>
);

const Form = styled.form`
  width: 600px;
  overflow-y: auto;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  h2 {
    width: 100%;
    margin: 0;
    margin-bottom: 0.6em;
  }
  @media screen and (max-width: 456px) {
    flex-direction: column;
  }
`;

const EditorForm = ({ editorMode, children }) => (
  <Form onSubmit={e => e.preventDefault()}>
    <h2>{editorMode} an item</h2>
    {children}
  </Form>
);

const Fields = styled.div`
  text-align: left;
  width: ${fieldsWidth}px;
`;

const FieldItem = styled.div`
  width: ${fieldsWidth}px;
  height: 47px;
  box-sizing: border-box;
  border-radius: 7px;
  font-size: 0.75rem;
  line-height: 1rem;
  background: #fff;
  padding-top: 0.2rem;
  padding-left: 1rem;
  margin-bottom: 0.7rem;
  color: #999;
  &:last-of-type {
    margin-bottom: 0;
  }
  .req {
    color: red;
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
`;

const TextField = ({ labelText, id, value, editField, isRequired }) => (
  <FieldItem>
    <label htmlFor={id}>{labelText}</label>
    <span className="req" style={{ display: !isRequired ? "none" : "" }}>
      *
    </span>
    <input
      type="text"
      id={id}
      name={id}
      placeholder={labelText}
      onChange={editField}
      value={value}
    />
  </FieldItem>
);

const DateField = React.forwardRef((props, ref) => {
  const { labelText, id, value, isRequired } = props;
  return (
    <FieldItem>
      <label htmlFor={id}>{labelText}</label>
      <span className="req" style={{ display: !isRequired ? "none" : "" }}>
        *
      </span>
      <input
        className="flatpickr-input form-control input"
        placeholder={labelText}
        type="text"
        id={id}
        name={id}
        value={value}
        readOnly="readonly"
        ref={ref}
      />
    </FieldItem>
  );
});

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
    const {
      currentItem: {
        img = "",
        quantity = "",
        name = "",
        added = "",
        expires = ""
      },
      isOpen,
      editorMode,
      takePhoto,
      editField,
      saveChanges,
      addNewItem
    } = this.props;

    return (
      <EditorOverlayWrapper isOpen={isOpen}>
        <EditorForm editorMode={editorMode}>
          <PhotoBlock img={img} takePhoto={takePhoto} />
          <Fields>
            <TextField
              id="name"
              labelText="Item name"
              editField={editField}
              value={name}
              isRequired={true}
            />
            <TextField
              id="quantity"
              labelText="Quantity"
              editField={editField}
              value={quantity}
            />
            <DateField
              id="added"
              labelText="Added date"
              isRequired={true}
              value={added}
              ref={this.addDatePicker}
            />
            <DateField
              id="expires"
              labelText="Expiration date (optional)"
              isRequired={false}
              value={expires}
              ref={this.expDatePicker}
            />
          </Fields>
          <div
            style={{
              display: editorMode === "Edit" ? "block" : "none"
            }}
          >
            <button
              style={{ background: "#333", color: "#FFF" }}
              onClick={saveChanges}
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
          <div
            style={{
              display: editorMode === "Add" ? "block" : "none"
            }}
          >
            <button
              style={{ background: "#333", color: "#FFF" }}
              onClick={addNewItem}
            >
              Add item
            </button>
            <button
              style={{ background: "#333", color: "#FFF" }}
              onClick={this.closeEditor}
            >
              Cancel
            </button>
          </div>
        </EditorForm>
      </EditorOverlayWrapper>
    );
  }
}

export default FoodEditor;
