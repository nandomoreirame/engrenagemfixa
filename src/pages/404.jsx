import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Layout from '../components/blank';
import SEO from '../components/seo';

const ErrorStyle = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-left: 1.2rem;
  padding-right: 1.2rem;

  h1 {
    margin: 0;
    font-size: 3rem;

    @media (min-width: 420px) {
      font-size: 6.3rem;
    }
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    font-weight: 300;

    @media (min-width: 420px) {
      font-size: 1.2rem;
    }
  }
`;

export default () => (
  <Layout>
    <SEO title="Página não encontrada" />
    <ErrorStyle>
      <div>
        <h1>Erro 404</h1>
        <p>Você acabou de pegar uma rota que não existe... a que tristeza.</p>
        <Link to="/">← Página inicial</Link>
      </div>
    </ErrorStyle>
  </Layout>
);
