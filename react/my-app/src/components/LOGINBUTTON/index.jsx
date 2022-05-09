import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


function LOGINBUTTON() {
  return (
    <Link to="/user-home-page-1">
      <LOGINBUTTON1></LOGINBUTTON1>
    </Link>
  );
}

const LOGINBUTTON1 = styled.div`
  position: absolute;
  width: 316px;
  height: 38px;
  top: 0;
  left: 0;
  background-image: url(/img/rectangle-9@2x.svg);
  background-size: 100% 100%;
  cursor: pointer;
`;

export default LOGINBUTTON;
