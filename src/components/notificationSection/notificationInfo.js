import React from "react";
import BellIcon from "../../assets/icons/notification_info_bell_icon.svg"

export const NotificationInfo = () => {
  return (
    <div className="notification-info-outer-div">
      <div>
        <img src={BellIcon} alt="Bell Icon" />
      </div>

      <div className="notification-info-heading">
        Get notified when a highly correlated whale makes a move
      </div>

      <div className="notification-info-content">
        Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.
      </div>

    </div>
  )
}