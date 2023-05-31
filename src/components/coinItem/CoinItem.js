import React from 'react'
import './CoinItem.css'
import { convertNumber } from '../../Functions/convertNumber';
import {Link} from 'react-router-dom'
const CoinItem = (props) => {
       
  return (
    <div className="coin-row">
      <p>{props.coins.market_cap_rank}</p>
      <div className="img-symbol">
        <img src={props.coins.image} />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>
        <span>$</span>
        {props.coins.current_price.toLocaleString()}
      </p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p>{props.coins.total_volume.toLocaleString()}</p>
      <p className="hide-mobile">
        <span>$</span>

          {convertNumber(props.coins.market_cap)}
      </p>
    </div>
  );
}

export default CoinItem