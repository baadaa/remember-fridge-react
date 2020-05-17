import React from "react";
import "../../styles/flatpick.scss";
import flatpickr from "flatpickr";
import blank from "../../img/_.png";
import styled from "styled-components";
import photoPrompt from "../../img/add-photo.svg";

const EditorOverlay = styled.div`
  position: absolute;
  z-index: 100;
  background: var(--settingOverlayBg);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  color: #fff;
  transition: transform 0.3s, opacity 0.3s;
  transform: ${props =>
    props.isOpen ? "translateX(0)" : "translateX(-100vw)"};
  opacity: ${props => (props.isOpen ? 1 : 0)};
`;

const EditorOverlayWrapper = ({ isOpen, children }) => (
  <EditorOverlay isOpen={isOpen}>{children}</EditorOverlay>
);

const PhotoInput = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  margin-right: 10px;
  width: 150px;
  height: 150px;
  background-color: #fff;
  border: 1px solid #c8c8c8;
  border-color: ${props => (props.missing ? "var(--missingField)" : "#c8c8c8")};
  background-image: url(${photoPrompt});
  background-size: inherit;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  label {
    cursor: pointer;
    height: 150px;

    input[type="file"] {
      position: fixed;
      top: -1000px;
      left: -1000px;
    }
  }
  @media screen and (max-width: 800px) {
    width: 100px;
    height: 100px;
    img {
      width: 100px;
      height: 100px;
    }
    label {
      height: 100px;
    }
  }
  @media screen and (max-width: 456px) {
    margin-right: 0;
    margin-bottom: 15px;
  }
`;
const TopSectionWrapper = styled.div`
  margin-left: 80px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (max-width: 800px) {
    margin-bottom: 20px;
  }
  label {
    display: flex;
    cursor: pointer;
    color: var(--uncheckedIconLabel);
    font-size: 14px;
    align-items: center;
  }
  input.sectionChange,
  label.sectionChange {
    margin-top: 5px;
  }
  input[type="radio"] {
    opacity: 0;
    position: fixed;
    width: 0;
    &:focus + label {
      border-color: var(--checkIconColor);
      color: var(--checkIconLabel);
    }
    &:checked + label {
      border-color: var(--checkIconColor);
      color: var(--checkIconLabel);
      .circle {
        background: var(--checkIconColor);
        border-color: var(--checkIconColor);
      }
    }
    &:checked + label .circle {
      background-image: url("data:image/svg+xml,%3Csvg width='13' height='9' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l5.5 7L12 1' stroke='%23FFF' stroke-width='2' fill='none' fill-rule='evenodd'/%3E%3C/svg%3E");
      background-size: 11px;
      background-position: center;
      background-repeat: no-repeat;
      border-color: #39b3ca;
      overflow: visible;
    }
  }
  .circle {
    background: #fff;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    margin-right: 7px;
    border: 1px solid #bbb;
  }
`;

const Form = styled.form`
  max-width: 350px;
  margin: 0 auto;
  h2 {
    width: 100%;
    margin: 0;
    margin-bottom: 0.6em;
    text-align: center;
    color: var(--overlayHeading);
    span {
      text-transform: capitalize;
    }
  }
  @media screen and (max-width: 456px) {
    flex-direction: column;
  }
`;

const EditorForm = ({ editorMode, children }) => (
  <Form onSubmit={e => e.preventDefault()}>
    <h2>
      <span>{editorMode}</span> an item
    </h2>
    {children}
  </Form>
);

const Fields = styled.div`
  text-align: left;
`;

const FieldItem = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  line-height: 1rem;
  margin-bottom: 0.7rem;
  color: #999;
  height: 47px;
  label {
    color: var(--formLabelText);
    font-weight: 700;
    flex-basis: 80px;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
  .req {
    color: red;
  }
  .inputStyle {
    background: var(--formFieldBg);
    flex: 1;
    border-radius: 4px;
    box-sizing: border-box;
    border: ${props => (props.missing ? "1px solid var(--missingField)" : "")};
    input {
      box-sizing: border-box;
      background: rgba(0, 0, 0, 0);
      width: 100%;
      height: 47px;
      padding-left: 1rem;
      border: 0;
      color: var(--content);
      border-radius: 7px;
      font-size: 1rem;
    }
  }
`;

