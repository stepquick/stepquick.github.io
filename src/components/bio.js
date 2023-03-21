/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      <div>
        {author?.name && (
          <p>
            Written by <strong>{author.name}</strong> {author?.summary || null}
          </p>
        )}
        <p>
          <a href="/resume" style={{ marginRight: "1em" }}>Resume.</a>
          <a href="https://www.linkedin.com/in/stepquick" target="_blank" rel="noreferrer" style={{ marginRight: "1em" }}>LinkedIn.</a>
          <a href="https://github.com/stepquick" rel="noreferrer" target="_blank" style={{ marginRight: "1em" }}>Github.</a>
        </p>
      </div>
    </div>
  )
}

export default Bio
