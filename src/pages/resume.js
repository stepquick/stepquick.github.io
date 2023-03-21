import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { dateDiff, getFormattedDate } from "../utils/date"

import "../styles/job.css"

const Resume = React.memo(({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Resume</h1>
      {posts.map(({ node }, index) => {
        const title = node.frontmatter.title
        return (
          <div key={index}>
            <h3>{title}</h3>
            <p className="job-location">
              <small>
                {node.frontmatter.company}, {node.frontmatter.location}
              </small>
              <small>
                {getFormattedDate(node.frontmatter.startdate)} -{" "}
                {getFormattedDate(node.frontmatter?.enddate) ?? "Current"} (
                {dateDiff(
                  node.frontmatter.startdate,
                  node.frontmatter?.enddate ?? undefined
                )}
                )
              </small>
            </p>
            <div
              className="job-description"
              dangerouslySetInnerHTML={{
                __html: node.html,
              }}
            />
          </div>
        )
      })}
    </Layout>
  )
})

export default Resume

export const Head = () => <Seo title="Resume" keywords={[`resume`, `developer`, `web`]} />

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { startdate: DESC } }
      filter: { fileAbsolutePath: { regex: "/jobs/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            startdate(formatString: "YYYY-MM-DD")
            enddate(formatString: "YYYY-MM-DD")
            title
            location
            company
          }
        }
      }
    }
  }
`
