import React from 'react';
import { FooterStyle, FooterInnerStyle } from '@styles';

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
