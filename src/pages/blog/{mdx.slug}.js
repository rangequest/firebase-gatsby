import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import BlogLayout from "../../components/layouts/BlogLayout";
import Seo from "../../components/seo/Seo";
import { Typography } from "@material-ui/core";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Typography component="span">
      <Seo pageTitle={data.mdx.frontmatter.title}></Seo>
      <BlogLayout pageTitle={data.mdx.frontmatter.title}>
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
        <p>
          Photo Credit:{" "}
          <a href={data.mdx.frontmatter.hero_image_credit_link}>
            {data.mdx.frontmatter.hero_image_credit_text}
          </a>
        </p>
        <p>Posted: {data.mdx.frontmatter.date}</p>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
        <p>Modified: {data.mdx.parent.modifiedTime}</p>
      </BlogLayout>
    </Typography>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
      parent {
        ... on File {
          modifiedTime(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
`;

export default BlogPost;
