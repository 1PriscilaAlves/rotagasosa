import React from "react";
import NotificationIcon from "../NotificationIcon";
import styled from "styled-components";
import {
  RobotoBoldBlack20px2,
  RobotoNormalWhite14px,
  RobotoBoldWhite20px,
  RobotoBoldMatisse20px,
  RobotoBoldBlack10px,
  PoppinsBoldBlack20px,
  RobotoBoldBlack20px,
  RobotoBoldBlack10px2,
  ValignTextMiddle,
} from "../../styledMixins";
import "./X2UserHomePage.css";

function X2UserHomePage(props) {
  const {
    rectangle4,
    rectangle16,
    maisPrximo,
    mapa,
    indicadores,
    shell_Png1,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    br_Png1,
    ipiranga_Png1,
    shell_Png2,
    distncia12Km,
    br_Png2,
    distncia22Km,
    ipiranga_Png2,
    distncia32Km,
    ipiranga_Png3,
    distncia42Km,
    price1,
    price2,
    price3,
    km1000,
    km675,
    km400,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    ipiranga_Png4,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    spanText17,
    spanText18,
    spanText19,
    price4,
    km1500,
    spanText20,
    spanText21,
    spanText22,
    spanText23,
    spanText24,
    spanText25,
    spanText26,
    spanText27,
    spanText28,
    spanText29,
    spanText30,
    spanText31,
    spanText32,
    spanText33,
    spanText34,
    spanText35,
    spanText36,
    spanText37,
    spanText38,
    spanText39,
    spanText40,
    spanText41,
    spanText42,
    spanText43,
    spanText44,
    spanText45,
    spanText46,
    spanText47,
    spanText48,
    missao,
    valores,
    criadores,
    ls1,
    luisSantos222222222222,
    minhaConta,
    sair,
    ls2,
    rotaDaGasosa1,
    text1,
    rotaDaGasosa2,
    microsoftteamsImageRemovebgPreview1,
    ls3,
    notificationIcon1Props,
    notificationIcon2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="x2-user-home-page screen">
        <OverlapGroupContainer>
          <OverlapGroup11>
            <Rectangle8></Rectangle8>
            <Rectangle3></Rectangle3>
            <Rectangle4 src={rectangle4} />
            <Rectangle4 src={rectangle16} />
            <OverlapGroup>
              <MAISPRXIMO>{maisPrximo}</MAISPRXIMO>
            </OverlapGroup>
            <X93775559316318749191></X93775559316318749191>
            <Rectangle6></Rectangle6>
            <Rectangle7></Rectangle7>
            <MAPA>{mapa}</MAPA>
            <INDICADORES>{indicadores}</INDICADORES>
            <Group14>
              <FlexCol>
                <Rectangle19 src="/img/rectangle-19-4@2x.svg" />
                <Rectangle20 src="/img/rectangle-19-4@2x.svg" />
                <Rectangle21 src="/img/rectangle-19-4@2x.svg" />
              </FlexCol>
              <OverlapGroupContainer1>
                <OverlapGroup2>
                  <SHELLPNG src={shell_Png1} />
                  <CombustvelGasolina>
                    <span className="roboto-bold-black-10px">{spanText1}</span>
                    <span className="roboto-bold-black-10px">{spanText2}</span>
                    <span className="roboto-normal-black-10px">{spanText3}</span>
                  </CombustvelGasolina>
                  <PrecoCombustvelR607>
                    <span className="roboto-bold-black-10px">{spanText4}</span>
                    <span className="roboto-normal-black-10px">{spanText5}</span>
                  </PrecoCombustvelR607>
                  <PrecoCombustvelR607>
                    <span className="roboto-bold-black-10px">{spanText6}</span>
                    <span className="roboto-normal-black-10px">{spanText7}</span>
                  </PrecoCombustvelR607>
                </OverlapGroup2>
                <OverlapGroup4>
                  <BRPNG src={br_Png1} />
                </OverlapGroup4>
                <OverlapGroup3>
                  <IPIRANGAPNG src={ipiranga_Png1} />
                </OverlapGroup3>
              </OverlapGroupContainer1>
              <OverlapGroupContainer2>
                <OverlapGroup7>
                  <SHELLPNG1 src={shell_Png2} />
                  <Distncia12Km>{distncia12Km}</Distncia12Km>
                </OverlapGroup7>
                <OverlapGroup5>
                  <BRPNG1 src={br_Png2} />
                  <Distncia22Km>{distncia22Km}</Distncia22Km>
                </OverlapGroup5>
                <OverlapGroup1>
                  <IPIRANGAPNG1 src={ipiranga_Png2} />
                  <Distncia32Km>{distncia32Km}</Distncia32Km>
                </OverlapGroup1>
                <OverlapGroup6>
                  <IPIRANGAPNG2 src={ipiranga_Png3} />
                  <Distncia42Km>{distncia42Km}</Distncia42Km>
                </OverlapGroup6>
              </OverlapGroupContainer2>
            </Group14>
            <Price>{price1}</Price>
            <Price1>{price2}</Price1>
            <Price2>{price3}</Price2>
            <KM1000>{km1000}</KM1000>
            <KM675>{km675}</KM675>
            <KM400>{km400}</KM400>
            <NomeFantasiaGuilh>
              <span className="roboto-bold-black-10px">{spanText8}</span>
              <span className="roboto-normal-black-10px">{spanText9}</span>
            </NomeFantasiaGuilh>
            <EndereoAvOIgor>
              <span className="roboto-bold-black-10px">{spanText10}</span>
              <span className="roboto-bold-black-10px">{spanText11}</span>
              <span className="roboto-normal-black-10px">{spanText12}</span>
            </EndereoAvOIgor>
            <Rectangle17 src="/img/rectangle-17@1x.svg" />
            <IPIRANGAPNG3 src={ipiranga_Png4} />
            <CombustvelGasolina1>
              <span className="roboto-bold-black-10px">{spanText13}</span>
              <span className="roboto-bold-black-10px">{spanText14}</span>
              <span className="roboto-normal-black-10px">{spanText15}</span>
            </CombustvelGasolina1>
            <PrecoCombustvelR6071>
              <span className="roboto-bold-black-10px">{spanText16}</span>
              <span className="roboto-normal-black-10px">{spanText17}</span>
            </PrecoCombustvelR6071>
            <TotalDeLitros36Litros>
              <span className="roboto-bold-black-10px">{spanText18}</span>
              <span className="roboto-normal-black-10px">{spanText19}</span>
            </TotalDeLitros36Litros>
            <Price3>{price4}</Price3>
            <KM1500>{km1500}</KM1500>
            <NomeFantasiaGuilh1>
              <span className="roboto-bold-black-10px">{spanText20}</span>
              <span className="roboto-normal-black-10px">{spanText21}</span>
            </NomeFantasiaGuilh1>
            <EndereoAvOIgor1>
              <span className="roboto-bold-black-10px">{spanText22}</span>
              <span className="roboto-bold-black-10px">{spanText23}</span>
              <span className="roboto-normal-black-10px">{spanText24}</span>
            </EndereoAvOIgor1>
            <CombustvelLcool>
              <span className="roboto-bold-black-10px">{spanText25}</span>
              <span className="roboto-bold-black-10px">{spanText26}</span>
              <span className="roboto-normal-black-10px">{spanText27}</span>
            </CombustvelLcool>
            <PrecoCombustvelR407>
              <span className="roboto-bold-black-10px">{spanText28}</span>
              <span className="roboto-normal-black-10px">{spanText29}</span>
            </PrecoCombustvelR407>
            <TotalDeLitros56Litros>
              <span className="roboto-bold-black-10px">{spanText30}</span>
              <span className="roboto-normal-black-10px">{spanText31}</span>
            </TotalDeLitros56Litros>
            <NomeFantasiaGuilh2>
              <span className="roboto-bold-black-10px">{spanText32}</span>
              <span className="roboto-normal-black-10px">{spanText33}</span>
            </NomeFantasiaGuilh2>
            <EndereoAvOIgor2>
              <span className="roboto-bold-black-10px">{spanText34}</span>
              <span className="roboto-bold-black-10px">{spanText35}</span>
              <span className="roboto-normal-black-10px">{spanText36}</span>
            </EndereoAvOIgor2>
            <CombustvelLcool1>
              <span className="roboto-bold-black-10px">{spanText37}</span>
              <span className="roboto-bold-black-10px">{spanText38}</span>
              <span className="roboto-normal-black-10px">{spanText39}</span>
            </CombustvelLcool1>
            <PrecoCombustvelR4071>
              <span className="roboto-bold-black-10px">{spanText40}</span>
              <span className="roboto-normal-black-10px">{spanText41}</span>
            </PrecoCombustvelR4071>
            <TotalDeLitros40Litros>
              <span className="roboto-bold-black-10px">{spanText42}</span>
              <span className="roboto-normal-black-10px">{spanText43}</span>
            </TotalDeLitros40Litros>
            <NomeFantasiaGuilh3>
              <span className="roboto-bold-black-10px">{spanText44}</span>
              <span className="roboto-normal-black-10px">{spanText45}</span>
            </NomeFantasiaGuilh3>
            <EndereoAvOIgor3>
              <span className="roboto-bold-black-10px">{spanText46}</span>
              <span className="roboto-bold-black-10px">{spanText47}</span>
              <span className="roboto-normal-black-10px">{spanText48}</span>
            </EndereoAvOIgor3>
            <MISSAO>{missao}</MISSAO>
            <VALORES>{valores}</VALORES>
            <CRIADORES>{criadores}</CRIADORES>
            <OverlapGroup10>
              <Rectangle32></Rectangle32>
              <OverlapGroup8>
                <LS>{ls1}</LS>
              </OverlapGroup8>
              <LuisSantos222222222222>{luisSantos222222222222}</LuisSantos222222222222>
              <OverlapGroup12>
                <MinhaConta>{minhaConta}</MinhaConta>
              </OverlapGroup12>
              <Sair>{sair}</Sair>
            </OverlapGroup10>
          </OverlapGroup11>
          <OverlapGroup121>
            <Rectangle24></Rectangle24>
            <OverlapGroup81>
              <LS>{ls2}</LS>
            </OverlapGroup81>
            <NotificationIcon className={notificationIcon1Props.className} />
            <RotaDaGasosa>{rotaDaGasosa1}</RotaDaGasosa>
            <Text1>{text1}</Text1>
            <Rectangle24></Rectangle24>
            <RotaDaGasosa>{rotaDaGasosa2}</RotaDaGasosa>
            <MicrosoftTeamsImageRemovebgPreview1 src={microsoftteamsImageRemovebgPreview1} />
            <OverlapGroup9>
              <LS>{ls3}</LS>
            </OverlapGroup9>
            <NotificationIcon className={notificationIcon2Props.className} />
          </OverlapGroup121>
        </OverlapGroupContainer>
        <Rectangle22></Rectangle22>
      </div>
    </div>
  );
}

