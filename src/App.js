import React, { Component } from 'react';
import api from './api';

class App extends Component {

  state = {
    filmes: [],
  }

  async componentDidMount(){
    const response = await api.get('marvel');

    this.setState({ filmes: response.data });
  }

  render(){
    const { filmes } = this.state;

    return (
      <div className="container">
        <h1 className="text-center mt-5">Películas de Marvel</h1>
        <div className="row">
          {filmes.map(filme => (
          <div className="col-md-3 mt-5">
            <img src={filme.show.image.medium} className="card-img-top" data-toggle="modal" data-target={'#exampleModal' + filme.show.id} />
            <div className="card-body">
              <h5 className="card-title">{filme.show.name}</h5>
              <p className="card-text module line-clamp">{filme.show.summary}</p>
              <div className="text-center">
                <a href={filme.show.url} className="btn btn-primary" target="_blank">Ver detalle</a>
              </div>
            </div>
            <div class="modal fade" id={'exampleModal' + filme.show.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{filme.show.name}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <img src={filme.show.image.original} className="card-img-top img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div> 
          ))}
        </div>
      </div>
    );
  };


};

export default App;
