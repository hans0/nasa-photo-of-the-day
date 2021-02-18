import React from "react";
// import './NavBar.css';
import styled, { keyframes } from 'styled-components';


const StyledNavBar = styled.div`
  /* border: 1px solid black; */
  /* border: 1px solid ${props => props.theme.primaryColor}; */
  color: ${props => props.theme.primaryColor};
  display: flex;
  flex-direction: row;
  
  div {
    /* border: 1px solid black; */
    font-weight: bold;
    padding: 10px;
    flex-grow: 1;
    :hover {
      /* color: 'grey'; */
      color: ${props => props.theme.secondaryColor};
      background-color: ${props => props.theme.quaternaryColor};
      transition: all 0.5s ease-in-out;
    }
    transition: all 0.5s ease-in-out;
  }
`;

function NavBar({theme}) {
  return (
    <nav>
      <h3>NASA Photo of the Day</h3>
      {/* <div className="menu"> */}
      <StyledNavBar theme={theme}>
        <div>Yesterday</div>
        <div>Today</div>
        <div>Tomorrow</div>
      </StyledNavBar>
      {/* </div> */}
    </nav>
  )
}

export default NavBar;