const OverlapGroupContainer = styled.div`
  width: 1280px;
  height: 697px;
  position: relative;
  margin-left: 1px;
`;

const OverlapGroup11 = styled.div`
  position: absolute;
  width: 1268px;
  height: 630px;
  top: 67px;
  left: 12px;
`;

const Rectangle8 = styled.div`
  position: absolute;
  width: 299px;
  height: 543px;
  top: 87px;
  left: 10px;
  background-color: var(--matisse);
  border-radius: 17px;
`;

const Rectangle3 = styled.div`
  position: absolute;
  width: 606px;
  height: 543px;
  top: 87px;
  left: 324px;
  background-color: var(--matisse);
  border-radius: 16px;
`;

const Rectangle4 = styled.img`
  position: absolute;
  width: 1244px;
  height: 61px;
  top: 8px;
  left: 5px;
`;

const OverlapGroup = styled.div`
  position: absolute;
  height: 57px;
  top: 10px;
  left: 503px;
  display: flex;
  padding: 0 22px;
  justify-content: flex-end;
  align-items: center;
  min-width: 248px;
  background-color: var(--matisse);
`;

const MAISPRXIMO = styled.div`
  ${RobotoBoldWhite20px}
  min-height: 23px;
  min-width: 140px;
  letter-spacing: 0;
`;

