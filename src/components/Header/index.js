import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token') // Remove the jwt_token cookie
    history.replace('/login') // Navigate to the "/login" route
  }

  return (
    <header className="header-container">
      <div className="mobile-navbar">
        <Link to="/">
          <img
            className="header-logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
        </Link>
        <ul className="route-icons-container">
          <li>
            <Link to="/">
              <button type="button" aria-label="Home">
                <AiFillHome className="route-icon" />
              </button>
            </Link>
          </li>
          <li>
            <Link to="/jobs">
              <button type="button" aria-label="Jobs">
                <BsBriefcaseFill className="route-icon" />
              </button>
            </Link>
          </li>
          <li>
            <button type="button" aria-label="Logout" onClick={onClickLogout}>
              <FiLogOut className="route-icon" />
            </button>
          </li>
        </ul>
      </div>
      <div className="desktop-navbar">
        <Link to="/">
          <img
            className="header-logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
        </Link>
        <ul className="route-items">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="nav-link">
              Jobs
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-label="Logout"
          className="logout-button"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </header>
  )
}

export default withRouter(Header)