const TextField = ({
  labelText,
  id,
  value,
  editField,
  isRequired,
  nameMissing
}) => (
  <FieldItem missing={nameMissing}>
    <label htmlFor={id}>
      {labelText}
      <span className="req" style={{ display: !isRequired ? "none" : "" }}>
        *
      </span>
    </label>
    <div className="inputStyle">
      <input
        type="text"
        id={id}
        name={id}
        placeholder={labelText}
        onChange={editField}
        value={value}
      />
    </div>
  </FieldItem>
);

const DateField = React.forwardRef((props, ref) => {
  const { labelText, id, value, isRequired, dateMissing } = props;
  return (
    <FieldItem isRequired={isRequired} missing={dateMissing}>
      <label htmlFor={id}>
        {labelText}
        <span className="req" style={{ display: !isRequired ? "none" : "" }}>
          *
        </span>
      </label>
      <div
        className="inputStyle"
        style={{
          border:
            isRequired && props.missing ? "1px solid var(--missingField)" : ""
        }}
      >
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
      </div>
    </FieldItem>
  );
});

const ButtonBlock = styled.div`
  margin-left: 80px;
  margin-top: 20px;
  display: none;
  &.active {
    display: flex;
  }
  box-sizing: border-box;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    margin-left: 0;
  }
  flex-wrap: wrap;

  button {
    border: none;
    outline: none;
    border-radius: 30px;
    background: #333;
    padding: 10px 20px;
    height: 45px;
    font-size: 14px;
    font-weight: 700;
    flex-basis: 48%;
    transition: opacity 0.3s, transform 0.3s;
    &.save {
      background: var(--saveButton);
      transform: ${props =>
        !props.isRemoving ? "translateY(0)" : "translateY(45px)"};
      opacity: ${props => (!props.isRemoving ? 1 : 0)};
      pointer-events: ${props => (!props.isRemoving ? "all" : "none")};
    }
    &.cancel {
      background: transparent;
      border: 1px solid var(--cancelButton);
      color: var(--cancelButton);
      transform: ${props =>
        !props.isRemoving ? "translateY(0)" : "translateY(45px)"};
      opacity: ${props => (!props.isRemoving ? 1 : 0)};
      pointer-events: ${props => (!props.isRemoving ? "all" : "none")};
    }
    &.remove {
      transform: ${props =>
        props.isRemoving ? "translateY(-45px)" : "translateY(0)"};
      opacity: ${props => (props.isRemoving ? 1 : 0)};
      pointer-events: ${props => (props.isRemoving ? "all" : "none")};
      background: var(--removeButton);
    }
    &.cancelRemoval {
      transform: ${props =>
        props.isRemoving ? "translateY(-45px)" : "translateY(0)"};
      opacity: ${props => (props.isRemoving ? 1 : 0)};
      pointer-events: ${props => (props.isRemoving ? "all" : "none")};
      background: transparent;
      border: 1px solid var(--removeCancelButton);
      color: var(--removeCancelButton);
    }
    &.removePrompt {
      flex-basis: 100%;
      margin-left: 0;
      padding: 0;
      height: auto;
      text-align: center;
      background: transparent;
      color: var(--removeButton);
      text-decoration: underline;
    }
  }
  .errorMsg {
    display: block;
    flex-basis: 100%;
    margin-top: 10px;
    font-size: 14px;
    font-weight: 700;

    color: var(--missingField);
  }
`;

