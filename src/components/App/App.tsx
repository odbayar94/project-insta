import React, {lazy} from 'react';
import {Switch, Route} from 'react-router-dom';

const Login = lazy(() => import('../pages/Login'));

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login}/>
    </Switch>
    
   
  );
}

export default App;
