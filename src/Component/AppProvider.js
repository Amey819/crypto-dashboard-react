import React from "react";
const cc = require("cryptocompare");
// cc.setApiKey(
//   "2cf4e7d66d8ef78bb69e9bafec9cc311adc7971b87a850eef55a1ca6815fd9e1"
// );
// To Create a global state that could be accessed in components
export const AppContext = React.createContext(); // Create a context to be used across components
export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "Dashboard",
      ...this.savedSettings(),
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
    console.log(coinList.Data);
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
