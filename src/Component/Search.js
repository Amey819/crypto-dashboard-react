import React from "react";
import styled from "styled-components";
import { backgroundColor2, fontSize1 } from "./Styles";
import { AppContext } from "./AppProvider";
import { debounce, pickBy, includes } from "lodash";
import fuzzy from "fuzzy";
const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
`;

const Searchbar = styled.input`
  ${backgroundColor2};
  ${fontSize1};
  height: 35px;
  color: white;
  place-self: center left;
  width: 30%;
  border: 2px solid white;
`;

// debounce function stops the event trigger for the given time
const handleInput = debounce((input, setFilteredCoins, coinList) => {
  let coinSymbol = Object.keys(coinList);
  let coinName = coinSymbol.map((sym) => coinList[sym].CoinName);
  let allStringstoSearch = coinSymbol.concat(coinName);
  console.log(allStringstoSearch);
  let fuzzyResults = fuzzy
    .filter(input, allStringstoSearch, {})
    .map((results) => results.string);
  let filteredCoins = pickBy(coinList, (results, symKey) => {
    let coinName = results.coinName;
    return includes(fuzzyResults, symKey) || includes(fuzzyResults, coinName);
  });
  console.log(filteredCoins);
  setFilteredCoins(filteredCoins);
}, 500);

const searchHandler = (e, setFilteredCoins, coinList) => {
  let input = e.target.value;
  if (!input) {
    setFilteredCoins(null);
    return;
  }
  handleInput(input, setFilteredCoins, coinList);
};

const Search = () => {
  return (
    <SearchGrid>
      <h2>Search coins :</h2>
      <AppContext.Consumer>
        {({ setFilteredCoins, coinList }) => (
          <Searchbar
            onKeyUp={(e) => searchHandler(e, setFilteredCoins, coinList)}
          />
        )}
      </AppContext.Consumer>
    </SearchGrid>
  );
};

export default Search;
