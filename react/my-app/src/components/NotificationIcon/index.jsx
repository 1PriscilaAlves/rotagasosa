import React from "react";
import styled from "styled-components";


function NotificationIcon(props) {
  const { className } = props;

  return (
    <NotificationIcon1 className={`notification_icon ${className || ""}`}>
      <Vector className="vector" src="/img/vector-1@2x.svg" />
      <Vector1 className="vector-1" src="/img/vector-2@2x.svg" />
    </NotificationIcon1>
  );
}

const NotificationIcon1 = styled.div`
  position: absolute;
  width: 26px;
  height: 27px;
  top: 14px;
  left: 1188px;
  display: flex;
  flex-direction: column;
  padding: 1.9px 3px;
  align-items: flex-end;

  &.notification_icon.notification_icon-1 {
    left: 298px;
  }

  &.notification_icon.notification_icon-3 {
    left: 1162px;
  }

  &.notification_icon.notification_icon-4 {
    left: 1173px;
  }
`;

const Vector = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 1.52px;
`;

const Vector1 = styled.img`
  width: 7px;
  height: 4px;
  margin-top: 1px;
  margin-right: 7.13px;
`;

export default NotificationIcon;
