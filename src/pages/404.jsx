import React from 'react';
import { Link } from 'gatsby';

import Layout from '@components/blank';
import SEO from '@components/seo';
import { ErrorStyle } from '@styles';

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
