import React from "react";
import IcuserMarker from "../IcuserMarker";
import styled from "styled-components";


function MAPA(props) {
  const { className } = props;

  return (
    <MAPA1 className={`mapa-2 ${className || ""}`}>
      <Frame className="frame"></Frame>
      <FlexCol className="flex-col">
        <Frame1 className="frame-1"></Frame1>
        <Frame2 className="frame-2"></Frame2>
        <FlexRow className="flex-row-1">
          <Frame3 className="frame-3"></Frame3>
          <Frame4 className="frame-4"></Frame4>
          <FlexCol1 className="flex-col-1">
            <Location className="location">
              <IcuserMarker />
            </Location>
            <Frame5 className="frame-5"></Frame5>
          </FlexCol1>
          <Frame6 className="frame-6"></Frame6>
          <Frame7 className="frame-7"></Frame7>
        </FlexRow>
      </FlexCol>
    </MAPA1>
  );
}

const MAPA1 = styled.div`
  position: absolute;
  height: 274px;
  top: 0;
  left: 1px;
  display: flex;
  padding: 19.9px 392.5px;
  align-items: center;
  min-width: 1199px;
  background-image: url();
  background-size: cover;
  background-position: 50% 50%;

  &.mapa-2.mapa-3 {
    margin-top: 16px;
    margin-left: 3px;
    position: unset;
    top: unset;
    left: unset;
  }
`;

const Frame = styled.div`
  width: 16px;
  height: 16px;
  margin-bottom: 93.05px;
  background-image: url(/img/vector-6@2x.png);
  background-size: 100% 100%;
`;

const FlexCol = styled.div`
  width: 341px;
  align-self: flex-end;
  margin-left: 33px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 164px;
`;

const Frame1 = styled.div`
  width: 16px;
  height: 16px;
  background-image: url(/img/vector-7@2x.png);
  background-size: 100% 100%;
`;

const Frame2 = styled.div`
  width: 16px;
  height: 16px;
  align-self: center;
  margin-top: 3px;
  margin-left: 59.25px;
  background-image: url(/img/vector-5@2x.png);
  background-size: 100% 100%;
`;

const FlexRow = styled.div`
  height: 124px;
  margin-top: 5px;
  margin-right: 0.97px;
  display: flex;
  align-items: flex-end;
  min-width: 340px;
`;

const Frame3 = styled.div`
  width: 16px;
  height: 13px;
  margin-bottom: 13.04px;
  background-image: url(/img/vector@2x.png);
  background-size: 100% 100%;
`;

const Frame4 = styled.div`
  width: 16px;
  height: 13px;
  align-self: flex-start;
  margin-left: 33px;
  margin-top: 27.81px;
  background-image: url(/img/vector-2@2x.png);
  background-size: 100% 100%;
`;

const FlexCol1 = styled.div`
  width: 56px;
  margin-left: 61px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 124px;
`;

const Location = styled.div`
  height: 35px;
  position: relative;
  display: flex;
  padding: 11px 12.6px;
  align-items: flex-end;
  min-width: 40px;
  background-color: var(--azure-radiance);
  border-radius: 20.1px/17.63px;
`;

const Frame5 = styled.div`
  width: 16px;
  height: 13px;
  align-self: flex-end;
  margin-top: 76px;
  background-image: url(/img/vector-1@2x.png);
  background-size: 100% 100%;
`;

const Frame6 = styled.div`
  width: 18px;
  height: 13px;
  align-self: center;
  margin-left: 64px;
  margin-bottom: 42.62px;
  background-image: url(/img/vector-3@2x.png);
  background-size: 100% 100%;
`;

const Frame7 = styled.div`
  width: 18px;
  height: 13px;
  margin-left: 56px;
  margin-bottom: 26.09px;
  background-image: url(/img/vector-4@2x.png);
  background-size: 100% 100%;
`;

export default MAPA;
