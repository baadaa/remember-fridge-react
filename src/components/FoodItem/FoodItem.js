import React, { useState } from "react";
import {
  FoodCard,
  CardFront,
  CardBack,
  EditButtons,
  DeleteConfirmModal,
  DeleteConfirmBtns
} from "./styledForFoodItem";

const FoodItem = props => {
  const [deleteModal, setDeleteModal] = useState(false);
  const { img, name, quantity, added, expires, editThis } = props;
  return (
    <FoodCard cancelModal={() => setDeleteModal(false)}>
      <CardFront img={img} name={name} quantity={quantity} />
      <CardBack name={name} quantity={quantity} added={added} expires={expires}>
        <EditButtons>
          <button className="edit" onClick={() => editThis(props)}>
            Edit
          </button>
          <button
            className="delete"
            onClick={() => setDeleteModal(!deleteModal)}
          >
            Delete
          </button>
        </EditButtons>
        <DeleteConfirmModal deleting={deleteModal}>
          <h4>Delete this item?</h4>
          <h6>{name}</h6>
          <DeleteConfirmBtns>
            <button
              className="deleteYes"
              onClick={() => props.deleteThis(props.id)}
            >
              Yes<span>delete it</span>
            </button>
            <button
              className="deleteNo"
              onClick={() => setDeleteModal(!deleteModal)}
            >
              No<span>keep it</span>
            </button>
          </DeleteConfirmBtns>
        </DeleteConfirmModal>
      </CardBack>
    </FoodCard>
  );
};

export default FoodItem;
