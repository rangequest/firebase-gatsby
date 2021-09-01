import * as React from "react";
import { graphql } from "gatsby";
import BlogLayout from "../../components/layouts/BlogLayout";
import BlogPostCard from "../../components/BlogPostCard";
import { getImage } from "gatsby-plugin-image";
import Seo from "../../components/seo/Seo";

const BlogPage = ({ data }) => {
  return (
    <BlogLayout pageTitle="My Blog Posts">
      <Seo
        pageTitle="Blog of Range Quest"
        pageDescription="This is the blog page of Range Quest where it
      lists all their posts."
      ></Seo>
      {data.allMdx.nodes.map((node) => (
        <BlogPostCard
          key={node.id}
          posted={node.frontmatter.date}
          modified={node.parent.modifiedTime}
          slug={`/blog/${node.slug}`}
          title={node.frontmatter.title}
          description={node.frontmatter.description}
          body={node.body}
          image={getImage(node.frontmatter.hero_image)}
          readmore={node.frontmatter.readmore}
        />
      ))}
    </BlogLayout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          description
          readmore
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
        body
        parent {
          ... on File {
            modifiedTime(formatString: "MMMM D, YYYY")
          }
        }
      }
    }
  }
`;

export default BlogPage;
