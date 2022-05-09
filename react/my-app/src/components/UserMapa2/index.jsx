import React from "react";
import Header from "../Header";
import MAPA from "../MAPA";
import styled from "styled-components";
import { RobotoBoldBlack24px, RobotoNormalBlack48px } from "../../styledMixins";
import "./UserMapa2.css";

function UserMapa2(props) {
  const { overlapGroup, title, posto3, posto4, postosDsponiveisNaRegio, posto1, mAPAProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="user-mapa screen">
        <Header />
        <MAPA className={mAPAProps.className} />
        <OverlapGroup6>
          <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
            <CARDPOSTO src="/img/card-posto@2x.svg" />
            <OverlapGroup2>
              <Title>{title}</Title>
            </OverlapGroup2>
            <OverlapGroup3>
              <Title>{posto3}</Title>
            </OverlapGroup3>
            <OverlapGroup3>
              <Title>{posto4}</Title>
            </OverlapGroup3>
          </OverlapGroup>
          <OverlapGroup5>
            <POSTOSDSPONIVEISNAREGIO>{postosDsponiveisNaRegio}</POSTOSDSPONIVEISNAREGIO>
          </OverlapGroup5>
          <FilterLine1></FilterLine1>
          <POSTO1>{posto1}</POSTO1>
        </OverlapGroup6>
      </div>
    </div>
  );
}

const OverlapGroup6 = styled.div`
  width: 1206px;
  height: 309px;
  position: relative;
  margin-top: 35px;
  margin-left: 8px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  height: 317px;
  top: 0;
  left: -4px;
  display: flex;
  padding: 24px 21px;
  align-items: flex-end;
  min-width: 1208px;
  background-size: 100% 100%;
`;

const CARDPOSTO = styled.img`
  width: 278px;
  height: 198px;
`;

const OverlapGroup2 = styled.div`
  height: 198px;
  margin-left: 18px;
  display: flex;
  padding: 70px 38px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 278px;
  background-image: url(/img/card-posto@2x.svg);
  background-size: 100% 100%;
`;

const Title = styled.h1`
  ${RobotoNormalBlack48px}
  width: 201px;
  min-height: 57px;
  letter-spacing: 0;
`;

const OverlapGroup3 = styled.div`
  height: 198px;
  margin-left: 18px;
  display: flex;
  padding: 70px 38px;
  align-items: flex-start;
  min-width: 278px;
  background-image: url(/img/card-posto@2x.svg);
  background-size: 100% 100%;
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  height: 58px;
  top: 18px;
  left: 291px;
  display: flex;
  padding: 11px 102.5px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 618px;
  background-image: url(/img/missao-card-2@1x.svg);
  background-size: 100% 100%;
`;

const POSTOSDSPONIVEISNAREGIO = styled.div`
  ${RobotoBoldBlack24px}
  width: 413px;
  min-height: 28px;
  letter-spacing: 0;
`;

const FilterLine1 = styled.div`
  position: absolute;
  width: 29px;
  height: 28px;
  top: 29px;
  left: 783px;
  background-image: url(/img/vector-8@2x.svg);
  background-size: 100% 100%;
`;

const POSTO1 = styled.div`
  ${RobotoNormalBlack48px}
  position: absolute;
  width: 201px;
  top: 165px;
  left: 56px;
  letter-spacing: 0;
`;

export default UserMapa2;
