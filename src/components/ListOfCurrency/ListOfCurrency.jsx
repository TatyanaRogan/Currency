import React, { useState, useEffect, useMemo } from "react";
import { Container } from "@mui/material";
import Item from "../Item/Item";
import "../../App.css";

function ListOfCurrency({ selected }) {
  const [usdBuy, setUsdBuy] = useState(
    (Math.random() * (70 - 68 + 1) + 68).toFixed(4)
  );

  const [usdSell, setUsdSell] = useState(
    (Math.random() * (68 - 65 + 1) + 65).toFixed(4)
  );

  const [euroBuy, setEuroBuy] = useState(
    (Math.random() * (75 - 70 + 1) + 70).toFixed(4)
  );

  const [euroSell, setEuroSell] = useState(
    (Math.random() * (73 - 69 + 1) + 69).toFixed(4)
  );

  const [searchedValute, setSearchedValute] = useState([]);

  function random(min, max) {
    return (Math.random() * (max - min + 1) + min).toFixed(4);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setUsdBuy(random(68, 70));
      setUsdSell(random(65, 68));
      setEuroBuy(random(70, 75));
      setEuroSell(random(69, 73));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const val = useMemo(
    () => [
      {
        id: 1,
        type: "USD/RUB_TOM",
        side: "BUY",
        price: usdBuy,
      },
      {
        id: 2,
        type: "USD/RUB_TOM",
        side: "SELL",
        price: usdSell,
      },
      {
        id: 3,
        type: "EUR/RUB_TOM",
        side: "BUY",
        price: euroBuy,
      },
      {
        id: 4,
        type: "EUR/RUB_TOM",
        side: "SELL",
        price: euroSell,
      },
    ],
    [usdBuy, usdSell, euroBuy, euroSell]
  );

  useEffect(() => {
    const result = val.filter((el) => el.type === selected);

    setSearchedValute(result);
  }, [selected, val]);

  return (
    <div className="App">
      <Container maxWidth="md">
        <div className="items">
          {searchedValute.map((el) => (
            <Item el={el} key={el.id} price={el.price} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default ListOfCurrency;
