import React from "react";
import styled from "styled-components";
const StyledAside = styled.aside`
  flex-basis: 20%;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: space-between;

  .filterHeader {
    background-color: #ebedef;
    padding: 0.75em;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    z-index: 3;
    width: 100%;
  }

  .filterHeaderOption {
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75em;
  }

  .filterBody {
    flex: 1 0;
    padding: 0.75em;
    z-index: 1;
    width: 100%;
    box-shadow: 1px 0 3px rgba(0, 0, 0, 0.5);
  }

  .filterOption,
  .filterNotificationLink {
    margin-top: 1em;
    display: flex;
    align-items: center;
  }
  .filterOption > i,
  .filterNotificationLink > i {
    font-size: 1.5rem;
    margin-right: 0.5em;
  }

  .filterSettings {
    padding: 0.75em;
    z-index: 2;
    width: 100%;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
`;
function Filter() {
  return (
    <StyledAside>
      <div className="filterHeader">
        <div className="filterHeaderOption">
          <p>All Interactions</p>
          <i id="userCaret" className="fas fa-caret-down"></i>
        </div>
        <p>75 Interactions - Standard View</p>
      </div>
      <div className="filterBody">
        <div className="filterOption">
          <i className="fas fa-plus-circle"></i>
          <p>Add Filter</p>
        </div>
        <div className="filterNotificationLink">
          <i className="far fa-envelope"></i>
          <p>Manage Notifications</p>
        </div>
      </div>
      <div className="filterSettings">
        <p>View Options</p>
      </div>
    </StyledAside>
  );
}

export default Filter;
