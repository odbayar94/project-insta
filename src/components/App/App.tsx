import React, { useEffect, Fragment, Suspense, lazy } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Cookies from "js-cookie";
import { Header } from "../Header";

import LoadingPage from '../../pages/LoadingPage';

const LoginPage = lazy(()=> import('../../pages/LoginPage'));
const Feed = lazy(() => import('../../pages/Feed'));


function App() {

  const renderApp = ()=>{
    // const token = Cookies.get("token");
    const token = localStorage.getItem("token");
   return( 
    
   <Switch>
     
      <Route path="/login" exact={false}>
     {token ? <Redirect to='/feed'/> : <LoginPage/>}
      </Route>
      <Route path="/feed" exact={false}>
          <Feed/>
      </Route>
      <Route path="/" exact={false}>
          {token ? <Redirect to='/feed'/> : <LoginPage/>}
      </Route>
    </Switch>
   );
  };

  return (
      <Suspense fallback={<LoadingPage />}>
        {renderApp()}
      </Suspense>
  );
}

export default App;
