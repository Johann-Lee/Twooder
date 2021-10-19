import React from 'react';
import TwooderLogo from "./images/twooder.png"
import SearchIcon from "./images/search.svg"
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: #fafafa;
  height: 100vh;
  font-size: 24px;
  
  .logo {
    width: 600px;
    height: auto;
    margin-top: 200px;
  }
  
  .bio {
    margin-top: 128px;
    font-size: 18px;
    text-align: center;
  }
  
  .search-field {
    margin-top: 32px;
    position: relative;
    
    img {
      position: absolute;
      width: 27px;
      top: 15px;
      left: 18px;
    }
    
    input {
      padding: 16px 16px 16px 48px;
      border-radius: 53.5px;
      width: 300px;
      font-size: 18px;
      border: 2px solid #33ccff;
    }
  }
  
`;

function App() {
  return (
    <StyledDiv>
      <img src={TwooderLogo} alt="Twooder logo" className="logo"/>

      <p>Twitter mood analysis.</p>

      <div className="search-field">
        <img src={SearchIcon} alt=""/>
        <input placeholder="Search Twitter users"/>
      </div>

      <p className="bio">A project by John Atwood, Milo Berry,<br/>Matt Galan, and Johann Lee.</p>

    </StyledDiv>
  );
}

export default App;
