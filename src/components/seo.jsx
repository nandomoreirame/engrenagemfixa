/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import defaultImage from '../../content/assets/default-hero.png';
import SchemaOrg from './schema-org';

function SEO({
  description,
  lang,
  meta,
  title,
  url,
  image,
  isPost,
  datePublished,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            author {
              name
              social {
                twitter
              }
            }
          }
        }
      }
    `
  );

  const { siteUrl } = site.siteMetadata;
  const { twitter } = site.siteMetadata.author.social;
  const _description = description || site.siteMetadata.description;
  const _currentUrl = url || siteUrl;

  const organization = {
    name: 'Onedev.studio',
    url: 'https://onedev.studio',
    logo: 'https://avatars2.githubusercontent.com/u/32771515?s=200&v=4',
  };

  return (
    <React.Fragment>
      <Helmet
        defer={false}
        titleTemplate={`%s | ${site.siteMetadata.title.toUpperCase()}`}
      >
        <html lang={lang} />
        <title>{title}</title>
        <meta name="description" content={_description} />
        <meta name="image" content={image} />
        <meta property="og:url" content={_currentUrl} />
        {isPost ? <meta property="og:type" content="article" /> : null}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={_description} />
        <meta property="og:locale" content={lang} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={`${siteUrl}${image}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={twitter} />
        <meta name="twitter:creator" content={site.siteMetadata.author.name} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={_description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      <SchemaOrg
        isPost={isPost}
        url={url}
        title={title}
        image={image}
        description={_description}
        datePublished={datePublished}
        siteUrl={siteUrl}
        author={site.siteMetadata.author}
        organization={organization}
        defaultTitle={title}
      />
    </React.Fragment>
  );
}

SEO.defaultProps = {
  lang: `pt-br`,
  image: defaultImage,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  image: PropTypes.string,
};

export default SEO;