const X93775559316318749191 = styled.div`
  position: absolute;
  width: 33px;
  height: 32px;
  top: 22px;
  left: 537px;
  background-image: url(/img/vector@2x.svg);
  background-size: 100% 100%;
`;

const Rectangle6 = styled.div`
  position: absolute;
  width: 12px;
  height: 57px;
  top: 10px;
  left: 0;
  background-color: var(--mercury);
`;

const Rectangle7 = styled.div`
  position: absolute;
  width: 12px;
  height: 57px;
  top: 10px;
  left: 1242px;
  background-color: var(--mercury);
`;

const MAPA = styled.div`
  ${RobotoBoldMatisse20px}
  position: absolute;
  width: 66px;
  top: 27px;
  left: 214px;
  letter-spacing: 0;
`;

const INDICADORES = styled.div`
  ${RobotoBoldMatisse20px}
  position: absolute;
  width: 129px;
  top: 27px;
  left: 964px;
  letter-spacing: 0;
`;

const Group14 = styled.div`
  position: absolute;
  height: 543px;
  top: 87px;
  left: 20px;
  display: flex;
  align-items: center;
  min-width: 1248px;
`;

const FlexCol = styled.div`
  width: 280px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 508px;
`;

const Rectangle19 = styled.img`
  width: 278px;
  height: 154px;
`;

