import React, { useState, useContext } from 'react'
import Header from '../header/Header';
import Norms from '..//norms/Norms';
import auth from './auth';

import { GlobalContext } from '../../context/GlobalState';


const AppLayout = (props) => {

  const [profile, setProfile] = useState(false);
  const { currentUserId, norms, users } = useContext(GlobalContext)

  const currentUserName = () => {
    let name;
    users.forEach(user => {
      if (currentUserId === user.userId) {
        name = user.name;
      }
    })
    return name
  }

  const handleClick = (e) => {
    if (profile === true && (e.target.id !== "profile-layer" || e.target.id === '')) {
      setProfile(false);
    } else return
  }

  return (
    <div onClick={handleClick} className="app-layout">
      <Header />
      <Norms />
      <button
        id="profile-button"
        onClick={() => setProfile(!profile)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" /></svg>
      </button>
      {profile &&
        <div id="profile" className="bg-dark">
          <div id="profile-layer"></div>
          <h5>{currentUserName()}</h5>
          <h5>Norms: {norms.length}</h5>
          <button
            className="btn btn-warning"
            id="logout-button"
            onClick={() => {
              auth.logout();
              props.history.push("/Norms-React-App")
            }}
          >
            Logout
        </button>
        </div>
      }
    </div>
  )
}

export default AppLayout
