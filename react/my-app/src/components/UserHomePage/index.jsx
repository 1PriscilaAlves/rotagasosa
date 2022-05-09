import React from "react";
import Header from "../Header";
import styled from "styled-components";
import {
  RobotoBoldWhite20px,
  RobotoBoldMatisse20px,
  RobotoBoldBlack10px,
  RobotoBoldBlack18px,
} from "../../styledMixins";
import "./UserHomePage.css";

function UserHomePage(props) {
  const {
    rectangle4,
    rectangle16,
    maisPrximo,
    mapa,
    indicadores,
    sobre,
    valores,
    criadores,
    ltimos10AbastecimentosRealizados1,
    ltimos10AbastecimentosRealizados2,
    promoes,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="user-home-page-1 screen">
        <Header />
        <MENU>
          <OverlapGroup1>
            <Rectangle4 src={rectangle4} />
            <Rectangle4 src={rectangle16} />
            <OverlapGroup>
              <POSTOICON></POSTOICON>
              <MAISPRXIMO>{maisPrximo}</MAISPRXIMO>
            </OverlapGroup>
            <Rectangle6></Rectangle6>
            <Rectangle7></Rectangle7>
            <MAPA>{mapa}</MAPA>
            <INDICADORES>{indicadores}</INDICADORES>
          </OverlapGroup1>
        </MENU>
        <FlexRow>
          <SOBRECONTAINER>
            <OverlapGroup2>
              <SOBRE>{sobre}</SOBRE>
            </OverlapGroup2>
            <MISSAOCARD src="/img/missao-card@2x.svg" />
            <OverlapGroup3>
              <VALORES>{valores}</VALORES>
            </OverlapGroup3>
            <OverlapGroup11>
              <CRIADORES>{criadores}</CRIADORES>
            </OverlapGroup11>
          </SOBRECONTAINER>
          <AbastecimentoContainerContainer>
            <ABASTECIMENTOCONTAINER>
              <OverlapGroup4>
                <LTIMOS10ABASTECIMENTOSREALIZADOS>{ltimos10AbastecimentosRealizados1}</LTIMOS10ABASTECIMENTOSREALIZADOS>
              </OverlapGroup4>
              <CARDABASTECIMENTO src="/img/card-abastecimento@1x.svg" />
              <CARDABASTECIMENTO1 src="/img/card-abastecimento-1@1x.svg" />
              <CARDABASTECIMENTO2 src="/img/card-abastecimento-2@1x.svg" />
            </ABASTECIMENTOCONTAINER>
            <ABASTECIMENTOCONTAINER1>
              <OverlapGroup5>
                <LTIMOS10ABASTECIMENTOSREALIZADOS>{ltimos10AbastecimentosRealizados2}</LTIMOS10ABASTECIMENTOSREALIZADOS>
              </OverlapGroup5>
              <CARDABASTECIMENTO3 src="/img/card-abastecimento-3@1x.svg" />
              <CARDABASTECIMENTO4 src="/img/card-abastecimento-4@1x.svg" />
              <CARDABASTECIMENTO5 src="/img/card-abastecimento-5@1x.svg" />
            </ABASTECIMENTOCONTAINER1>
          </AbastecimentoContainerContainer>
          <PROMOCAOCONTAINER>
            <OverlapGroup6>
              <PROMOES>{promoes}</PROMOES>
            </OverlapGroup6>
            <SHELLPROMOCAO src="/img/shell-promocao@2x.svg" />
            <BRPROMOCAO src="/img/br-promocao@2x.svg" />
            <IPIRANGAPROMOCAO src="/img/ipiranga-promocao@2x.svg" />
          </PROMOCAOCONTAINER>
        </FlexRow>
      </div>
    </div>
  );
}

const MENU = styled.div`
  height: 57px;
  margin-top: 9px;
  margin-left: 4px;
  display: flex;
  align-items: flex-start;
  min-width: 1258px;
`;

const OverlapGroup1 = styled.div`
  ${RobotoBoldMatisse20px}
  width: 1254px;
  height: 61px;
  position: relative;
  margin-top: -2px;
`;

const Rectangle4 = styled.img`
  position: absolute;
  width: 1244px;
  height: 61px;
  top: 0;
  left: 5px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  height: 57px;
  top: 2px;
  left: 503px;
  display: flex;
  padding: 12px 22px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 248px;
  background-color: var(--matisse);
`;

const POSTOICON = styled.div`
  width: 33px;
  height: 32px;
  background-image: url(/img/vector@2x.svg);
  background-size: 100% 100%;
`;

const MAISPRXIMO = styled.div`
  ${RobotoBoldWhite20px}
  min-height: 23px;
  align-self: center;
  margin-left: 19px;
  min-width: 140px;
  letter-spacing: 0;
`;

const Rectangle6 = styled.div`
  position: absolute;
  width: 12px;
  height: 57px;
  top: 2px;
  left: 0;
  background-color: var(--mercury);
`;

const Rectangle7 = styled.div`
  position: absolute;
  width: 12px;
  height: 57px;
  top: 2px;
  left: 1242px;
  background-color: var(--mercury);
`;

const MAPA = styled.div`
  position: absolute;
  width: 66px;
  top: 19px;
  left: 214px;
  text-shadow: 0px 4px 4px #00000040;
  letter-spacing: 0;
`;

