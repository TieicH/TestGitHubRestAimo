import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import SearchUser from '../../components/SearchUser/SearchUser';
import './SearchPage.scss';

class SearchPage extends React.Component {
  searchUserInterval = setInterval(() => {}, 700);

  handleSearchUserByText = (evt) => {
    const text = evt.target.value;
    clearInterval(this.searchUserInterval);
    this.searchUserInterval = setInterval(() => {
      clearInterval(this.searchUserInterval);
      this.props.searchUserByText(text);
    }, 700);
  };

  render() {
    const { users } = this.props;
    return (
      <div className="searchUserContainer">
        <h1>The Amazing Github User Search</h1>
        <SearchUser OnChange={this.handleSearchUserByText} data={users}></SearchUser>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.searchUser.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchUserByText: (userText) => dispatch(actions.asyncSearchUsers(userText)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
