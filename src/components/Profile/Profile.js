import React from 'react';
import './Profile.styles.css';

function Profile() {
  return (
    <>
      <div className="profileContainer">
        <div className="profileHeading">
          <div className="profileHeadingData"></div>
          <div className="profileImage"></div>
        </div>
        <div className="profileMenu">
          <div className="profileMenuOptions"></div>
          <div className="profileMenuOptions"></div>
          <div className="profileMenuOptions"></div>
          <div className="profileMenuOptions"></div>
        </div>
        <div className="driveEmergency"></div>
        <div className="pptac"></div>
      </div>
    </>
  );
}

export default Profile;