const INDICADORES = styled.div`
  position: absolute;
  width: 129px;
  top: 19px;
  left: 964px;
  letter-spacing: 0;
`;

const FlexRow = styled.div`
  ${RobotoBoldBlack18px}
  margin-top: 20px;
  margin-left: 10px;
  display: flex;
  align-items: flex-start;
  min-width: 1244px;
`;

const SOBRECONTAINER = styled.div`
  width: 299px;
  display: flex;
  flex-direction: column;
  padding: 14px 6px;
  align-items: flex-start;
  min-height: 522px;
  background-color: var(--matisse);
  border-radius: 17px;
`;

const OverlapGroup2 = styled.div`
  height: 56px;
  align-self: flex-end;
  margin-right: 3px;
  display: flex;
  padding: 13px 106px;
  align-items: flex-start;
  min-width: 282px;
  background-image: url(/img/rectangle-19-3@2x.svg);
  background-size: 100% 100%;
`;

const SOBRE = styled.div`
  width: 60px;
  min-height: 19px;
  letter-spacing: 0;
`;

const MISSAOCARD = styled.img`
  width: 286px;
  height: 129px;
  margin-top: 10px;
`;

const OverlapGroup3 = styled.div`
  height: 129px;
  margin-top: 8px;
  display: flex;
  padding: 58.9px 118px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 286px;
  background-image: url(/img/rectangle-20@2x.svg);
  background-size: 100% 100%;
`;

const VALORES = styled.div`
  ${RobotoBoldBlack10px}
  width: 44px;
  min-height: 9px;
  letter-spacing: 0;
`;

const OverlapGroup11 = styled.div`
  height: 136px;
  margin-top: 6px;
  display: flex;
  padding: 61.2px 110px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 286px;
  background-image: url(/img/rectangle-21@2x.svg);
  background-size: 100% 100%;
`;

const CRIADORES = styled.div`
  ${RobotoBoldBlack10px}
  width: 55px;
  min-height: 10px;
  letter-spacing: 0;
`;

const AbastecimentoContainerContainer = styled.div`
  width: 606px;
  height: 522px;
  position: relative;
  margin-left: 20px;
  border-radius: 16px;
`;

const ABASTECIMENTOCONTAINER = styled.div`
  position: absolute;
  width: 606px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 14px 8px;
  align-items: flex-end;
  min-height: 522px;
  background-color: var(--matisse);
  border-radius: 16px;
  box-shadow: 0px 4px 4px #00000040;
`;

const OverlapGroup4 = styled.div`
  height: 56px;
  display: flex;
  padding: 15px 89px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 587px;
  background-image: url(/img/rectangle-19-1@1x.svg);
  background-size: 100% 100%;
`;

const LTIMOS10ABASTECIMENTOSREALIZADOS = styled.div`
  width: 393px;
  min-height: 19px;
  letter-spacing: 0;
`;

const CARDABASTECIMENTO = styled.img`
  width: 587px;
  height: 129px;
  margin-top: 13px;
`;

const CARDABASTECIMENTO1 = styled.img`
  width: 587px;
  height: 129px;
  margin-top: 5px;
`;

const CARDABASTECIMENTO2 = styled.img`
  width: 587px;
  height: 129px;
  margin-top: 6px;
`;

const ABASTECIMENTOCONTAINER1 = styled.div`
  position: absolute;
  width: 579px;
  top: 14px;
  left: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 459px;
`;

const OverlapGroup5 = styled.div`
  height: 56px;
  margin-left: -4px;
  display: flex;
  padding: 15px 89px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 587px;
  background-image: url(/img/rectangle-19-2@1x.svg);
  background-size: 100% 100%;
`;

const CARDABASTECIMENTO3 = styled.img`
  width: 587px;
  height: 129px;
  margin-top: 13px;
  margin-left: -4px;
`;

const CARDABASTECIMENTO4 = styled.img`
  width: 587px;
  height: 129px;
  margin-top: 5px;
  margin-left: -4px;
`;

const CARDABASTECIMENTO5 = styled.img`
  width: 587px;
  height: 129px;
  margin-top: 6px;
  margin-left: -4px;
`;

const PROMOCAOCONTAINER = styled.div`
  width: 299px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  padding: 14px 2px;
  align-items: flex-end;
  min-height: 522px;
  background-color: var(--matisse);
  border-radius: 17px;
  box-shadow: 0px 4px 4px #00000040;
`;

const OverlapGroup6 = styled.div`
  height: 56px;
  margin-right: 4px;
  display: flex;
  padding: 15px 81px;
  align-items: flex-start;
  min-width: 282px;
  background-image: url(/img/rectangle-19@2x.svg);
  background-size: 100% 100%;
`;

const PROMOES = styled.div`
  width: 115px;
  min-height: 19px;
  letter-spacing: 0;
`;

const SHELLPROMOCAO = styled.img`
  width: 286px;
  height: 129px;
  margin-top: 13px;
  margin-right: 2px;
`;

const BRPROMOCAO = styled.img`
  width: 286px;
  height: 129px;
  margin-top: 4px;
  margin-right: 2px;
`;

const IPIRANGAPROMOCAO = styled.img`
  width: 286px;
  height: 129px;
  margin-top: 3px;
`;

export default UserHomePage;
