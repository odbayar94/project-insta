import React, { useEffect, Fragment, Suspense, lazy } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Cookies from "js-cookie";
import Login from '../pages/Login';

import LoadingPage from '../../pages/LoadingPage/LoadingPage';
const LoginPage = lazy(()=> import('../pages/Login'));
function App() {

  const renderApp = ()=>{
    const token = Cookies.get("token");
    if (token) {
      return <LoadingPage />;
    }
    return (<Fragment>
<Switch>
<Route path="/login" component={LoginPage} />
</Switch>
    </Fragment>);
  };



  return (
      <Suspense fallback={<LoadingPage />}>
        {renderApp()}
      </Suspense>
  );
}

export default App;
