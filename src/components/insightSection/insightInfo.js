import React from 'react';
import EyeIcon from "../../assets/icons/insight_info_eye_icon.svg"

export const InsightInfo = () => {
  return (
    <div className='insight-info-div'>
      <div>
        <img src={EyeIcon} alt='eye icon' />
      </div>

      <div className='insight-info-heading'>
        Watch what the whales are doing
      </div>

      <div className='insight-info-content'>
        All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.&lrm;
      </div>
    </div>
  )
}