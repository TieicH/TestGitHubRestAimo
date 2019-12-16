import React from 'react';
import './UserDetail.scss';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Helmet from 'react-helmet';
import OverViewTab from '../../components/overViewTab/overViewTab';
import UserInfo from '../../components/UserInfo/UserInfo';
import UserDetailNav from '../../components/UserDetailNav/UserDetailNav';

class UserDetail extends React.Component {
  render() {
    console.log('detail', this.props);
    const {
      match: {
        params: { id },
      },
      location: {
        state: { userImage },
      },
      userdata,
    } = this.props;
    return (
      <>
        <Helmet>
          <title>{id}</title>
        </Helmet>
        <div className="userDetailContainer">
          <UserInfo userImage={userImage} userdata={userdata.userUrl} orgData={userdata.orgUrl}></UserInfo>
          <div className="userActivityContainer">
            <UserDetailNav userdata={userdata.userUrl}></UserDetailNav>
            <div className="userTabContentContainer">
              <div className="contentContainer">
                <OverViewTab title={'Pinned'} userdata={userdata.reposUser ? userdata.reposUser : []}></OverViewTab>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userdata: state.userData.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchUserByText: (userText) => dispatch(actions.asyncSearchUsers(userText)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetail);
