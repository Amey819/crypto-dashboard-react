import React from "react";
import { pull } from "lodash";
const cc = require("cryptocompare");

// cc.setApiKey(
//   "2cf4e7d66d8ef78bb69e9bafec9cc311adc7971b87a850eef55a1ca6815fd9e1"
// );
// To Create a global state that could be accessed in components
export const AppContext = React.createContext(); // Create a context to be used across components
const MAX_FAVORITES = 10;
export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Dashboard",
      ...this.savedSettings(),
      favorites: [],
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
    };
    console.log(this.state);
  }
  savedSettings() {
    let cryptodash = JSON.parse(localStorage.getItem("cryptodash"));
    if (!cryptodash) {
      return { firstVisit: true, page: "Settings" };
    }
    return {};
  }

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
    this.setState({
      firstVisit: false,
      page: "Dashboard",
    });
    localStorage.setItem(
      "cryptodash",
      JSON.stringify({
        test: "token",
      })
    );
    console.log(this.state);
  };

  componentWillMount() {
    this.fetchCoins();
  }

  fetchCoins = async () => {
    const coinList = await cc.coinList();
    this.setState({ coinList: coinList.Data });
  };
  setPage = (page) => {
    this.setState({ page: page });
    console.log(this.state);
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