const Rectangle20 = styled.img`
  width: 278px;
  height: 154px;
  margin-top: 23px;
  margin-left: 2px;
`;

const Rectangle21 = styled.img`
  width: 278px;
  height: 154px;
  margin-top: 23px;
`;

const OverlapGroupContainer1 = styled.div`
  width: 543px;
  align-self: flex-end;
  margin-left: 56px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 383px;
`;

const OverlapGroup2 = styled.div`
  ${RobotoBoldBlack10px}
  width: 543px;
  display: flex;
  flex-direction: column;
  padding: 9px 19px;
  align-items: flex-start;
  min-height: 121px;
  background-image: url(/img/rectangle-17@1x.svg);
  background-size: 100% 100%;
`;

const SHELLPNG = styled.img`
  width: 27px;
  height: 27px;
  margin-top: 2px;
  object-fit: cover;
`;

const CombustvelGasolina = styled.div`
  min-height: 12px;
  margin-top: 36px;
  letter-spacing: 0;
`;

const PrecoCombustvelR607 = styled.div`
  min-height: 12px;
  margin-top: 1px;
  letter-spacing: 0;
`;

const OverlapGroup4 = styled.div`
  height: 121px;
  margin-top: 10px;
  display: flex;
  padding: 12px 19px;
  align-items: flex-start;
  min-width: 543px;
  background-image: url(/img/rectangle-17@1x.svg);
  background-size: 100% 100%;
`;

const BRPNG = styled.img`
  width: 30px;
  height: 32px;
  object-fit: cover;
`;

const OverlapGroup3 = styled.div`
  height: 121px;
  margin-top: 10px;
  display: flex;
  padding: 10px 19px;
  align-items: flex-start;
  min-width: 543px;
  background-image: url(/img/rectangle-17@1x.svg);
  background-size: 100% 100%;
`;

