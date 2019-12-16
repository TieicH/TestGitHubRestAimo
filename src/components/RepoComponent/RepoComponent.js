import React from 'react';
import { getFixedNoRonding, colorByLang } from '../../utils/index';

const UserRepos = (props) => {
  return (
    <div className="reposContainer">
      {props.data.map((repo) => {
        return (
          <div className="repo" key={repo.id}>
            <div className="repoInfo">
              <p className="repoName normaltext linkText strongText">
                <i className="fas fa-book" style={{ color: '#586069' }}></i> {repo.name}
              </p>
              <p className="smallText grayText2">{repo.description}</p>
            </div>
            <div className="repoActions">
              <div className="repoLanguaje">
                <p className="smallText grayText2">
                  <span className={`repoLangColor ${colorByLang(repo.language)}`}></span>
                  {repo.language}
                </p>
                <p className="smallText grayText2 cursorPointer iconText">
                  <i className="fas fa-star"></i> {getFixedNoRonding(repo.stargazers_count, 1)}
                </p>
                <p className="smallText grayText2 cursorPointer iconText">
                  <i className="fas fa-code-branch"></i> {repo.forks_count}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserRepos;
