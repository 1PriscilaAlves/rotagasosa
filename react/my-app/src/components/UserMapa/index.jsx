import React from "react";
import Header from "../Header";
import MAPA from "../MAPA";
import styled from "styled-components";
import { RobotoBoldBlack20px, RobotoBoldBlack24px, Border2pxBlack } from "../../styledMixins";
import "./UserMapa.css";

function UserMapa(props) {
  const {
    card_PostoContainer,
    postosDsponiveisNaRegio,
    distnciaMximaQuilmetros,
    tiposDeCombustvel,
    serviosDisponveis,
    preosMnimo,
    preosMximo,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="user-mapa-1 screen">
        <Header />
        <OverlapGroup3>
          <CardPostoContainer style={{ backgroundImage: `url(${card_PostoContainer})` }}>
            <CARDPOSTO src="/img/card-posto@2x.svg" />
            <CARDPOSTO1 src="/img/card-posto@2x.svg" />
            <CARDPOSTO1 src="/img/card-posto@2x.svg" />
            <CARDPOSTO1 src="/img/card-posto@2x.svg" />
          </CardPostoContainer>
          <MAPA />
          <OverlapGroup2>
            <POSTOSDSPONIVEISNAREGIO>{postosDsponiveisNaRegio}</POSTOSDSPONIVEISNAREGIO>
          </OverlapGroup2>
          <FilterLine1></FilterLine1>
          <Rectangle26></Rectangle26>
          <DistnciaMximaQuilmetros>{distnciaMximaQuilmetros}</DistnciaMximaQuilmetros>
          <TiposDeCombustvel>{tiposDeCombustvel}</TiposDeCombustvel>
          <ServiosDisponveis>{serviosDisponveis}</ServiosDisponveis>
          <Rectangle27></Rectangle27>
          <Rectangle28></Rectangle28>
          <Rectangle29></Rectangle29>
          <PreosMnimo>{preosMnimo}</PreosMnimo>
          <Rectangle30></Rectangle30>
          <PreosMximo>{preosMximo}</PreosMximo>
          <Rectangle31></Rectangle31>
        </OverlapGroup3>
      </div>
    </div>
  );
}

const OverlapGroup3 = styled.div`
  width: 1200px;
  height: 618px;
  position: relative;
  margin-top: 16px;
  margin-left: 2px;
`;

const CardPostoContainer = styled.div`
  position: absolute;
  height: 317px;
  top: 309px;
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

const CARDPOSTO1 = styled.img`
  width: 278px;
  height: 198px;
  margin-left: 18px;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  height: 58px;
  top: 327px;
  left: 291px;
  display: flex;
  padding: 11px 102.5px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 618px;
  background-image: url(/img/missao-card-1@1x.svg);
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
  top: 338px;
  left: 783px;
  background-image: url(/img/vector-8@2x.svg);
  background-size: 100% 100%;
`;

const Rectangle26 = styled.div`
  position: absolute;
  width: 1014px;
  height: 570px;
  top: 32px;
  left: 97px;
  background-color: var(--concrete);
  box-shadow: -20px -20px 30px #00000040, 20px 20px 30px #00000040;
`;

const DistnciaMximaQuilmetros = styled.div`
  ${RobotoBoldBlack20px}
  position: absolute;
  top: 99px;
  left: 145px;
  letter-spacing: 0;
`;

const TiposDeCombustvel = styled.div`
  ${RobotoBoldBlack20px}
  position: absolute;
  top: 231px;
  left: 136px;
  letter-spacing: 0;
`;

const ServiosDisponveis = styled.div`
  ${RobotoBoldBlack20px}
  position: absolute;
  top: 280px;
  left: 435px;
  letter-spacing: 0;
`;

const Rectangle27 = styled.div`
  ${Border2pxBlack}
  position: absolute;
  width: 190px;
  height: 45px;
  top: 85px;
  left: 461px;
  background-color: var(--concrete);
  border-radius: 10px;
`;

const Rectangle28 = styled.div`
  ${Border2pxBlack}
  position: absolute;
  width: 190px;
  height: 45px;
  top: 208px;
  left: 461px;
  background-color: var(--concrete);
  border-radius: 10px;
`;

const Rectangle29 = styled.div`
  ${Border2pxBlack}
  position: absolute;
  width: 366px;
  height: 52px;
  top: 314px;
  left: 435px;
  background-color: var(--concrete);
  border-radius: 10px;
`;

const PreosMnimo = styled.div`
  ${RobotoBoldBlack20px}
  position: absolute;
  top: 383px;
  left: 435px;
  letter-spacing: 0;
`;

const Rectangle30 = styled.div`
  ${Border2pxBlack}
  position: absolute;
  width: 366px;
  height: 52px;
  top: 417px;
  left: 435px;
  background-color: var(--concrete);
  border-radius: 10px;
`;

const PreosMximo = styled.div`
  ${RobotoBoldBlack20px}
  position: absolute;
  top: 483px;
  left: 435px;
  letter-spacing: 0;
`;

const Rectangle31 = styled.div`
  ${Border2pxBlack}
  position: absolute;
  width: 366px;
  height: 52px;
  top: 517px;
  left: 435px;
  background-color: var(--concrete);
  border-radius: 10px;
`;

export default UserMapa;
