import React from "react";
import { Route, Redirect } from "react-router-dom";

type Component = {
	children?: Element;
    path: string;
    exact: boolean;
    component: React.LazyExoticComponent<any>;
};

// const PrivateRoute = ({ children, ...rest }: Component) => (
//   <Route
//     {...rest}
//     render={(props) => {
//         const token = sessionStorage.getItem("token");
//         console.log("token is " + token);
//     if (!token) {
//         // not logged in so redirect to login page with the return url
//         return (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: props.location },
//             }}
//           />
//         );
//       }

//       // authorised so return component
//       return children;
//     }}
//   />
// );

const PrivateRoute = ({ children, ...props }: Component) => {
    const token = sessionStorage.getItem("token");
    return (
      <Route {...props}>{token ? children : <Redirect to="/login" />}</Route>
    );
  };

export default PrivateRoute;
