import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/39200473?s=460&u=67b93ce7185ce1959ce434d282833dd99eff8911&v=4"
            alt="Daniel"
          />
          <div>
            <strong>Titulo do Rep</strong>
            <p>descrição do rep</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/39200473?s=460&u=67b93ce7185ce1959ce434d282833dd99eff8911&v=4"
            alt="Daniel"
          />
          <div>
            <strong>Titulo do Rep</strong>
            <p>descrição do rep</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/39200473?s=460&u=67b93ce7185ce1959ce434d282833dd99eff8911&v=4"
            alt="Daniel"
          />
          <div>
            <strong>Titulo do Rep</strong>
            <p>descrição do rep</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
