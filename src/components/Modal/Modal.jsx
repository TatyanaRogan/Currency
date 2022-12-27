import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";

export default function Modal({ el, price }) {
  const inputs = useSelector((store) => store.inputs);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(true);

  const str = new Date().toISOString();

  const date = str.replace(/-/g, ".").replace(/T/g, " ").replace(/Z/g, "");

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_ARR",
      payload: {
        volume: inputs.volume,
        type: el.type,
        price: price,
        side: el.side,
        date: date,
      },
    });
  };

  let arr = useSelector((store) => store.arr);

  sessionStorage.setItem("arr", JSON.stringify(arr));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{ color: "grey" }}>
          Make order
        </DialogTitle>
        <form onSubmit={submitHandler}>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <div>
                <div style={{ color: el.side === "BUY" ? "green" : "red" }}>
                  {el.side}
                </div>
                {price}&nbsp;{el.type}
              </div>

              <TextField
                margin="dense"
                fullWidth
                label="Volume"
                type="text"
                size="small"
                name="volume"
                onChange={(e) =>
                  dispatch({
                    type: "INPUTS_TYPING",
                    payload: {
                      [e.target.name]: e.target.value,
                    },
                  })
                }
              />
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              onClick={handleClose}
              color="primary"
              autoFocus
              type="submit"
            >
              OK
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
