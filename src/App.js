import React from 'react';
import CardList from './components/CardList/CardList';
import SearchBar from './components/SearchBar/SearchBar';
import { connect } from 'react-redux';
import './App.css';
import { requestPokemons } from './redux/pokemon/pokemonActions';
import { setSearchField } from './redux/searchField/searchFieldActions';

class App extends React.Component {

  componentDidMount() {
    this.props.onRequestPokemons();
  }

  render() {
    const filteredPokemons = this.props.pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    });
    return (
      this.props.isPending === true
      ?   <div className="loading-screen text-center">
            <p className="h3">Loading...</p>
          </div>
      :   <div className="container-fluid">
            <div className="header container-fluid d-flex flex-column align-items-center">
              <h1> Poke-Challenge </h1>
              <SearchBar searchMethod={this.props.onSearchChange} />
            </div>
            <CardList pokemons={filteredPokemons}/>
          </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemon.pokemons,
    searchField: state.searchField.searchField,
    isPending: state.pokemon.isPending,
		error: state.pokemon.error
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onRequestPokemons: () => dispatch(requestPokemons()),
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
