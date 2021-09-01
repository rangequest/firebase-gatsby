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
      <link rel="manifest" href="/manifest.json" />
      <script src="/register-service-worker.js"></script>
      <meta name="theme-color" content="#4285f4" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Seo;
