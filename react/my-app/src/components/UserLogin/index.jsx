import React from "react";
import LOGINBUTTON from "../LOGINBUTTON";
import styled from "styled-components";
import {
  PoppinsNormalMatisse14px,
  PoppinsBoldBlack20px,
  PoppinsNormalBlack14px,
  PoppinsNormalWhite14px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./UserLogin.css";

function UserLogin(props) {
  const {
    microsoftteamsImageRemovebgPreview1,
    rotaDaGasosa,
    senha,
    esqueciMinhaSenha,
    login,
    spanText1,
    spanText2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="user-login-1 screen">
        <ICON>
          <MicrosoftTeamsImageRemovebgPreview1 src={microsoftteamsImageRemovebgPreview1} />
          <RotaDaGasosa>{rotaDaGasosa}</RotaDaGasosa>
        </ICON>
        <CONTAINERPASSWORKINPUT>
          <OverlapGroup>
            <SENHA>{senha}</SENHA>
          </OverlapGroup>
        </CONTAINERPASSWORKINPUT>
        <EsqueciMinhaSenha>{esqueciMinhaSenha}</EsqueciMinhaSenha>
        <LoginContainer>
          <LOGINBUTTON />
          <LOGIN>{login}</LOGIN>
        </LoginContainer>
        <NoTemContaCadastreSe>
          <span className="poppins-normal-black-14px-2">{spanText1}</span>
          <span className="poppins-normal-matisse-14px">{spanText2}</span>
        </NoTemContaCadastreSe>
      </div>
    </div>
  );
}

const ICON = styled.div`
  width: 163px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 113px;
`;

const MicrosoftTeamsImageRemovebgPreview1 = styled.img`
  width: 72px;
  height: 83px;
  margin-right: 3px;
  object-fit: cover;
`;

const RotaDaGasosa = styled.div`
  ${PoppinsBoldBlack20px}
  min-height: 30px;
  margin-right: 2px;
  min-width: 161px;
  letter-spacing: 0;
`;

const CONTAINERPASSWORKINPUT = styled.div`
  align-self: flex-end;
  margin-top: 122px;
  display: flex;
  align-items: flex-start;
  min-width: 318px;
`;

const OverlapGroup = styled.div`
  height: 50px;
  display: flex;
  padding: 0 20.8px;
  align-items: center;
  min-width: 316px;
  background-color: var(--white);
  border-radius: 100px;
  box-shadow: 0px 4px 4px #00000040;
`;

const SENHA = styled.div`
  ${PoppinsNormalBlack14px}
  width: 205px;
  min-height: 18px;
  letter-spacing: 0;
`;

const EsqueciMinhaSenha = styled.div`
  ${ValignTextMiddle}
  ${PoppinsNormalMatisse14px}
            height: 21px;
  margin-top: 26px;
  margin-right: 1px;
  min-width: 150px;
  letter-spacing: 0;
`;

const LoginContainer = styled.div`
  width: 316px;
  height: 38px;
  position: relative;
  margin-top: 27px;
  margin-right: 1px;
`;

const LOGIN = styled.div`
  position: absolute;
  top: 8px;
  left: 137px;
  font-family: var(--font-family-poppins);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-l);
  text-align: center;
  letter-spacing: 0;
`;

const NoTemContaCadastreSe = styled.div`
  ${PoppinsNormalWhite14px}
  width: 268px;
  min-height: 56px;
  margin-top: 214px;
  margin-right: 1px;
  text-align: center;
  letter-spacing: 0;
`;

export default UserLogin;
