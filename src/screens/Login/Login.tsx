import React from "react";
import { PageView } from "../../common/index.js";
import "../Movies/Movies.css"
import { useNavigate } from "react-router";

export const Login = () => {
  
  
  const handleInput = (e) => {
  }
  const navigate = useNavigate()
  const handleSignup = () =>{
    navigate('/signup')
  }
  
  const handleLogin = () => {
    navigate('/movies')
  }
  return (
    <PageView>
      <view className="AppContainer">
        <view className="MainContent">
          <view className="Header">
            <view style="display:flex;flex-direction:row;align-items:center;justify-content:center;margin-top:30%">
              <text className="Title">Login</text>
            </view>
          </view>
          <view style={{display:'flex',flexDirection:'column',rowGap:10,marginTop:'20%'}}>
            <text onchange={(e)=>setUsername(e.target.value)}>Username</text>
            <input placeholder="Enter Username" bindinput={handleInput} style={{width:'100%',height:40}}/>
          </view>
          <view style={{display:'flex',flexDirection:'column',rowGap:10,marginTop:'5%'}}>
            <text>Password</text>
            <input placeholder="Enter Password" bindnput={handleInput} style={{width:'100%',height:40}} />
          </view>
          <view style={{padding:10,justifyContent:'center',alignItems:'center',display:'flex',marginTop:'20%',backgroundColor:'cyan',width:'100%'}} bindtap={handleLogin}>
            <text>Login</text>
          </view>

          <view style={{justifyContent:'center',alignItems:'center',marginTop:'20%'}}>
            <text style={{fontSize:'15px'}}>Create New Account ?  <text style={{color:'blue',fontSize:'16px'}} bindtap={handleSignup}>Signup</text></text>
          </view>
        </view>
      </view>
    </PageView>
  );
};