const IPIRANGAPNG = styled.img`
  width: 33px;
  height: 30px;
  object-fit: cover;
`;

const OverlapGroupContainer2 = styled.div`
  width: 299px;
  margin-left: 56px;
  display: flex;
  flex-direction: column;
  padding: 14px 0;
  align-items: center;
  min-height: 543px;
  background-color: var(--matisse);
  border-radius: 17px;
`;

const OverlapGroup7 = styled.div`
  width: 278px;
  margin-right: 1px;
  display: flex;
  flex-direction: column;
  padding: 6px 18px;
  align-items: flex-start;
  min-height: 121px;
  background-image: url(/img/rectangle-11@2x.svg);
  background-size: 100% 100%;
`;

const SHELLPNG1 = styled.img`
  width: 22px;
  height: 20px;
  margin-top: 8px;
  object-fit: cover;
`;

const Distncia12Km = styled.div`
  ${RobotoBoldBlack10px2}
  min-height: 12px;
  margin-top: 69px;
  letter-spacing: 0;
`;

const OverlapGroup5 = styled.div`
  width: 278px;
  margin-top: 10px;
  margin-right: 1px;
  display: flex;
  flex-direction: column;
  padding: 7px 19px;
  align-items: flex-start;
  min-height: 121px;
  background-image: url(/img/rectangle-11@2x.svg);
  background-size: 100% 100%;
`;

const BRPNG1 = styled.img`
  width: 22px;
  height: 24px;
  margin-top: 7px;
  margin-left: 1px;
  object-fit: cover;
`;

const Distncia22Km = styled.div`
  ${RobotoBoldBlack10px2}
  min-height: 12px;
  margin-top: 64px;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  width: 278px;
  margin-top: 10px;
  margin-left: 1px;
  display: flex;
  flex-direction: column;
  padding: 14px 17px;
  align-items: flex-start;
  min-height: 121px;
  background-image: url(/img/rectangle-11@2x.svg);
  background-size: 100% 100%;
`;

const IPIRANGAPNG1 = styled.img`
  width: 24px;
  height: 20px;
  object-fit: cover;
`;

const Distncia32Km = styled.div`
  ${RobotoBoldBlack10px2}
  min-height: 12px;
  margin-top: 61px;
  margin-left: 2px;
  letter-spacing: 0;
`;

const OverlapGroup6 = styled.div`
  width: 278px;
  margin-top: 10px;
  margin-left: 1px;
  display: flex;
  flex-direction: column;
  padding: 7px 15px;
  align-items: flex-start;
  min-height: 121px;
  background-image: url(/img/rectangle-11@2x.svg);
  background-size: 100% 100%;
`;

const IPIRANGAPNG2 = styled.img`
  width: 24px;
  height: 20px;
  margin-top: 7px;
  object-fit: cover;
`;

const Distncia42Km = styled.div`
  ${RobotoBoldBlack10px2}
  min-height: 12px;
  margin-top: 68px;
  margin-left: 4px;
  letter-spacing: 0;
`;

const Price = styled.div`
  ${RobotoBoldBlack20px2}
  position: absolute;
  top: 238px;
  left: 414px;
  letter-spacing: 0;
`;

const Price1 = styled.div`
  ${RobotoBoldBlack20px2}
  position: absolute;
  top: 369px;
  left: 414px;
  letter-spacing: 0;
`;

const Price2 = styled.div`
  ${RobotoBoldBlack20px2}
  position: absolute;
  top: 497px;
  left: 414px;
  letter-spacing: 0;
`;

const KM1000 = styled.div`
  ${RobotoBoldBlack20px}
  position: absolute;
  top: 238px;
  left: 783px;
  letter-spacing: 0;
`;

const KM675 = styled.div`
  ${RobotoBoldBlack20px}
  position: absolute;
  top: 369px;
  left: 789px;
  letter-spacing: 0;
`;

const KM400 = styled.div`
  ${RobotoBoldBlack20px}
  position: absolute;
  top: 497px;
  left: 789px;
  letter-spacing: 0;
`;

