import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';

const CompareList = ({ repositories, deleteRepository, updateRepository }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <button type="button" onClick={() => deleteRepository(repository.id)}>
            <i className="fa fa-close" />
          </button>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>

        <ul>
          <li>
            {repository.stargazers_count} <small>stars</small>
          </li>
          <li>
            {repository.forks_count} <small>forks</small>
          </li>
          <li>
            {repository.open_issues_count} <small>isseus</small>
          </li>
          <li>
            {repository.lastCommit} <small>last commit</small>
          </li>
        </ul>
        <footer>
          <button type="button" onClick={() => updateRepository(repository.id)}>
            Atualizar
          </button>
        </footer>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      owner: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      stargazers_count: PropTypes.number,
      forks_count: PropTypes.number,
      open_issues_count: PropTypes.number,
      pushed_at: PropTypes.string,
    }),
  ).isRequired,
  deleteRepository: PropTypes.func.isRequired,
  updateRepository: PropTypes.func.isRequired,
};

export default CompareList;