class FoodEditor extends React.Component {
  state = {
    isRemoving: false,
    nameMissing: false,
    addedDateMissing: false,
    error: false
  };
  addDatePicker = React.createRef();
  expDatePicker = React.createRef();
  closeEditor = () => {
    const editorLaunchedIn = this.props.editorLaunchIn;
    const currentFridgeState = this.props.currentSection;
    const closingAs =
      editorLaunchedIn !== currentFridgeState
        ? editorLaunchedIn
        : currentFridgeState;
    this.resetMissing();
    this.props.closeEditor(closingAs);
  };
  onChangeDate = (selectedDates, dateStr, instance) => {
    this.setState({ addedDateMissing: false, error: false });
    this.props.editDate(dateStr, instance.element.id);
  };
  deleteFromEditor = () => {
    this.props.deleteFromEditor();
  };
  resetMissing = () => {
    this.setState({
      nameMissing: false,
      addedDateMissing: false,
      error: false
    });
  };
  editField = item => {
    this.resetMissing();
    this.props.editField(item);
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
  changeSection = e => {
    this.props.sectionChange(e.target);
    this.props.editCategory(e.target.value);
  };
  takePhoto = e => {
    this.resetMissing();
    this.props.takePhoto(e);
  };
  validate = e => {
    const mode = e.target.dataset.mode;
    const {
      currentItem: { img = "", name = "", added = "" }
    } = this.props;
    if (img === "" && name === "") {
      this.setState({ nameMissing: true, error: true });
      return;
    }
    if (added === "") {
      this.setState({ addedDateMissing: true, error: true });
      return;
    }
    this.resetMissing();
    if (mode === "edit") {
      this.props.saveChanges();
    } else {
      this.props.addItem();
    }
  };
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
      currentSection
    } = this.props;

    const TopSection = ({ img, takePhoto }) => (
      <TopSectionWrapper>
        <PhotoInput missing={this.state.nameMissing}>
          <label>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              placeholder=""
              onChange={this.takePhoto}
            />
            <img src={img === "" ? blank : img} alt="" />
          </label>
        </PhotoInput>
        <div style={{ padding: "10px" }}>
          <input
            className="sectionChange"
            type="radio"
            id="fridge"
            name="sectionSelector"
            value="fridge"
            checked={currentSection === "fridge"}
            onChange={this.changeSection}
          />
          <label className="sectionChange" htmlFor="fridge">
            <span className="circle"></span>
            Fridge
          </label>

          <input
            className="sectionChange"
            type="radio"
            id="freezer"
            name="sectionSelector"
            value="freezer"
            checked={currentSection === "freezer"}
            onChange={this.changeSection}
          />
          <label className="sectionChange" htmlFor="freezer">
            <span className="circle"></span>
            Freezer
          </label>
        </div>
      </TopSectionWrapper>
    );

    return (
      <EditorOverlayWrapper isOpen={isOpen}>
        <EditorForm editorMode={editorMode}>
          <TopSection img={img} takePhoto={takePhoto} />
          <Fields>
            <TextField
              id="name"
              labelText="Item name"
              editField={this.editField}
              value={name}
              isRequired={true}
              nameMissing={this.state.nameMissing}
            />
            <TextField
              id="quantity"
              labelText="Quantity"
              editField={this.editField}
              value={quantity}
            />
            <DateField
              id="added"
              labelText="Added on"
              isRequired={true}
              value={added}
              ref={this.addDatePicker}
              missing={this.state.addedDateMissing}
            />
            <DateField
              id="expires"
              labelText="Expires on"
              isRequired={false}
              value={expires}
              ref={this.expDatePicker}
              missing={false}
            />
          </Fields>
          <ButtonBlock
            isRemoving={this.state.isRemoving}
            className={editorMode === "edit" ? "active" : ""}
          >
            <button className="save" data-mode="edit" onClick={this.validate}>
              Save
            </button>
            <button className="cancel" onClick={this.closeEditor}>
              Cancel
            </button>
            <button className="remove" onClick={this.deleteFromEditor}>
              Remove it
            </button>
            <button
              className="cancelRemoval"
              onClick={() =>
                this.setState({ isRemoving: !this.state.isRemoving })
              }
            >
              Keep it
            </button>
            <button
              className="removePrompt"
              onClick={() =>
                this.setState({ isRemoving: !this.state.isRemoving })
              }
            >
              {this.state.isRemoving
                ? "This action cannot be undone."
                : "Remove this item"}
            </button>
          </ButtonBlock>
          <ButtonBlock className={editorMode === "add" ? "active" : ""}>
            <button className="save" data-mode="add" onClick={this.validate}>
              Add item
            </button>
            <button className="cancel" onClick={this.closeEditor}>
              Cancel
            </button>
            <span
              className="errorMsg"
              style={{ display: this.state.error ? "block" : "none" }}
            >
              {this.state.nameMissing
                ? "Please provide a name or a photo."
                : "Please provide added date."}
            </span>
          </ButtonBlock>
        </EditorForm>
      </EditorOverlayWrapper>
    );
  }
}

export default FoodEditor;
