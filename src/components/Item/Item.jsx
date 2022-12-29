import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "../../App.css";

export default function Item({ el, price }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="item">
      <div style={{ color: el.side === "BUY" ? "green" : "red" }}>
        <strong>
          {el.side}
          <br />
          <div onClick={handleClickOpen}>{price}</div>
        </strong>
      </div>
      {open === true ? (
        <Modal
          el={el}
          key={el.id}
          price={price}
          open={open}
          handleClose={handleClose}
        />
      ) : null}
    </div>
  );
}
