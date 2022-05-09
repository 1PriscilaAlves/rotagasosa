import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ValignTextMiddle } from "../../styledMixins";


function LOGINBUTTON2(props) {
  const { login } = props;

  return (
    <Link to="/user-home-page-1">
      <LOGINBUTTON>
        <OverlapGroup>
          <Login>{login}</Login>
        </OverlapGroup>
      </LOGINBUTTON>
    </Link>
  );
}

const LOGINBUTTON = styled.div`
  margin-top: 34px;
  margin-right: 2px;
  display: flex;
  align-items: flex-start;
  min-width: 364px;
  cursor: pointer;
`;

const OverlapGroup = styled.div`
  height: 38px;
  margin-top: -0.5px;
  display: flex;
  padding: 8.1px 154.1px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 364px;
  background-image: url(/img/rectangle-9-1@2x.svg);
  background-size: 100% 100%;
`;

const Login = styled.div`
  ${ValignTextMiddle}
  width: 55px;
  height: 16px;
  font-family: var(--font-family-nexa-xbold);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-xl);
  letter-spacing: 0;
`;

export default LOGINBUTTON2;
