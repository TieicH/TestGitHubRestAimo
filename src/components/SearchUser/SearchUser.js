import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

class SearchUser extends React.Component {
  handleUserDetailRoute = (user) => {
    const { getUserData, closeResult, disabledInput, enabledInput } = this.props;
    closeResult();
    disabledInput();
    const { url: userUrl, organizations_url: orgUrl, repos_url: repoUrl, avatar_url: userImage, login: userName } = user;
    const reposUser = `https://api.github.com/users/${userName}/repos?direction=desc&type=all&sort=updated&per_page=6`;
    const data = { userUrl, orgUrl, reposUser };
    getUserData(data).then((respose) => {
      enabledInput();
      if (respose.success) {
        this.props.history.push({
          pathname: `/user/${userName}`,
          state: { userImage: userImage },
        });
      }
    });
  };

  render() {
    const { OnChange, data, showResults, showInput } = this.props;
    console.log('SearchUser', this.props);
    return (
      <div className="searchComponent">
        {showInput ? <input className="inputSearch" onChange={(evt) => OnChange(evt)}></input> : <input className="inputSearch" disabled></input>}

        {showResults ? (
          <div className="searchResults">
            {data.map((item) => {
              return (
                <div className="itemResult" onClick={item.notFound ? () => {} : () => this.handleUserDetailRoute(item)} key={item.id}>
                  <p>{item.login}</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.searchUser.users,
    showInput: state.searchUser.enableInputSearch,
    showResults: state.searchUser.showResults,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchUserByText: (userText) => dispatch(actions.asyncSearchUsers(userText)),
    getUserData: (user) => dispatch(actions.asyncUserData(user)),
    closeResult: () => dispatch(actions.closeSearchUser()),
    disabledInput: () => dispatch(actions.disableSearchInput()),
    enabledInput: () => dispatch(actions.enableSearchInput()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchUser));
