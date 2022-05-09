import React from "react";
import styled from "styled-components";
import { Border2pxBlackHaze } from "../../styledMixins";


function IcuserMarker() {
  return (
    <IcuserMarker1>
      <User></User>
    </IcuserMarker1>
  );
}

const IcuserMarker1 = styled.div`
  width: 15px;
  height: 13px;
  display: flex;
  padding: 0 1.3px;
  align-items: center;
`;

const User = styled.div`
  ${Border2pxBlackHaze}
  width: 13px;
  height: 11px;
  background-color: var(--azure-radiance-2);
  border-radius: 6.28px/5.51px;
`;

const IcuserMarker2 = styled.div`
  width: 15px;
  height: 13px;
  display: flex;
  padding: 0 1.3px;
  align-items: center;
`;

const User1 = styled.div`
  ${Border2pxBlackHaze}
  width: 13px;
  height: 11px;
  background-color: var(--azure-radiance-2);
  border-radius: 6.28px/5.51px;
`;

export default IcuserMarker;
