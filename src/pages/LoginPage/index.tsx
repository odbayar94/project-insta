import React, { useEffect,useState } from 'react';
import { Button } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../redux/user/userActions"

import { useAppSelector, useAppDispatch } from '../../redux/hooks'

const LoginPage = () => {
  const user = useAppSelector(state => state.userReducer); 
  const dispatch = useAppDispatch();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

const changeUserName = ()=>{
  }
const changePassword = ()=>{

}
  const login = ()=>{
   const username = 'od';
   const password = "1231";
    dispatch(loginUser(username, password) as any);
    console.log("Hello");
  }
  return (
    <div className="login">
    <div className="login__image-section">
      <div className="login__iphone-header">
        <div className="login__iphone-image">
        <img className="RP4i1 JtrJi " src="https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg" alt=""/>
        </div>
      </div>
      <div className="login__section">
    <div className="login__container">
      <div className="login__form">
      <div className="login__header">
        <h1 className="login__header-h1 login__header-img login__header-text">
          Instagram
        </h1>
      </div>
    <form>
      <div className="login__username">
        <label>
      <input id="username" onChange={changeUserName} className="login__username-text" type="text" name="name" placeholder="Phone number, username, or email"/>
      </label>
      </div>
  
    <div className="login__password">
      <label className="login__password-label">
      <input onChange={changePassword} className="login__password-text" type="password" name="name" placeholder="Password"/>
      </label>
    </div>
    <div className="login__submit">
      <label>
     
      <Button className="login__submit-btn" onClick={login}>Login In</Button>
  
      </label>
   
    </div>
    
  </form>
  <div className="login__forget">
   
   <div className="login__line">
      <div className="login__line-abstract">
    </div>
  <div className="login__text-or">or</div>
  <div className="login__line-abstract">
  </div>
  </div>
    <div className="login__forget-text">
    Forgot password?
  </div>
  </div>
 
  </div>
  <div className="login__signup">
    <p>Don't have an account? Sign up</p>
  </div>
  </div>
  
  </div>
  </div>
 </div>
  );
}

export default LoginPage;