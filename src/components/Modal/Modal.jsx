import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

export default function Modal({ el, price }) {
  const [open, setOpen] = useState(true);
  const [volume, setVolume] = useState();

  const str = new Date().toISOString();

  const date = str.replace(/-/g, ".").replace(/T/g, " ").replace(/Z/g, "");

  const submitHandler = async (e) => {
    e.preventDefault();

    let storage = [];
    if (sessionStorage.getItem("arr"))
      storage = JSON.parse(sessionStorage.getItem("arr"));

    const newOrder = {
      volume: volume,
      type: el.type,
      price: price,
      side: el.side,
      date: date,
    };
    storage.push(newOrder);
    sessionStorage.setItem("arr", JSON.stringify(storage));
  };

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
                value={volume}
                fullWidth
                label="Volume"
                type="number"
                size="small"
                name="volume"
                onChange={(event) => setVolume(event.target.value)}
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
