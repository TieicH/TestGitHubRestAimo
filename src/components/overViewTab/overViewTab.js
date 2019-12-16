import React from 'react';
import UserRepos from '../RepoComponent/RepoComponent';

const OverViewTab = (props) => {
  const { title, userdata } = props;
  return (
    <div className="overView">
      <p>{title}</p>
      <UserRepos data={userdata}></UserRepos>
      <div className="userActivityResume">Acá viene el mapa de github</div>
    </div>
  );
};

export default OverViewTab;
