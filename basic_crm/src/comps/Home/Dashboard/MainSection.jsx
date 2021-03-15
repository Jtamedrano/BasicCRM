import React from "react";
import styled from "styled-components";
import CustomerTable from "./MainSection/CustomerTable";

const StyledSection = styled.section`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  .sectionTop {
    padding: 0.75em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.3em;
  }

  .sectionTop h2 {
    font-size: 1.5rem;
    color: #222222;
  }

  .sectionTopRight {
    display: flex;
    align-items: center;
    flex-basis: 50%;
  }

  .sectionTopRight input {
    padding: 8px;
    flex: 1;
    border-radius: 5px;
    border: 1px solid #dddddd;
  }

  .sectionSettings {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #cccccc;
    padding: 0.25em;
    border-radius: 5px;
    margin-left: 1em;
  }

  .sectionSettings i {
    padding: 0.5em 0.95em;
  }

  .sectionSettings i:nth-child(1) {
    border-right: 1px solid #888888;
  }

  /* sectionBody */

  .sectionBody {
    margin-top: 2em;
    padding: 0;
    flex: 1;
  }
  /* sectionBody table */

  /* sectionBody Table Header Row */
  .sectionBody table {
    width: 100%;
    margin: 0;
  }
  .sectionBody table th {
    padding: 0.5em;
    border: 1px solid #cccccc;
    background-color: #d8dddf;
  }

  /* sectionBody Table Body Rows */

  .sectionBody table td {
    text-align: center;
    padding: 0.5em;
    border: 1px solid #ddddddea;
  }
`;

function MainSection(props) {
  const { customers } = props;

  return (
    <StyledSection>
      <div className="sectionTop">
        <h2>Prospects</h2>
        <div className="sectionTopRight">
          <input
            type="text"
            name="sectionSearch"
            id="sectionSearch"
            placeholder="Search all interactions in this view"
            aria-placeholder="Search all interactions in this view"
          />
          <div className="sectionSettings">
            <i className="fas fa-cog"></i>
            <i id="userCaret" className="fas fa-caret-down"></i>
          </div>
        </div>
      </div>
      <div className="sectionBody">
        <CustomerTable customers={customers} />
      </div>
    </StyledSection>
  );
}

export default MainSection;
