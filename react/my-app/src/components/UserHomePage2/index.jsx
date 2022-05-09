import React from "react";
import NotificationIcon from "../NotificationIcon";
import styled from "styled-components";
import {
  RobotoBoldBlack10px2,
  RobotoBoldMatisse10px,
  RobotoNormalWhite14px,
  PoppinsBoldBlack20px,
} from "../../styledMixins";
import "./UserHomePage2.css";

function UserHomePage2(props) {
  const {
    ls,
    rotaDaGasosa,
    overlapGroup5,
    mapa,
    maisPrximo,
    indicadores,
    distncia12Km1,
    distncia12Km2,
    distncia12Km3,
    distncia12Km4,
    notificationIconProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="user-home-page screen">
        <OverlapGroup7>
          <Rectangle1></Rectangle1>
          <OverlapGroup6>
            <LS>{ls}</LS>
          </OverlapGroup6>
          <NotificationIcon className={notificationIconProps.className} />
          <RotaDaGasosa>{rotaDaGasosa}</RotaDaGasosa>
        </OverlapGroup7>
        <Group13>
          <OverlapGroup5 style={{ backgroundImage: `url(${overlapGroup5})` }}>
            <MAPA>{mapa}</MAPA>
            <OverlapGroup>
              <X93775559316318749192></X93775559316318749192>
              <MAISPRXIMO>{maisPrximo}</MAISPRXIMO>
            </OverlapGroup>
            <INDICADORES>{indicadores}</INDICADORES>
          </OverlapGroup5>
        </Group13>
        <Group12>
          <GroupContainer>
            <Group4></Group4>
            <OverlapGroup1>
              <Rectangle15 src="/img/rectangle-15@2x.svg" />
              <Distncia12Km>{distncia12Km1}</Distncia12Km>
            </OverlapGroup1>
            <OverlapGroup11>
              <Rectangle15 src="/img/rectangle-15@2x.svg" />
              <Distncia12Km>{distncia12Km2}</Distncia12Km>
            </OverlapGroup11>
          </GroupContainer>
        </Group12>
        <MaskGroup src="/img/mask-group@2x.svg" />
        <GroupContainer1>
          <Group4></Group4>
          <OverlapGroup1>
            <Rectangle15 src="/img/rectangle-15@2x.svg" />
            <Distncia12Km>{distncia12Km3}</Distncia12Km>
          </OverlapGroup1>
          <OverlapGroup11>
            <Rectangle15 src="/img/rectangle-15@2x.svg" />
            <Distncia12Km>{distncia12Km4}</Distncia12Km>
          </OverlapGroup11>
        </GroupContainer1>
      </div>
    </div>
  );
}

const OverlapGroup7 = styled.div`
  width: 394px;
  height: 70px;
  position: relative;
`;

const Rectangle1 = styled.div`
  position: absolute;
  width: 375px;
  height: 54px;
  top: 0;
  left: 19px;
  background-color: var(--concrete);
  box-shadow: 0px 4px 4px #00000040;
`;

const OverlapGroup6 = styled.div`
  position: absolute;
  height: 36px;
  top: 9px;
  left: 343px;
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

const RotaDaGasosa = styled.div`
  ${PoppinsBoldBlack20px}
  position: absolute;
  width: 229px;
  top: 14px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const Group13 = styled.div`
  height: 40px;
  margin-top: 4px;
  margin-right: -4px;
  display: flex;
  align-items: flex-start;
  min-width: 379px;
`;

const OverlapGroup5 = styled.div`
  height: 44px;
  margin-top: -2px;
  display: flex;
  padding: 0 21px;
  justify-content: flex-end;
  align-items: center;
  min-width: 375px;
  background-size: 100% 100%;
`;

const MAPA = styled.div`
  ${RobotoBoldMatisse10px}
  width: 28px;
  min-height: 10px;
  letter-spacing: 0;
`;

const OverlapGroup = styled.div`
  height: 40px;
  margin-left: 39px;
  display: flex;
  padding: 0 29px;
  justify-content: flex-end;
  align-items: center;
  min-width: 163px;
  background-color: var(--matisse);
`;

const X93775559316318749192 = styled.div`
  width: 23px;
  height: 22px;
  background-image: url(/img/vector-3@2x.svg);
  background-size: 100% 100%;
`;

const MAISPRXIMO = styled.div`
  width: 70px;
  min-height: 10px;
  margin-left: 11px;
  font-family: var(--font-family-roboto);
  font-weight: 700;
  font-style: italic;
  color: var(--white);
  font-size: var(--font-size-m);
  letter-spacing: 0;
`;

const INDICADORES = styled.div`
  ${RobotoBoldMatisse10px}
  width: 64px;
  min-height: 10px;
  margin-left: 21px;
  letter-spacing: 0;
`;

const Group12 = styled.div`
  margin-top: 20px;
  margin-right: 3px;
  display: flex;
  align-items: flex-start;
  min-width: 357px;
`;

const GroupContainer = styled.div`
  width: 357px;
  height: 74px;
  position: relative;
`;

const Group4 = styled.div`
  position: absolute;
  width: 346px;
  height: 74px;
  top: 0;
  left: 0;
  background-color: var(--matisse);
  border-radius: 17px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 179px;
  height: 55px;
  top: 9px;
  left: 11px;
`;

const Rectangle15 = styled.img`
  position: absolute;
  width: 160px;
  height: 55px;
  top: 0;
  left: 0;
`;

const Distncia12Km = styled.div`
  ${RobotoBoldBlack10px2}
  position: absolute;
  width: 169px;
  top: 44px;
  left: 11px;
  letter-spacing: 0;
`;

const OverlapGroup11 = styled.div`
  position: absolute;
  width: 179px;
  height: 55px;
  top: 9px;
  left: 178px;
`;

const MaskGroup = styled.img`
  width: 346px;
  height: 459px;
  align-self: center;
  margin-top: 20px;
  margin-left: 1px;
`;

const GroupContainer1 = styled.div`
  width: 359px;
  height: 74px;
  position: relative;
  margin-top: 16px;
  margin-right: 1px;
`;

export default UserHomePage2;
