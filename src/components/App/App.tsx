import React, { useEffect, Fragment, Suspense, lazy } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Cookies from "js-cookie";


import LoadingPage from '../../pages/LoadingPage';

const LoginPage = lazy(()=> import('../../pages/LoginPage'));
const HomePage = lazy(() => import('../../pages/HomePage'));


function App() {

  const renderApp = ()=>{
    const token = Cookies.get("token");
    if (!token)
        return <LoginPage/>;

    return <HomePage/>;
  };

  return (
      <Suspense fallback={<LoadingPage />}>
        {renderApp()}
      </Suspense>
  );
}

export default App;
