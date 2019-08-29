import React from "react";
import styled from "@emotion/styled";
import addIcon from "../img/added.svg";
import expireIcon from "../img/expires.svg";

const Food = styled.article`
  border-radius: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 20px;
  display: flex;
  position: relative;
  flex-basis: 350px;
  @media screen and (min-width: 600px) {
    flex-basis: 49%;
  }
  @media screen and (min-width: 850px) {
    flex-basis: 32%;
  }
`;
const FoodImg = styled.img`
  width: 130px;
  height: 130px;
  object-fit: cover;
  margin-right: 10px;
`;
const FoodDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 10px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  h2 {
    margin: 0;
    font-size: 18px;
    line-height: 1.2;
    font-weight: 400;
    margin-bottom: 8px;
  }
  .quantity {
    font-weight: 700;
    font-size: 10px;
    position: absolute;
    left: 10px;
    line-height: 1;
    bottom: 10px;
    padding: 8px;
    border-radius: 30px;
    background: #fff;
  }
  .dates {
    font-weight: 200;
    font-size: 12px;
    display: flex;
    align-items: center;
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
`;
class FoodItem extends React.Component {
  render(props) {
    const name = this.props.name ? <h2>{this.props.name}</h2> : "";
    const quantity = this.props.quantity ? (
      <span className="quantity">{this.props.quantity}</span>
    ) : (
      ""
    );
    const added = this.props.added ? (
      <div className="dates">
        <img className="addedIcon" src={addIcon} alt="" />
        {this.props.added}
      </div>
    ) : (
      ""
    );
    const expires = this.props.expires ? (
      <div className="dates">
        <img className="expireIcon" src={expireIcon} alt="" />
        {this.props.expires}
      </div>
    ) : (
      ""
    );

    return (
      <Food>
        <FoodImg src={this.props.img} />
        <FoodDetail>
          {name}
          {quantity}
          {added}
          {expires}
        </FoodDetail>
      </Food>
    );
  }
}

export default FoodItem;
