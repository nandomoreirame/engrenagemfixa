import React from 'react';
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
import { ShareStyles } from '@styles';

export default ({ title, url }) => (
  <ShareStyles>
    <div>
      <h3>Compartilhe com seus amigos: </h3>
      <WhatsappShareButton
        url={url}
        title={title}
        separator=" "
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
