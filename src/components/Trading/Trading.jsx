import React, { useState } from "react";
import { Container } from "@mui/material";
import Moment from "react-moment";
import "../../App.css";
import ListOfCurrency from "../ListOfCurrency/ListOfCurrency";

export default function Trading() {
  const [selected, setSelected] = useState("");

  return (
    <div className="App">
      <Container maxWidth="md">
        <div className="time">
          <Moment format="HH:mm:ss" interval={1000} />
        </div>
        <div className="styled-select">
          <select
            value={selected}
            onChange={(event) => setSelected(event.target.value)}
          >
            <option value="Валюта">Выберите валюту</option>
            <option value="USD/RUB_TOM">USD/RUB_TOM</option>
            <option value="EUR/RUB_TOM">EUR/RUB_TOM</option>
          </select>
        </div>

        {selected !== "Валюта" ? <ListOfCurrency selected={selected} /> : null}
      </Container>
    </div>
  );
}
