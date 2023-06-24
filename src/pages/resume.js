import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { dateDiff, getFormattedDate } from "../utils/date"

import "../styles/job.css"

const Resume = ({ data: { site: { siteMetadata: { title: siteTitle } }, allMarkdownRemark: { group: jobs } } }) => {
  jobs.sort((x, y) => x.edges[0].node.frontmatter.startdate < y.edges[0].node.frontmatter.startdate);
  return (
    <Layout title={siteTitle} location="resume">
      <h1>Resume</h1>
      {jobs.map(({ fieldValue: company, edges }, index) => {
        let { location } = edges[0].node.frontmatter;
        return (
          <div key={index}>
            <div  style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <h3 style={{margin: 0}}>{company}</h3>
              <span>({location})</span>
            </div>
            {edges.map(({ node: { frontmatter: { title, startdate, enddate }, html } }, ind) => {
              return (<div key={ind}>
                <p className="job-location">
                  <h5>
                    {title}
                  </h5>
                  <h5>
                    {getFormattedDate(startdate)} -{" "}
                    {getFormattedDate(enddate ?? "") ?? "Current"} (
                    {dateDiff(
                      startdate,
                      enddate ?? undefined
                    )}
                    )
                  </h5>
                </p>
                <p dangerouslySetInnerHTML={{ __html: html }} />
              </div>)
            })}
            <hr style={{marginBottom: '2em'}}/>
          </div>
        )
      })}
    </Layout>
  )
}

export default Resume

export const Head = () => (
  <Seo title="Resume" />
)

export const pageQuery = graphql`
query {
  site {
    siteMetadata{
      title
    }
  }
  allMarkdownRemark(
    sort: {frontmatter: {startdate: DESC}}
    filter: {fileAbsolutePath: {regex: "/jobs/"}}
  ) {
    group(field: {frontmatter: {company: SELECT}}) {
      fieldValue
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
}
`
