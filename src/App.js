import { useEffect, useState } from "react";
import "./App.css";
import { Get100coins } from "./Get100coins";
import Navbar from "./components/Nav/Navbar";
import Coins from "./components/coins/Coins";
import {Route,Routes} from "react-router-dom";
import CoinInfo from "./routes/CoinInfo";
function App() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    getData();
  },[]);

const getData = async () => {
    const CoinData = await Get100coins();
    if (CoinData) {
      setCoins(CoinData);
    }
  };
  console.log(coins);
  return (
    <div>
      <Navbar />
      <Routes>
           <Route path="/" element={<Coins coins={coins} />} />  
            <Route path="./coin" element={<CoinInfo />} >
               <Route path=":coinId" element={<CoinInfo />} />
           </Route>
      </Routes>
    </div>
  );
}
export default App;
