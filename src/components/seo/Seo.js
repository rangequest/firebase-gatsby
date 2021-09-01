import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ pageTitle, pageDescription }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;
  const title = pageTitle ? pageTitle + " | " + defaults.title : defaults.title;
  const description = pageDescription ? pageDescription : defaults.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
    >
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Seo;
