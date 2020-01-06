import React from 'react';
import styled from '@emotion/styled';
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const ShareStyles = styled.aside`
  max-width: 800px;
  margin: 0 auto;
  padding: 1.2rem;
  text-align: center;

  > div {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  h3 {
    margin: 0 1.2rem 0 0;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 1rem;
  }

  button,
  svg {
    display: inline-block;
    line-height: 1;
    margin: 0;
    appearance: none;
  }
`;

export default ({ title, url }) => (
  <ShareStyles>
    <div>
      <h3>Gostou? Compartilhe: </h3>
      <WhatsappShareButton
        url={url}
        title={title}
        separator=" | "
        windowWidth={1000}
        windowHeight={700}
      >
        <WhatsappIcon size={26} />
      </WhatsappShareButton>

      <TelegramShareButton url={url} title={title}>
        <TelegramIcon size={26} />
      </TelegramShareButton>

      <TwitterShareButton
        url={url}
        title={title}
        via={`oseunando`}
        hashtags={[
          'engrenagem',
          'engrenagemfixa',
          'fixed',
          'fixedgear',
          'fixa',
          'fixa',
          'bikefixa',
        ]}
        windowWidth={600}
        windowHeight={400}
      >
        <TwitterIcon size={26} />
      </TwitterShareButton>

      <FacebookShareButton
        url={url}
        title={title}
        windowWidth={600}
        windowHeight={600}
      >
        <FacebookIcon size={26} />
      </FacebookShareButton>
    </div>
  </ShareStyles>
);
