import axios from 'axios'
export const Get100coins = () => {
 const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20& page=1&sparkline=false&locale=en";

   const mycoins= axios.get(url)
         .then(response=>response.data)
         .then(error=>error)
         return mycoins;
}
