import React from 'react';

const UserInfo = (props) => {
  const { userImage, userdata, orgData } = props;
  return (
    <div className="userInfoContainer">
      <div className="userPhoto">
        <img src={userImage}></img>
      </div>
      {userdata ? (
        <div className="userInfo">
          <p className="titleText grayText3">{userdata.name}</p>
          <p className="subtitleText grayText2">{userdata.login}</p>
          <button className="button grayText3 strongText">Follow</button>
          <div className="userDescription">
            <p className="normaltext grayText3">{userdata.bio}</p>
          </div>
          {userdata.company ? (
            <div className="userInfoDetail">
              <i className="fas fa-user-friends"></i>
              <span className="normaltext grayText3">{userdata.company}</span>
            </div>
          ) : null}
          {userdata.location ? (
            <div className="userInfoDetail">
              <i className="fas fa-map-marker-alt"></i>
              <span className="normaltext grayText3">{userdata.location}</span>
            </div>
          ) : null}
          {userdata.blog ? (
            <div className="userInfoDetail">
              <i className="fas fa-link"></i>
              <span className="normaltext linkText">{userdata.blog}</span>
            </div>
          ) : null}
          {orgData.length ? (
            <div className="userContributions">
              <p>Organizations</p>
              <div className="userContriContainer">
                {orgData.map((org) => {
                  return <img className="orgImage" key={org.id} src={org.avatar_url} alt={org.login}></img>;
                })}
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default UserInfo;
