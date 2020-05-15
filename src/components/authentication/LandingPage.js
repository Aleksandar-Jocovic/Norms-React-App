import React from 'react'
import auth from './auth'

const LandingPage = props => {
  return (
    <div>
      <h1>Welcome to norms</h1>
      <button
        className="btn btn-info"
        onClick={() => {
          auth.login()
          props.history.push("/app")
        }}
      >Log in</button>
    </div>
  )
}

export default LandingPage