const NomeFantasiaGuilh = styled.p`
  ${RobotoBoldBlack10px}
  position: absolute;
  width: 234px;
  top: 270px;
  left: 375px;
  letter-spacing: 0;
`;

const EndereoAvOIgor = styled.p`
  ${RobotoBoldBlack10px}
  position: absolute;
  width: 339px;
  top: 283px;
  left: 375px;
  letter-spacing: 0;
`;

const Rectangle17 = styled.img`
  position: absolute;
  width: 543px;
  height: 121px;
  top: 95px;
  left: 356px;
`;

const IPIRANGAPNG3 = styled.img`
  position: absolute;
  width: 33px;
  height: 30px;
  top: 107px;
  left: 374px;
  object-fit: cover;
`;

const CombustvelGasolina1 = styled.div`
  ${RobotoBoldBlack10px}
  position: absolute;
  top: 169px;
  left: 375px;
  letter-spacing: 0;
`;

const PrecoCombustvelR6071 = styled.div`
  ${RobotoBoldBlack10px}
  position: absolute;
  top: 182px;
  left: 375px;
  letter-spacing: 0;
`;

const TotalDeLitros36Litros = styled.p`
  ${RobotoBoldBlack10px}
  position: absolute;
  top: 195px;
  left: 375px;
  letter-spacing: 0;
`;

const Price3 = styled.div`
  ${RobotoBoldBlack20px2}
  position: absolute;
  top: 111px;
  left: 414px;
  letter-spacing: 0;
`;

const KM1500 = styled.div`
  ${RobotoBoldBlack20px}
  position: absolute;
  top: 111px;
  left: 783px;
  letter-spacing: 0;
`;

const NomeFantasiaGuilh1 = styled.p`
  ${RobotoBoldBlack10px}
  position: absolute;
  width: 234px;
  top: 143px;
  left: 375px;
  letter-spacing: 0;
`;

const EndereoAvOIgor1 = styled.p`
  ${RobotoBoldBlack10px}
  position: absolute;
  width: 339px;
  top: 156px;
  left: 375px;
  letter-spacing: 0;
`;

const CombustvelLcool = styled.div`
  ${RobotoBoldBlack10px}
  position: absolute;
  top: 429px;
  left: 375px;
  letter-spacing: 0;
`;

const PrecoCombustvelR407 = styled.div`
  ${RobotoBoldBlack10px}
  position: absolute;
  top: 442px;
  left: 375px;
  letter-spacing: 0;
`;

const TotalDeLitros56Litros = styled.p`
  ${RobotoBoldBlack10px}
  position: absolute;
  top: 455px;
  left: 375px;
  letter-spacing: 0;
`;

const NomeFantasiaGuilh2 = styled.p`
  ${RobotoBoldBlack10px}
  position: absolute;
  width: 234px;
  top: 403px;
  left: 375px;
  letter-spacing: 0;
`;

const EndereoAvOIgor2 = styled.p`
  ${RobotoBoldBlack10px}
  position: absolute;
  width: 339px;
  top: 416px;
  left: 375px;
  letter-spacing: 0;
`;

const CombustvelLcool1 = styled.div`
  ${RobotoBoldBlack10px}
  position: absolute;
  top: 558px;
  left: 375px;
  letter-spacing: 0;
`;

const PrecoCombustvelR4071 = styled.div`
  ${RobotoBoldBlack10px}
  position: absolute;
  top: 571px;
  left: 375px;
  letter-spacing: 0;
`;

const TotalDeLitros40Litros = styled.p`
  ${RobotoBoldBlack10px}
  position: absolute;
  top: 584px;
  left: 375px;
  letter-spacing: 0;
`;

const NomeFantasiaGuilh3 = styled.p`
  ${RobotoBoldBlack10px}
  position: absolute;
  width: 234px;
  top: 532px;
  left: 375px;
  letter-spacing: 0;
`;

