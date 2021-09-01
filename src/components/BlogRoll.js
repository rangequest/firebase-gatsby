import React from "react";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import BlogPostCard from "./BlogPostCard";
import { getImage } from "gatsby-plugin-image";

export default function BlogRoll() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            title
            date(formatString: "MMMM D, YYYY")
            description
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
  `);
  return (
    <React.Fragment>
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
        />
      ))}
    </React.Fragment>
  );
}
