import React from "react";
import styled from "@emotion/styled";
import Color from "color";
import addIcon from "../img/added.svg";
import closeIcon from "../img/close.svg";
import expireIcon from "../img/expires.svg";
import ColorPalette from "./ColorPalette";

const Food = styled.article`
  margin-bottom: 20px;
  margin-right: 20px;
  position: relative;
  &:hover {
    transform: scale(1.05);
  }
  &:nth-of-type(4n) {
    margin-right: 0;
  }
  @media screen and (max-width: 760px) {
    &:nth-of-type(4n) {
      margin-right: 20px;
    }
    &:nth-of-type(3n) {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 570px) {
    &:nth-of-type(3n) {
      margin-right: 20px;
    }
    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }
  transition: transform 0.2s;
  perspective: 1000px;
  .flipper {
    width: 170px;
    height: 170px;
    transition: transform 0.3s;
    transform-style: preserve-3d;
    position: relative;
    @media screen and (max-width: 380px) {
      width: 150px;
      height: 150px;
    }
    @media screen and (max-width: 340px) {
      width: 130px;
      height: 130px;
    }
  }
  &.flipped {
    .flipper {
      transform: rotateY(180deg);
    }
  }
  .front,
  .back {
    width: 170px;
    box-sizing: border-box;
    height: 170px;
    border-radius: 10px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    @media screen and (max-width: 380px) {
      width: 150px;
      height: 150px;
    }
    @media screen and (max-width: 340px) {
      width: 130px;
      height: 130px;
    }
  }
  .front {
    z-index: 2;
    transform: rotateY(0deg);
    h2 {
      position: absolute;
      right: -5px;
      top: 5px;
      font-size: 12px;
      background: #fff;
      padding: 5px 10px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
      max-width: 120px;
      &::after {
        content: "";
        position: absolute;
        right: 0;
        bottom: -5px;
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 5px 5px 0 0;
        border-color: #777 transparent transparent transparent;
      }
    }
    .quantity {
      font-weight: 700;
      font-size: 10px;
      position: absolute;
      left: 5px;
      line-height: 1;
      bottom: 5px;
      padding: 8px;
      border-radius: 30px;
      background: rgba(0, 0, 0, 0.75);
      color: ${ColorPalette.$berry};
      color: #fff;
      box-shadow: 0 1px 5px rgba(0, 0, 0, 0.75);
    }
  }
  .back {
    padding: 10px;
    transform: rotateY(180deg);
  }
`;
const FoodImg = styled.img`
  cursor: pointer;
  width: 170px;
  height: 170px;
  border-radius: 10px;
  object-fit: cover;
  @media screen and (max-width: 380px) {
    width: 150px;
    height: 150px;
  }
  @media screen and (max-width: 340px) {
    width: 130px;
    height: 130px;
  }
`;

const FoodDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  // padding-right: 10px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  h2 {
    margin: 0;
    font-size: 18px;
    line-height: 1.2;
    font-weight: 400;
  }
  .quantity {
    position: static;
    font-size: 14px;
    line-height: 1;
    box-shadow: none;
    padding: 0;
    color: #000;
    font-weight: 400;
    &::before {
      content: "(";
    }
    &::after {
      content: ")";
    }
  }
  .dates {
    font-weight: 200;
    font-size: 12px;
    display: flex;
    align-items: center;
    &:first-of-type {
      margin-top: 8px;
    }
    .addedIcon {
      width: 16px;
      height: 20px;
      margin-right: 5px;
    }
    .expireIcon {
      width: 16px;
      height: 16px;
      margin-right: 5px;
      padding-top: 3px;
    }
  }
  .closeItem {
    position: absolute;
    cursor: pointer;
    right: -5px;
    top: -5px;
    width: 25px;
    height: 25px;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const EditBtns = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  button {
    width: 50%;
    position: absolute;
    bottom: 0;
    font-size: 13px;
    box-sizing: border-box;
    outline: none;
    border: none;
    color: #fff;
    padding: 5px;
    font-weight: 700;
    transition: background 0.2s;
    &.edit {
      left: 0;
      background: ${ColorPalette.$yellow};
      border-radius: 0 0 0 10px;
      &:hover {
        background: ${Color(ColorPalette.$yellow)
          .darken(0.15)
          .rgb()
          .string()};
      }
    }
    &.delete {
      right: 0;
      background: ${ColorPalette.$berry};
      border-radius: 0 0 10px 0;
      &:hover {
        background: ${Color(ColorPalette.$berry)
          .darken(0.15)
          .rgb()
          .string()};
      }
    }
  }
`;
class FoodItem extends React.Component {
  state = {
    flipped: false,
    name: this.props.name,
    added: this.props.added,
    expires: this.props.expires,
    quantity: this.props.quantity
  };
  flip = () => {
    this.state.flipped
      ? this.setState({ flipped: false })
      : this.setState({ flipped: true });
  };
  render() {
    const flipClass = this.state.flipped ? "flipped" : "";

    const name = this.state.name ? <h2>{this.state.name}</h2> : "";
    const quantity = this.state.quantity ? (
      <span className="quantity">{this.state.quantity}</span>
    ) : (
      ""
    );
    const added = this.state.added ? (
      <div className="dates">
        <img className="addedIcon" src={addIcon} alt="" />
        {this.state.added}
      </div>
    ) : (
      ""
    );
    const expires = this.state.expires ? (
      <div className="dates">
        <img className="expireIcon" src={expireIcon} alt="" />
        {this.state.expires}
      </div>
    ) : (
      ""
    );

    return (
      <Food className={flipClass}>
        <div className="flipper">
          <div className="front" onClick={this.flip}>
            <FoodImg src={this.props.img} />
            {name}
            {quantity}
          </div>
          {/* <div className="back"> */}
          <FoodDetail className="back">
            {name}
            {quantity}
            {added}
            {expires}
            <EditBtns>
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </EditBtns>
            <img
              src={closeIcon}
              className="closeItem"
              onClick={this.flip}
              alt=""
            />
          </FoodDetail>
          {/* </div> */}
        </div>
      </Food>
    );
  }
}

export default FoodItem;
