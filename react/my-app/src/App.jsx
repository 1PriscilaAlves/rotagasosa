
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import UserLogin from "./components/UserLogin";
import UserHomePage from "./components/UserHomePage";
import UserHomePage2 from "./components/UserHomePage2";
import UserMapa from "./components/UserMapa";
import UserLogin2 from "./components/UserLogin2";
import UserMapa2 from "./components/UserMapa2";
import X2UserHomePage from "./components/X2UserHomePage";

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
      <h1>Menu</h1>
        <nav>
          <ul>
            <li><Link to="/user-login-1">Login</Link></li>
            <li><Link to="/user-home-page-1">home 1</Link></li>
            <li><Link to="/user-home-page">home</Link></li>            
            <li><Link to="/user-mapa-1">Mapa</Link></li>
            <li><Link to="//2-user-home-page">home 2</Link></li>
          </ul>
        </nav>
        </header>
        </div>
      <Switch>
        <Route path="/user-login-1">
          <UserLogin
            microsoftteamsImageRemovebgPreview1="/img/microsoftteams-image-removebg-preview--1--2@2x.png"
            rotaDaGasosa="Rota da Gasosa"
            senha="*****************"
            esqueciMinhaSenha="Esqueci minha senha"
            login="LOGIN"
            spanText1="Não tem conta?"
            spanText2=" Cadastre-se"
          />
        </Route>
        <Route path="/user-home-page-1">
          <UserHomePage {...userHomePageData} />
        </Route>
        <Route path="/user-home-page">
          <UserHomePage2 {...userHomePage2Data} />
        </Route>
        <Route path="/user-mapa-1">
          <UserMapa
            card_PostoContainer=""
            postosDsponiveisNaRegio="POSTOS DÍSPONIVEIS NA REGIÃO"
            distnciaMximaQuilmetros="Distância Máxima (Quilômetros)"
            tiposDeCombustvel="Tipos de Combustível"
            serviosDisponveis="Serviços Disponíveis"
            preosMnimo="Preços Mínimo"
            preosMximo="Preços Máximo"
          />
        </Route>
        <Route path="/:path(|user-login)">
          <UserLogin2 {...userLogin2Data} />
        </Route>
        <Route path="/user-mapa">
          <UserMapa2
            overlapGroup=""
            title="POSTO 2"
            posto3="POSTO 3"
            posto4="POSTO 4"
            postosDsponiveisNaRegio="POSTOS DÍSPONIVEIS NA REGIÃO"
            posto1="POSTO 1"
            mAPAProps={userMapa2Data.mAPAProps}
          />
        </Route>
        <Route path="/2-user-home-page">
          <X2UserHomePage {...x2UserHomePageData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const userHomePageData = {
    rectangle4: "",
    rectangle16: "",
    maisPrximo: "MAIS PRÓXIMO",
    mapa: "MAPA",
    indicadores: "INDICADORES",
    sobre: "SOBRE",
    valores: "VALORES",
    criadores: "CRIADORES",
    ltimos10AbastecimentosRealizados1: "ÚLTIMOS 10 ABASTECIMENTOS REALIZADOS",
    ltimos10AbastecimentosRealizados2: "ÚLTIMOS 10 ABASTECIMENTOS REALIZADOS",
    promoes: "PROMOÇÕES",
};

const notificationIcon2Data = {
    className: "notification_icon-1",
};

const userHomePage2Data = {
    ls: "LS",
    rotaDaGasosa: "Rota da Gasosa",
    overlapGroup5: "/img/rectangle-17@1x.png",
    mapa: "MAPA",
    maisPrximo: "MAIS PRÓXIMO",
    indicadores: "INDICADORES",
    distncia12Km1: "Distância: 1,2 km",
    distncia12Km2: "Distância: 1,2 km",
    distncia12Km3: "Distância: 1,2 km",
    distncia12Km4: "Distância: 1,2 km",
    notificationIconProps: notificationIcon2Data,
};

const lOGINBUTTON2Data = {
    login: "LOGIN",
};

const userLogin2Data = {
    userLogin: "",
    microsoftteamsImageRemovebgPreview1: "/img/microsoftteams-image-removebg-preview--1--2@2x.png",
    rotaDaGasosa: "Rota da Gasosa",
    cpfCnpj: "CPF/CNPJ",
    senha: "*****************",
    esqueciMinhaSenha: "Esqueci minha senha",
    spanText1: "Não tem conta?",
    spanText2: " Cadastre-se",
    lOGINBUTTON2Props: lOGINBUTTON2Data,
};

const mAPA2Data = {
    className: "mapa-3",
};

const userMapa2Data = {
    overlapGroup: "",
    title: "POSTO 2",
    posto3: "POSTO 3",
    posto4: "POSTO 4",
    postosDsponiveisNaRegio: "POSTOS DÍSPONIVEIS NA REGIÃO",
    posto1: "POSTO 1",
    mAPAProps: mAPA2Data,
};

const notificationIcon5Data = {
    className: "notification_icon-3",
};

const notificationIcon6Data = {
    className: "notification_icon-4",
};

const x2UserHomePageData = {
    rectangle4: "",
    rectangle16: "",
    maisPrximo: "MAIS PRÓXIMO",
    mapa: "MAPA",
    indicadores: "INDICADORES",
    shell_Png1: "/img/shell-png-1@2x.png",
    spanText1: "Combustível:",
    spanText2: " ",
    spanText3: "Gasolina",
    spanText4: "Preco Combustível:",
    spanText5: " R$ 6,07",
    spanText6: "Total de Litros: ",
    spanText7: "36 litros",
    br_Png1: "/img/br-png-1@2x.png",
    ipiranga_Png1: "/img/ipiranga-png@2x.png",
    shell_Png2: "/img/shell-png@2x.png",
    distncia12Km: "Distância: 1,2 km",
    br_Png2: "/img/br-png@2x.png",
    distncia22Km: "Distância: 2,2 km",
    ipiranga_Png2: "/img/ipiranga-png-1@2x.png",
    distncia32Km: "Distância: 3,2 km",
    ipiranga_Png3: "/img/ipiranga-png-1@2x.png",
    distncia42Km: "Distância: 4,2 km",
    price1: "R$ 172,45",
    price2: "R$ 168,60",
    price3: "R$ 138,60",
    km1000: "KM - 1000",
    km675: "KM - 675",
    km400: "KM - 400",
    spanText8: "Nome Fantasia:",
    spanText9: " Guilherme Harich LTDA falsificada",
    spanText10: "Endereço:",
    spanText11: " ",
    spanText12: "Av O Igor não vai dar carona, 123, Sao  Bernardo do Campo - SP",
    ipiranga_Png4: "/img/ipiranga-png@2x.png",
    spanText13: "Combustível:",
    spanText14: " ",
    spanText15: "Gasolina",
    spanText16: "Preco Combustível:",
    spanText17: " R$ 6,07",
    spanText18: "Total de Litros: ",
    spanText19: "36 litros",
    price4: "R$ 172,45",
    km1500: "KM - 1500",
    spanText20: "Nome Fantasia:",
    spanText21: " Guilherme Harich LTDA falsificada",
    spanText22: "Endereço:",
    spanText23: " ",
    spanText24: "Av O Igor não vai dar carona, 123, Sao  Bernardo do Campo - SP",
    spanText25: "Combustível:",
    spanText26: " ",
    spanText27: "Álcool",
    spanText28: "Preco Combustível:",
    spanText29: " R$ 4,07",
    spanText30: "Total de Litros: ",
    spanText31: "56 litros",
    spanText32: "Nome Fantasia:",
    spanText33: " Guilherme Harich LTDA falsificada",
    spanText34: "Endereço:",
    spanText35: " ",
    spanText36: "Av O Igor não vai dar carona, 123, Sao  Bernardo do Campo - SP",
    spanText37: "Combustível:",
    spanText38: " ",
    spanText39: "Álcool",
    spanText40: "Preco Combustível:",
    spanText41: " R$ 4,07",
    spanText42: "Total de Litros: ",
    spanText43: "40 litros",
    spanText44: "Nome Fantasia:",
    spanText45: " Guilherme Harich LTDA falsificada",
    spanText46: "Endereço:",
    spanText47: " ",
    spanText48: "Av O Igor não vai dar carona, 123, Sao  Bernardo do Campo - SP",
    missao: "MISSAO",
    valores: "VALORES",
    criadores: "CRIADORES",
    ls1: "LS",
    luisSantos222222222222: "Luis, Santos (222.222.222.222)",
    minhaConta: "Minha Conta",
    sair: "Sair",
    ls2: "LS",
    rotaDaGasosa1: "Rota da Gasosa",
    text1: "...",
    rotaDaGasosa2: "Rota da Gasosa",
    microsoftteamsImageRemovebgPreview1: "/img/rota-gasosa-logo@2x.png",
    ls3: "LS",
    notificationIcon1Props: notificationIcon5Data,
    notificationIcon2Props: notificationIcon6Data,
};

