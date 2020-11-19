import React from "react";
import styled from "styled-components";

let StyledNav = styled.nav`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 10vh;
  min-height: 3.5em;

  div {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
  }

  .nav-left > p {
    margin-left: 5px;
    margin-right: 5px;
  }

  .brand {
    font-size: 2rem;
    font-weight: 600;
    margin-right: 0.5em;
  }

  .nav-right {
    flex: 1;
  }

  .nav-search {
    flex: 1 1;
    margin: 0.25em;
    padding: 10px;
    border: 0.1em solid #888888;
    border-radius: 5px;
    background-color: #dddddd;
  }

  #notificationBellIcon,
  #userIcon {
    font-size: 1.5rem;
    margin: 0.25em;
    padding: 0.5em;
    border: 1px solid transparent;
    border-radius: 15px;
  }

  .user {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  #userIcon {
    background-color: #888888;
    color: #dddddd;
    border-color: transparent;
    border-radius: 50px;
  }

  #userCaret {
    font-size: 0.75rem;
  }

  .userInfo {
    font-size: 0.75rem;
    display: flex;
    flex-flow: column;
    color: #222222;
  }
`;

function Navbar() {
  return (
    <StyledNav>
      <div className="nav-left">
        <h1 className="brand">Basic CRM</h1>
        <p>Dashboard</p>
        <p>Contacts</p>
        <p>Customers</p>
        <p>Deals</p>
        <p>Task</p>
        <p>Settings</p>
      </div>
      <div className="nav-right">
        <input className="nav-search" type="text" placeholder="Search" />
        <i id="notificationBellIcon" className="far fa-bell"></i>
        <div className="user">
          <i id="userIcon" className="fas fa-user"></i>
          <i id="userCaret" className="fas fa-caret-down"></i>
        </div>
        <div className="userInfo">
          <p className="userEmail">user@email.com</p>
        </div>
      </div>
    </StyledNav>
  );
}

export default Navbar;
