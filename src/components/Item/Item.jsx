import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "../../App.css";

export default function Item({ el, price }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className="item" onClick={handleClickOpen}>
      <div style={{ color: el.side === "BUY" ? "green" : "red" }}>
        <strong>
          {el.side}
          <br />
          {price}
        </strong>
      </div>
      {open === true ? (
        <Modal el={el} key={el.id} price={price} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
