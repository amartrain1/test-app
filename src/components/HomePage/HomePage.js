import React, { useState } from "react";
import HeaderNav from "../Header/HeaderNav";
import "./homePage.css";
import Feed from "./Feed/Feed";
import pfp from "../photos/pfp placeholder.png";

const HomePage = ({ page, handlePageChange }) => {
  // <img className='imgNav' src={pfpNav}></img>
  const [length, setLength] = useState(0);
  function countLength() {
    const textarea = document.getElementById("textInput");
    var string = textarea.value;
    setLength(string.length);
  }

  return (
    <>
      <HeaderNav />
      <div className="mainHomeContainer">
        <div className="leftContainer">
          {" "}
          {/* navigation */}
          <div className="navHeader">Navigation</div>
          <ul>
            <li className="listEle">
              <div
                onClick={() => handlePageChange("Feed")}
                className={
                  page === "Feed" ? "navContent activeNav" : "navContent"
                }
              >
                <div>Feed</div>
              </div>
            </li>
            <li className="listEle">
              <div
                onClick={() => handlePageChange("Profile")}
                className={
                  page === "Profile" ? "navContent activeNav" : "navContent"
                }
              >
                <div>Profile</div>
              </div>
            </li>
            <li className="listEle">
              <div
                onClick={() => handlePageChange("Recordings")}
                className={
                  page === "Recordings" ? "navContent activeNav" : "navContent"
                }
              >
                <div>Recordings</div>
              </div>
            </li>
            <li className="listEle">
              <div
                onClick={() => handlePageChange("Favorites")}
                className={
                  page === "Favorites" ? "navContent activeNav" : "navContent"
                }
              >
                <div>Favorites</div>
              </div>
            </li>
            <li className="listEle">
              <div
                onClick={() => handlePageChange("Notifications")}
                className={
                  page === "Notifications"
                    ? "navContent activeNav"
                    : "navContent"
                }
              >
                <div>Notifications</div>
              </div>
            </li>
            <li className="listEle">
              <div
                onClick={() => handlePageChange("Settings")}
                className={
                  page === "Settings" ? "navContent activeNav" : "navContent"
                }
              >
                <div>Settings</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="middleContainer">
          {" "}
          {/* changing */}
          <Feed />
        </div>
        <div className="rightContainer">
          <div className="newPostHeader">New Post</div>
          {/* <div className="formContainer">
            <form className='form'>
              <textarea id='auto' placeholder='Type your message here...' />
            </form>
          </div> */}
          <div className="formContainer">
            <div className="topBar">
              <div className="userInfo">
                <img className="pfp" src={pfp} alt="profile"></img>
                <div className="username">@you</div>
              </div>
            </div>
            <form className="form">
              <p>
                <span className={length > 200 ? "red" : "green"}>{length}</span>
                /200
              </p>
              <textarea
                id="textInput"
                placeholder="Type your message here... (200 char max)"
                onKeyDown={countLength}
              />
            </form>
            <div className="uploadContainer">
              <div className="uploadBtn">Upload Audio</div>
              <div className="uploadBtn">Monetize?</div>
            </div>
            <div className="postBtn">Post!</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
