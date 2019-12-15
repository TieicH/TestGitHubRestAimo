import React from "react";
import "./UserDetail.scss";

class UserDetail extends React.Component {
  render() {
    return (
      <div className="userDetailContainer">
        <div className="userInfoContainer">
          <div className="userPhoto">
            <img src="https://avatars0.githubusercontent.com/u/1500684?s=460&v=4"></img>
            <div className="userStatus smallText grayText3">
              this is my status right now
            </div>
          </div>
          <div className="userInfo">
            <p className="titleText grayText3">Kent C. Dodds</p>
            <p className="subtitleText grayText2">kentcdodds</p>
            <button className="button grayText3 strongText">Sponsor</button>
            <button className="button grayText3 strongText">Follow</button>
            <div className="userDescription">
              <p className="normaltext grayText3">
                Making people's lives better with software · Husband, Father,
                Latter-day Saint, Teacher, OSS, GDE · testingjavascript.com
              </p>
            </div>
            <div className="userInfoDetail">
              <i></i>
              <span className="normaltext grayText3 strongText">
                kentcdodds
              </span>
            </div>
            <div className="userInfoDetail">
              <i></i>
              <span className="normaltext grayText3">
                Salt Lake City, Utha, USA
              </span>
            </div>
            <div className="userInfoDetail">
              <i></i>
              <span className="normaltext linkText">
                me+github@kentcdoods.com
              </span>
            </div>
            <div className="userInfoDetail">
              <i></i>
              <span className="normaltext linkText">https://kentcdoos.com</span>
            </div>
            <div className="userBadges">
              <div className="userInfoDetail">
                <i></i>
                <span>PRO</span>
              </div>
              <div className="userInfoDetail">
                <i></i>
                <span className="normaltext linkText">Github Sponsor</span>
              </div>
            </div>
            <div className="userContributions">
              <p>Organizations</p>
              <div className="userContriContainer">
                <img></img>
                <img></img>
                <img></img>
                <img></img>
                <img></img>
                <img></img>
                <img></img>
              </div>
            </div>
          </div>
        </div>
        <div className="userActivityContainer">
          <div className="userTabs">
            <div className="tab active">
              <p className="normaltext grayText2">Overview</p>
            </div>
            <div className="tab">
              <p className="normaltext grayText2">Repositories</p>
            </div>
            <div className="tab">
              <p className="normaltext grayText2">Projects</p>
            </div>
            <div className="tab">
              <p className="normaltext grayText2">Starts</p>
            </div>
            <div className="tab">
              <p className="normaltext grayText2">Followers</p>
            </div>
            <div className="tab">
              <p className="normaltext grayText2">Following</p>
            </div>
          </div>
          <div className="userTabContentContainer">
            <div className="contentContainer">
              <p>Pinned</p>
              <div className="reposContainer">
                <div className="repo">
                  <p>testing-library/react-testing-library</p>
                  <p>
                    Simple and complete React DOM testing utilities that
                    encourage good testing practices.
                  </p>
                  <div className="repoActions">
                    <div className="repoLanguaje">
                      <p>JavaScript</p>
                      <p>10K</p>
                      <p>525</p>
                    </div>
                  </div>
                </div>
                <div className="repo">
                  <p>testing-library/react-testing-library</p>
                  <p>
                    Simple and complete React DOM testing utilities that
                    encourage good testing practices.
                  </p>
                  <div className="repoActions">
                    <div className="repoLanguaje">
                      <p>JavaScript</p>
                      <p>10K</p>
                      <p>525</p>
                    </div>
                  </div>
                </div>
                <div className="repo">
                  <p>testing-library/react-testing-library</p>
                  <p>
                    Simple and complete React DOM testing utilities that
                    encourage good testing practices.
                  </p>
                  <div className="repoActions">
                    <div className="repoLanguaje">
                      <p>JavaScript</p>
                      <p>10K</p>
                      <p>525</p>
                    </div>
                  </div>
                </div>
                <div className="repo">
                  <p>testing-library/react-testing-library</p>
                  <p>
                    Simple and complete React DOM testing utilities that
                    encourage good testing practices.
                  </p>
                  <div className="repoActions">
                    <div className="repoLanguaje">
                      <p>JavaScript</p>
                      <p>10K</p>
                      <p>525</p>
                    </div>
                  </div>
                </div>
                <div className="repo">
                  <p>testing-library/react-testing-library</p>
                  <p>
                    Simple and complete React DOM testing utilities that
                    encourage good testing practices.
                  </p>
                  <div className="repoActions">
                    <div className="repoLanguaje">
                      <p>JavaScript</p>
                      <p>10K</p>
                      <p>525</p>
                    </div>
                  </div>
                </div>
                <div className="repo">
                  <p>testing-library/react-testing-library</p>
                  <p>
                    Simple and complete React DOM testing utilities that
                    encourage good testing practices.
                  </p>
                  <div className="repoActions">
                    <div className="repoLanguaje">
                      <p>JavaScript</p>
                      <p>10K</p>
                      <p>525</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="userActivityResume">
                Acá viene el mapa de github
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetail;
