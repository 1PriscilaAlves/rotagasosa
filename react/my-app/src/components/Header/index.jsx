import React from "react";
import NotificationIcon from "../NotificationIcon";
import styled from "styled-components";
import { RobotoNormalWhite14px, PoppinsBoldBlack20px } from "../../styledMixins";


function Header() {
  return (
    <Header1>
      <OverlapGroup3>
        <Header2></Header2>
        <RotaDaGasosa>Rota da Gasosa</RotaDaGasosa>
        <ROTAGASOSALOGO src="/img/rota-gasosa-logo@2x.png" />
        <OverlapGroup>
          <LS>LS</LS>
        </OverlapGroup>
        <NotificationIcon />
      </OverlapGroup3>
    </Header1>
  );
}

const Header1 = styled.div`
  margin-left: 4px;
  display: flex;
  align-items: flex-start;
  min-width: 1282px;
`;

const OverlapGroup3 = styled.div`
  width: 1280px;
  height: 68px;
  position: relative;
`;

const Header2 = styled.div`
  position: absolute;
  width: 1280px;
  height: 54px;
  top: 0;
  left: 0;
  background-color: var(--concrete);
  box-shadow: 0px 4px 4px #00000040;
`;

const RotaDaGasosa = styled.div`
  ${PoppinsBoldBlack20px}
  position: absolute;
  width: 229px;
  top: 12px;
  left: 31px;
  text-align: center;
  letter-spacing: 0;
`;

const ROTAGASOSALOGO = styled.img`
  position: absolute;
  width: 34px;
  height: 40px;
  top: 12px;
  left: 22px;
  object-fit: cover;
`;

const OverlapGroup = styled.div`
  position: absolute;
  height: 36px;
  top: 11px;
  left: 1229px;
  display: flex;
  padding: 0 10px;
  justify-content: flex-end;
  align-items: center;
  min-width: 37px;
  background-color: var(--matisse);
  border-radius: 18.5px/18px;
`;

const LS = styled.div`
  ${RobotoNormalWhite14px}
  min-height: 16px;
  min-width: 16px;
  letter-spacing: 0;
`;

const Header3 = styled.div`
  margin-left: 4px;
  display: flex;
  align-items: flex-start;
  min-width: 1282px;
`;

const OverlapGroup1 = styled.div`
  width: 1280px;
  height: 68px;
  position: relative;
`;

const Header4 = styled.div`
  position: absolute;
  width: 1280px;
  height: 54px;
  top: 0;
  left: 0;
  background-color: var(--concrete);
  box-shadow: 0px 4px 4px #00000040;
`;

const RotaDaGasosa1 = styled.div`
  ${PoppinsBoldBlack20px}
  position: absolute;
  width: 229px;
  top: 12px;
  left: 31px;
  text-align: center;
  letter-spacing: 0;
`;

const ROTAGASOSALOGO1 = styled.img`
  position: absolute;
  width: 34px;
  height: 40px;
  top: 12px;
  left: 22px;
  object-fit: cover;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  height: 36px;
  top: 11px;
  left: 1229px;
  display: flex;
  padding: 0 10px;
  justify-content: flex-end;
  align-items: center;
  min-width: 37px;
  background-color: var(--matisse);
  border-radius: 18.5px/18px;
`;

const LS1 = styled.div`
  ${RobotoNormalWhite14px}
  min-height: 16px;
  min-width: 16px;
  letter-spacing: 0;
`;

const Header5 = styled.div`
  margin-left: 4px;
  display: flex;
  align-items: flex-start;
  min-width: 1282px;
`;

const OverlapGroup4 = styled.div`
  width: 1280px;
  height: 68px;
  position: relative;
`;

const Header6 = styled.div`
  position: absolute;
  width: 1280px;
  height: 54px;
  top: 0;
  left: 0;
  background-color: var(--concrete);
  box-shadow: 0px 4px 4px #00000040;
`;

const RotaDaGasosa2 = styled.div`
  ${PoppinsBoldBlack20px}
  position: absolute;
  width: 229px;
  top: 12px;
  left: 31px;
  text-align: center;
  letter-spacing: 0;
`;

const ROTAGASOSALOGO2 = styled.img`
  position: absolute;
  width: 34px;
  height: 40px;
  top: 12px;
  left: 22px;
  object-fit: cover;
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  height: 36px;
  top: 11px;
  left: 1229px;
  display: flex;
  padding: 0 10px;
  justify-content: flex-end;
  align-items: center;
  min-width: 37px;
  background-color: var(--matisse);
  border-radius: 18.5px/18px;
`;

const LS2 = styled.div`
  ${RobotoNormalWhite14px}
  min-height: 16px;
  min-width: 16px;
  letter-spacing: 0;
`;

export default Header;
