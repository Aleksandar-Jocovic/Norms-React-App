import React from 'react'
import Header from '../header/Header';
import Norms from '..//norms/Norms';
import auth from './auth';

const AppLayout = (props) => {
  return (
    <div>
      <Header />
      <Norms />
      <button
        className="btn btn-warning"
        onClick={() => {
          auth.logout();
          props.history.push("/")
        }}
      >
        Logout
        </button>
    </div>
  )
}

export default AppLayout
