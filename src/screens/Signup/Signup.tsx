import React from "react";
import { PageView } from "../../common/index.js";
import "../Movies/Movies.css";
import { useNavigate } from "react-router";

export const Signup = () => {
  const handleInput = (e) => {};

  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("/");
  };

  const styles = {
    ViewInputStyles: {
      display: "flex",
      flexDirection: "column",
      rowGap: 10,
      marginTop: "5%",
    },
    InputTextStyles: {
      width: "100%",
      height: 40,
    },
    SignupButton: {
      padding: 10,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      marginTop: "20%",
      backgroundColor: "cyan",
      width: "100%",
    },
  };

  return (
    <PageView>
      <view className="AppContainer">
        <view className="MainContent">
          <view className="Header">
            <view style="display:flex;flex-direction:row;align-items:center;justify-content:center;margin-top:20%">
              <text className="Title">Create New Account</text>
            </view>
          </view>
          <view
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: 10,
              marginTop: "20%",
            }}
          >
            <text>Full Name</text>
            <input
              placeholder="Enter Full Name"
              bindinput={handleInput}
              style={styles.InputTextStyles}
            />
          </view>
          <view style={styles.ViewInputStyles}>
            <text>Username</text>
            <input
              placeholder="Enter Username"
              bindinput={handleInput}
              style={styles.InputTextStyles}
            />
          </view>

          <view style={styles.ViewInputStyles}>
            <text>Email id</text>
            <input
              placeholder="Enter Username"
              bindinput={handleInput}
              style={styles.InputTextStyles}
            />
          </view>
          <view style={styles.ViewInputStyles}>
            <text>Password</text>
            <input
              placeholder="Enter Password"
              bindnput={handleInput}
              style={styles.InputTextStyles}
            />
          </view>

          <view style={styles.ViewInputStyles}>
            <text>Confirm Password</text>
            <input
              placeholder="Enter Password"
              bindnput={handleInput}
              style={styles.InputTextStyles}
            />
          </view>
          <view style={styles.SignupButton}>
            <text>Signup</text>
          </view>

          <view
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10%",
            }}
          >
            <text style={{ fontSize: "15px" }}>
              Already have an account ?{" "}
              <text
                style={{ color: "blue", fontSize: "16px" }}
                bindtap={handleSignup}
              >
                Login
              </text>
            </text>
          </view>
        </view>
      </view>
    </PageView>
  );
};