const EndereoAvOIgor3 = styled.p`
  ${RobotoBoldBlack10px}
  position: absolute;
  width: 339px;
  top: 545px;
  left: 375px;
  letter-spacing: 0;
`;

const MISSAO = styled.div`
  ${RobotoBoldBlack10px}
  position: absolute;
  top: 179px;
  left: 140px;
  letter-spacing: 0;
`;

const VALORES = styled.div`
  ${RobotoBoldBlack10px}
  position: absolute;
  top: 359px;
  left: 142px;
  letter-spacing: 0;
`;

const CRIADORES = styled.div`
  ${RobotoBoldBlack10px}
  position: absolute;
  top: 539px;
  left: 137px;
  letter-spacing: 0;
`;

const OverlapGroup10 = styled.div`
  position: absolute;
  width: 335px;
  height: 213px;
  top: 0;
  left: 920px;
`;

const Rectangle32 = styled.div`
  position: absolute;
  width: 334px;
  height: 213px;
  top: 0;
  left: 0;
  background-color: var(--concrete);
  border-radius: 14px;
`;

const OverlapGroup8 = styled.div`
  position: absolute;
  height: 36px;
  top: 14px;
  left: 154px;
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

const LuisSantos222222222222 = styled.div`
  position: absolute;
  top: 64px;
  left: 76px;
  font-family: var(--font-family-roboto);
  font-weight: 400;
  color: var(--black);
  font-size: var(--font-size-l);
  letter-spacing: 0;
`;

const OverlapGroup12 = styled.div`
  position: absolute;
  height: 53px;
  top: 95px;
  left: 0;
  display: flex;
  padding: 13px 105px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 335px;
  background-color: var(--concrete);
`;

const MinhaConta = styled.div`
  min-height: 23px;
  min-width: 114px;
  font-family: var(--font-family-roboto);
  font-weight: 400;
  color: var(--black);
  font-size: var(--font-size-xxxl);
  letter-spacing: 0;
`;

const Sair = styled.div`
  ${RobotoBoldBlack20px}
  position: absolute;
  top: 170px;
  left: 155px;
  letter-spacing: 0;
`;

const OverlapGroup121 = styled.div`
  position: absolute;
  width: 1280px;
  height: 68px;
  top: 0;
  left: 0;
`;

const Rectangle24 = styled.div`
  position: absolute;
  width: 1280px;
  height: 54px;
  top: 0;
  left: 0;
  background-color: var(--concrete);
  box-shadow: 0px 4px 4px #00000040;
`;

const OverlapGroup81 = styled.div`
  position: absolute;
  height: 36px;
  top: 11px;
  left: 1230px;
  display: flex;
  padding: 0 10px;
  justify-content: flex-end;
  align-items: center;
  min-width: 37px;
  background-color: var(--matisse);
  border-radius: 18.5px/18px;
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

const Text1 = styled.div`
  ${ValignTextMiddle}
  position: absolute;
  height: 30px;
  top: 7px;
  left: 1199px;
  font-family: var(--font-family-open_sans);
  font-weight: 800;
  color: var(--black);
  font-size: 22px;
  letter-spacing: 0;
`;

const MicrosoftTeamsImageRemovebgPreview1 = styled.img`
  position: absolute;
  width: 34px;
  height: 40px;
  top: 12px;
  left: 25px;
  object-fit: cover;
`;

const OverlapGroup9 = styled.div`
  position: absolute;
  height: 36px;
  top: 11px;
  left: 1217px;
  display: flex;
  padding: 0 10px;
  justify-content: flex-end;
  align-items: center;
  min-width: 37px;
  background-color: var(--matisse);
  border-radius: 18.5px/18px;
`;

const Rectangle22 = styled.div`
  width: 1280px;
  height: 174px;
  margin-top: 22px;
  background-color: #c4c4c4;
`;

export default X2UserHomePage;
