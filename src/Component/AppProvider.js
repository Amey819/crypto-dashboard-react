import React from "react";
import { pull } from "lodash";
import moment from "moment";
const cc = require("cryptocompare");

cc.setApiKey(
  "2cf4e7d66d8ef78bb69e9bafec9cc311adc7971b87a850eef55a1ca6815fd9e1"
);
// To Create a global state that could be accessed in components
export const AppContext = React.createContext(); // Create a context to be used across components
const MAX_FAVORITES = 10;
export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Dashboard",
      ...this.savedSettings(),
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      setPage: this.setPage,
      fetchPrices: this.fetchPrices,
      setConfirmFavorites: this.setConfirmFavorites,
      confirmFavorites: this.confirmFavorites,
      setFilteredCoins: this.setFilteredCoins,
    };
    console.log(this.state);
  }
  componentWillMount() {
    this.fetchCoins();
    this.fetchPrices();
    this.fetchHistorical();
  }

  savedSettings() {
    let cryptodash = JSON.parse(localStorage.getItem("cryptodash"));
    if (!cryptodash) {
      return { firstVisit: true, page: "Settings" };
    }
    let { favorites, currentFavorites } = cryptodash;
    return { favorites, currentFavorites };
  }

  setConfirmFavorites = (sym) => {
    this.setState({
      currentFavorites: sym,
    });
    this.fetchHistorical();
    localStorage.setItem(
      "cryptodash",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("cryptodash")),
        currentFavorites: sym,
      })
    );
  };

  fetchPrices = async () => {
    // get prices of all favorites
    if (this.state.firstVisit) return;
    let prices = await this.prices();
    // set it to the state
    this.setState({ prices });
  };

  prices = async () => {
    let returnData = [];
    // go through all the favorites
    for (let i = 0; i < this.state.favorites.length; i++) {
      try {
        console.log(this.state.favorites[i]);
        let priceData = await cc.priceFull(this.state.favorites[i], "USD");
        returnData.push(priceData);
      } catch (e) {
        console.warn("Problem Fetching Price", e);
      }
    }
    console.log(returnData);
    return returnData;
  };
  getFilteredCoins() {
    return this.state.filteredCoins;
  }
  setFilteredCoins = (filteredCoins) => {
    this.setState({ filteredCoins });
    console.log(this.state.filteredCoins);
  };
  addCoin = (key) => {
    let favorites = [...this.state.favorites]; // copies the state from array to a new array
    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({ favorites });
      console.log(favorites);
    }
  };

  removeCoin = (key) => {
    // remove the key from the favorites using lodash
    let favorites = [...this.state.favorites];
    this.setState({ favorites: pull(favorites, key) });
  };

  confirmFavorites = () => {
    let currentFavorites = this.state.favorites[0];
    this.setState({
      firstVisit: false,
      page: "Dashboard",
      currentFavorites,
    });
    this.fetchPrices();
    localStorage.setItem(
      "cryptodash",
      JSON.stringify({
        favorites: this.state.favorites,
        currentFavorites,
      })
    );
  };

  fetchCoins = async () => {
    const coinList = await cc.coinList();
    this.setState({ coinList: coinList.Data });
  };
  setPage = (page) => {
    this.setState({ page });
    console.log(this.state);
  };

  fetchHistorical = async () => {
    if (this.state.firstVisit) return;
    let result = await this.historical();
    let historical = {
      name: this.state.currentFavorites,
      data: result.map((ticker, index) => [
        moment()
          .subtract({ months: 10 - index })
          .valueOf(),
        ticker.USD,
      ]),
    };
    this.setState({ historical });
  };

  historical = () => {
    // create an array
    let history = [];
    // loop till 10
    for (let i = 10; i > 0; i--) {
      // get the last 10 days data
      history.push(
        cc.priceHistorical(
          this.state.currentFavorites,
          ["USD"],
          moment().subtract({ months: i }).toDate()
        )
      );
    }
    return Promise.all(history);
  };
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
