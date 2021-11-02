import React from 'react';
import { BrowserRouter as Router,Route, Switch, Redirect } from 'react-router-dom';
import Detail from './Pages/Detail';
import Main from './Pages/Main';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Redirect from="/" to="Main" exact />
        <Route path="/main" component={Main} exact />
        <Route path="Detail" component={Detail} exact />
      </Switch>
    </Router>
    </>
  );
}

export default App;
