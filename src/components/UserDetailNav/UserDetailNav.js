import React from 'react';
import { getFixedNoRonding } from '../../utils/index';

class UserDetailNav extends React.Component {
  render() {
    const { userdata } = this.props;
    return (
      <div className="userTabs">
        <div className="tab active">
          <p className="normaltext grayText2">Overview</p>
        </div>
        <div className="tab">
          <p className="normaltext grayText2">
            Repositories <span className="userNavExtraInfo">({userdata ? getFixedNoRonding(userdata.public_repos, 1) : ''})</span>
          </p>
        </div>
        <div className="tab">
          <p className="normaltext grayText2">
            Projects <span className="userNavExtraInfo">(0)</span>
          </p>
        </div>
        <div className="tab">
          <p className="normaltext grayText2">
            Starts <span className="userNavExtraInfo">(-)</span>
          </p>
        </div>
        <div className="tab">
          <p className="normaltext grayText2">
            Followers <span className="userNavExtraInfo">({userdata ? getFixedNoRonding(userdata.followers, 1) : ''})</span>
          </p>
        </div>
        <div className="tab">
          <p className="normaltext grayText2">
            Following <span className="userNavExtraInfo">({userdata ? getFixedNoRonding(userdata.following, 1) : ''})</span>
          </p>
        </div>
      </div>
    );
  }
}

export default UserDetailNav;
