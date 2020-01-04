import React from 'react';
import styled from '@emotion/styled';

const FooterStyle = styled.footer`
  padding: 1.2rem 0;

  p {
    opacity: 0.6;
    font-size: 0.8rem;
    margin: 0;
  }
`;

const FooterInnerStyle = styled.div`
  text-align: center;
  max-width: 769px;
  margin: 0 auto;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
`;

export default ({ title }) => (
  <FooterStyle>
    <FooterInnerStyle>
      <p>
        O Blog <strong>{title}</strong> é <em>open-source</em>, veja o{' '}
        <a
          href="https://github.com/nandomoreirame/engrenagemfixa"
          target="_blank"
          rel="noopener noreferrer"
        >
          código fonte aqui.
        </a>
        .
      </p>
      <p>
        &copy;{new Date().getFullYear()} ⏤ feito com ❤ por{' '}
        <a
          href="https://nandomoreira.dev/sobre"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fernando Moreira.
        </a>
      </p>
    </FooterInnerStyle>
  </FooterStyle>
);
