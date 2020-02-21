import React, { Component } from "react";
import PokemonCard from "../pokemon-card";
import NavBar from "../navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PokemonField from "../pokemon-field/pokemon-filed";

import { connect } from "react-redux";

import "./app.scss";

import JsonService from "../../services/json-service";
import SideBar from "../sidebar";
import PokemonInfo from "../pokemon-info";
import { fetchPokemons } from '../../actions/catch-action';
import PokemonCaughtField from "../pokemon-caught-field";

class App extends Component {

  jsonService = new JsonService();

  state = {
    pokemons: []
  }



  componentDidMount() {
    this.props.fetchPokemons();
  }

  render() {
    const pokemons = this.props.pokemons;

    return (
      <Router>
        <div>
          <NavBar />
          
            <div className="row">
              {/* <PokemonCaughtField pokemonsObjects={pokemons}/> */}
              <SideBar />
              <Route
                path="/pokemons"
                exact
                render={() => {
                  return <PokemonField pokemonsObjects={pokemons} />;
                }}
              />
              <Route
                path="/pokemons-caught"
                exact
                render={() => {
                  return <PokemonCaughtField pokemonsObjects={pokemons}/>;
                }}
              />
              
              <Route
                path="/pokemons/:id"
                exact
                render={({ match }) => {
                  const { id } = match.params;
                  return <PokemonInfo id={id} itemId={id} />;
                }}
              />
            </div>
          
          
        </div>
      </Router>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    pokemons: state.allPokemonsStore.data,
    isLoading: state.allPokemonsStore.isLoading
  };
};



export default connect(mapStateToProps, {fetchPokemons})(App);
