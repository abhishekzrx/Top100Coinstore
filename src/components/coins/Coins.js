import React from "react";
import "./coin.css";
import CoinItem from "../coinItem/CoinItem";
import Coin from "../../routes/CoinInfo";
import { Link } from "react-router-dom";
const Coins = (props) => {
  console.log(props.coins);
  return (
    <div className="container">
      <div className="coin-header">
        <p>#</p>
        <p>coin</p>
        <p>Price</p>
        <p>24h</p>
        <p>Volume</p>
        <p>Mkt-cap</p>
      </div>
      {props.coins.map((coins) => {
        return (
          <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
            <CoinItem coins={coins} />
          </Link>
        );
      })}
    </div>
  );
};

export default Coins;
