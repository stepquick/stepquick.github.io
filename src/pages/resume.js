import React, {useMemo} from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import "../styles/job.css";

const Resume = React.memo(({data, location}) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = useMemo(() => data.allMarkdownRemark.edges);

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Resume</h1>
      <SEO
        title="Resume"
        keywords={[`resume`, `developer`, `web`]}
      />
      {posts.map(({ node }, index) => {
        const title = node.frontmatter.title
        return (
          <div key={index}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4),
              }}
            >
              {title}
            </h3>
            <p className="job-location">
              <small>{node.frontmatter.company}, {node.frontmatter.location}</small>
              <small>{node.frontmatter.startdate} - {node.frontmatter.enddate ?  node.frontmatter.enddate : "Current"}</small>
            </p>
            <div className="job-description"
              dangerouslySetInnerHTML={{
                __html: node.html,
              }}
            />
          </div>
        )
      })}
    </Layout>
  )
});

export default Resume

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
        sort: { fields: [frontmatter___startdate], order: DESC },
        filter: { fileAbsolutePath: { regex: "/jobs/"} }) {
      edges {
        node {
          html
          frontmatter {
            startdate(formatString: "MM/YYYY")
            enddate(formatString: "MM/YYYY")
            title
            location
            company
          }
        }
      }
    }
  }
`
