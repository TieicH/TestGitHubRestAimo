import React from 'react';
import UserRepos from '../RepoComponent/RepoComponent';
import { GithubCalendar } from '../heatMap/heatMap';

const OverViewTab = (props) => {
  const { title, userdata } = props;
  return (
    <div className="overView">
      <p>{title}</p>
      <UserRepos data={userdata}></UserRepos>
      <div className="userActivityResume">
        <p className="normaltext grayText3" style={{ marginBottom: '1rem' }}>
          Contributions in the last Year
        </p>
        <GithubCalendar></GithubCalendar>
      </div>
    </div>
  );
};

export default OverViewTab;
