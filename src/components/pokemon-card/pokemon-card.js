import React, { Component } from "react";
import "./pokemon-card.scss";
import { Link } from "react-router-dom";

import { catchPokemon } from '../../actions/catch-action';
import { connect } from "react-redux";

class PokemonCard extends Component {


  onBthHandler = () => {
    this.props.catchPokemon(this.props.id)
  };



  render() {
    const { name, isCatched, id } = this.props;
    const srcImage = `../../../pokemons/${id}.png`;

    return (
      <div className="pokemon-card">
        <div className="card text-white bg-success wrep">
          <Link to={`/pokemons/${id}`}><div onClick={this.headerClick} className="card-header text-center">{name.toUpperCase()}</div></Link>
          <div className="card-body">
            <div className="card-image">
              <img src={srcImage}></img>
            </div>
            <h4 className="card-title"> ID {id}</h4>
            <div>
              {isCatched ? <button type="button" className="btn btn-primary disabled">
                Catch
              </button> : <button onClick={this.onBthHandler} type="button" className="btn btn-primary">
                Catch
              </button>}
            </div>
          </div>
        </div>
      </div>
      // =========================================================================================================
    //   <div>
    //     <div className="card mb-3">
    //       <h3 className="card-header">Card header</h3>
    //       <div className="card-body">
    //         <h5 className="card-title">Special title treatment</h5>
    //         <h6 className="card-subtitle text-muted">Support card subtitle</h6>
    //       </div>
    //       <img  src={srcImage}></img>
    //       <div className="card-body">
    //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //       </div>
    //       <ul className="list-group list-group-flush">
    //         <li className="list-group-item">Cras justo odio</li>
    //         <li className="list-group-item">Dapibus ac facilisis in</li>
    //         <li className="list-group-item">Vestibulum at eros</li>
    //       </ul>
    //       <div className="card-body">
    //         <a href="#" className="card-link">Card link</a>
    //         <a href="#" className="card-link">Another link</a>
    //       </div>
    //       <div className="card-footer text-muted">
    //         2 days ago
    //       </div>
    //     </div>

    //   <div className="card">
    //     <div className="card-body">
    //       <h4 className="card-title">Card title</h4>
    //       <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
    //       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //       <a href="#" className="card-link">Card link</a>
    //       <a href="#" className="card-link">Another link</a>
    //     </div>
    //   </div>
    // </div>
    );
  }
}

export default connect(null, {catchPokemon})(PokemonCard);
