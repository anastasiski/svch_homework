import React from 'react';
import { PopularMoviesComponent } from './components/PopularMoviesComponent';
import { MovieComponent } from './components/MovieComponent';
import { Route } from 'react-router';
import './style.css';
function App() {
  return <div className="App">
    <Route exact path='/' component={PopularMoviesComponent} />
    <Route exaxt path='/movie/:movieId' component={MovieComponent} />
  </div>;
}

export default App;
