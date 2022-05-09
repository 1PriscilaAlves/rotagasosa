import React from "react";
import LOGINBUTTON2 from "../LOGINBUTTON2";
import styled from "styled-components";
import {
  PoppinsNormalMatisse14px,
  PoppinsBoldBlack20px,
  PoppinsNormalBlack14px,
  PoppinsNormalWhite14px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./UserLogin2.css";

function UserLogin2(props) {
  const {
    userLogin,
    microsoftteamsImageRemovebgPreview1,
    rotaDaGasosa,
    cpfCnpj,
    senha,
    esqueciMinhaSenha,
    spanText1,
    spanText2,
    lOGINBUTTON2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="user-login screen" style={{ backgroundImage: `url(${userLogin})` }}>
        <OverlapGroup3>
          <ICON>
            <MicrosoftTeamsImageRemovebgPreview1 src={microsoftteamsImageRemovebgPreview1} />
            <RotaDaGasosa>{rotaDaGasosa}</RotaDaGasosa>
          </ICON>
          <OverlapGroup1>
            <CPFCNPJ>{cpfCnpj}</CPFCNPJ>
          </OverlapGroup1>
          <OverlapGroup2>
            <SENHA>{senha}</SENHA>
          </OverlapGroup2>
          <EsqueciMinhaSenha>{esqueciMinhaSenha}</EsqueciMinhaSenha>
          <LOGINBUTTON2 login={lOGINBUTTON2Props.login} />
          <NoTemContaCadastreSe>
            <span className="poppins-normal-black-14px-2">{spanText1}</span>
            <span className="poppins-normal-matisse-14px">{spanText2}</span>
          </NoTemContaCadastreSe>
        </OverlapGroup3>
      </div>
    </div>
  );
}

const OverlapGroup3 = styled.div`
  width: 1293px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 84px 431px;
  align-items: flex-end;
  min-height: 720px;
  background-color: #dee2e61f;
`;

const ICON = styled.div`
  align-self: center;
  margin-top: 48px;
  margin-left: 39px;
  display: flex;
  align-items: center;
  min-width: 250px;
`;

const MicrosoftTeamsImageRemovebgPreview1 = styled.img`
  width: 72px;
  height: 83px;
  object-fit: cover;
`;

const RotaDaGasosa = styled.div`
  ${PoppinsBoldBlack20px}
  min-height: 30px;
  margin-left: 15px;
  margin-bottom: 15px;
  min-width: 161px;
  letter-spacing: 0;
`;

const OverlapGroup1 = styled.div`
  height: 50px;
  margin-top: 55px;
  display: flex;
  padding: 14px 21px;
  align-items: flex-end;
  min-width: 364px;
  background-color: var(--white);
  border-radius: 100px;
  box-shadow: 0px 4px 4px #00000040;
`;

const CPFCNPJ = styled.div`
  min-height: 21px;
  min-width: 72px;
  font-family: var(--font-family-poppins);
  font-weight: 700;
  color: var(--black);
  font-size: var(--font-size-l);
  letter-spacing: 0;
`;

const OverlapGroup2 = styled.div`
  height: 50px;
  margin-top: 28px;
  display: flex;
  padding: 0 24px;
  align-items: center;
  min-width: 364px;
  background-color: var(--white);
  border-radius: 100px;
  box-shadow: 0px 4px 4px #00000040;
`;

const SENHA = styled.div`
  ${PoppinsNormalBlack14px}
  width: 236px;
  min-height: 18px;
  letter-spacing: 0;
`;

const EsqueciMinhaSenha = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalMatisse14px}
            height: 21px;
  align-self: center;
  margin-top: 34px;
  margin-left: 67px;
  min-width: 150px;
  letter-spacing: 0;
`;

const NoTemContaCadastreSe = styled.div`
  ${PoppinsNormalWhite14px}
  width: 268px;
  min-height: 56px;
  align-self: center;
  margin-top: 55px;
  margin-left: 67px;
  text-align: center;
  letter-spacing: 0;
`;

export default UserLogin2;
