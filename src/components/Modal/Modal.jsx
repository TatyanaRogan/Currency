import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

export default function Modal({ open, el, handleClose }) {
  const [volume, setVolume] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (volume !== "" && +volume > 0) {
      setFormValid(true);
      setError("Volume is correct");
    } else {
      setFormValid(false);
      setError("Volume must be greater than 0");
    }
  }, [volume]);

  const str = new Date().toISOString();

  const date = str.replace(/-/g, ".").replace(/T/g, " ").replace(/Z/g, "");

  const submitHandler = async (e) => {
    e.preventDefault();

    handleClose();

    let storage = [];
    if (sessionStorage.getItem("arr"))
      storage = JSON.parse(sessionStorage.getItem("arr"));

    const newOrder = {
      volume: volume,
      type: el.type,
      price: el.price,
      side: el.side,
      date: date,
    };

    storage.push(newOrder);
    sessionStorage.setItem("arr", JSON.stringify(storage));
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="title">
          <div>
            <DialogTitle id="alert-dialog-title" style={{ color: "grey" }}>
              Make order
            </DialogTitle>
          </div>

          <div onClick={handleClose} className="cl-btn-7"></div>
        </div>
        <hr style={{ margin: "0px 0" }} />

        <form>
          <DialogContent>
            <div className="body">
              <div style={{ color: el.side === "BUY" ? "green" : "red" }}>
                {el.side}
              </div>
              <div style={{ color: "grey" }}>
                {el.price}&nbsp;{el.type}
              </div>
            </div>

            <TextField
              required
              id="filled-required"
              margin="dense"
              value={volume}
              fullWidth
              label="Volume"
              type="number"
              size="small"
              name="volume"
              onChange={(event) => setVolume(event.target.value)}
            />
            <div style={{ color: "red" }}>{error}</div>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button
              disabled={!formValid}
              onClick={submitHandler}
              color="primary"
            >
              OK
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
