import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={ Inicio } />
          <Route path="/nosotros" component={ Nosotros } />
          <Route path="/contacto" component={ Contacto } />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
