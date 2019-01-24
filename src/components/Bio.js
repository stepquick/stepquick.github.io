import React from 'react'

// Import typefaces
import profilePic from './profile-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <img
          src={profilePic}
          alt={`Stephen Quick`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p style={{
          marginBottom: 0
        }}>
          Written by <strong>Stephen Quick</strong>, a software developer based in Houston, Texas.{' '}
        </p>
      </div>
    )
  }
}

export default Bio
