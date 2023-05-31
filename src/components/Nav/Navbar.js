import React from 'react'
import MoneySharpIcon from '@mui/icons-material/MoneySharp';
import './Navbar.css'
import { orange } from '@mui/material/colors';
import { GiCoins } from 'react-icons/gi';
import { Link } from 'react-router-dom';
const Navbar = () => {
return (
  <Link to="/">
    <div className="nav">
      <MoneySharpIcon sx={{ color: orange[500], fontSize: 70 }} />
      <h1 className="coin">
        <span className="store">Coin</span>Store
      </h1>
      <GiCoins className="coin-store-icon" />
    </div>
  </Link>
);
}
export default Navbar