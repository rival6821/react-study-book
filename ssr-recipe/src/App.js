import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import Redpage from './pages/RedPage';
import BluePage from './pages/BluePage';

const App = () => {
  return (
    <div>
      <Menu />
      <hr />
      <Route path="/red" component={Redpage} />
      <Route path="/blue" component={BluePage} />
    </div>
  );
};

export default App;
