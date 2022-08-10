import {Component} from 'react'
import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    searchInput: '',
    inputWebsite: '',
    inputUser: '',
    inputPass: '',
    passwordList: [],
    isChecked: false,
  }

  onChangeWebsite = event => {
    this.setState({inputWebsite: event.target.value})
  }

  onChangeUser = event => {
    this.setState({inputUser: event.target.value})
  }

  onChangePassword = event => {
    this.setState({inputPass: event.target.value})
  }

  onAddPassword = event => {
    event.preventDefault()
    const {inputWebsite, inputUser, inputPass} = this.state
    const newPasswordItem = {
      id: v4(),
      websiteName: inputWebsite,
      userName: inputUser,
      password: inputPass,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPasswordItem],
      inputWebsite: '',
      inputUser: '',
      inputPass: '',
    }))
  }

  deletePassItem = id => {
    const {passwordList} = this.state
    this.setState({
      passwordList: passwordList.filter(eacItem => eacItem.id !== id),
    })
  }

  renderPwdList = () => {
    const {searchInput, passwordList, isChecked} = this.state
    const listCount1 = passwordList.length
    const searchResult = passwordList.filter(eachItem =>
      eachItem.websiteName.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const listCount = searchResult.length

    return (
      <ul className="passwords-list">
        {searchResult.map(eachItem => (
          <PasswordItem
            key={eachItem.id}
            eachPass={eachItem}
            count={listCount}
            deletePassItem={this.deletePassItem}
            isChecked={isChecked}
          />
        ))}
      </ul>
    )
  }

  noPasswordImag = () => (
    <div className="no-password-img">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
        className="img-noPass"
        alt="no passwords"
      />
      <p className="no-pass">No Passwords</p>
    </div>
  )

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeChecked = () => {
    const check = document.getElementById('checkbox')
    if (check.checked === true) {
      this.setState({isChecked: true})
    } else {
      this.setState({isChecked: false})
    }
  }

  render() {
    const {passwordList} = this.state
    const listCount = passwordList.length

    return (
      <div className="app-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            className="logo-img"
            alt="app logo"
          />
        </div>
        <div className="form-container">
          <div className="cart">
            <h1 className="title">Add New Password</h1>
            <form className="form" onSubmit={this.onAddPassword}>
              <div className="input-logo">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                  className="img"
                  alt="website"
                />
                <input
                  type="text"
                  className="text-input"
                  placeholder="Enter Website"
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="input-logo">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                  className="img"
                  alt="username"
                />
                <input
                  type="text"
                  className="text-input"
                  placeholder="Enter Username"
                  onChange={this.onChangeUser}
                />
              </div>
              <div className="input-logo">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png  "
                  className="img"
                  alt="password"
                />
                <input
                  type="password"
                  className="text-input"
                  placeholder="Enter Password"
                  onChange={this.onChangePassword}
                />
              </div>
              <button type="submit" className="btn-add" testid="delete">
                Add
              </button>
            </form>
          </div>
          <div className="sm-image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              className="password-img"
              alt="password manager"
            />
          </div>
          <div className="lg-image">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              className="password-img"
              alt="password manager"
            />
          </div>
        </div>
        <div className="password-container">
          <div className="pass-cont">
            <div className="password-header">
              <h1 className="title">Your Passwords</h1>
              <p className="para">{listCount}</p>
            </div>
            <div className="search-input">
              <div className="input-logo">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                  className="img"
                  alt="search"
                />
                <input
                  type="search"
                  className="text-input"
                  placeholder="search"
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
          </div>
          <hr className="line" />
          <div className="label-ele">
            <input
              type="checkbox"
              id="checkbox"
              onChange={this.onChangeChecked}
            />
            <label className="check" htmlFor="checkbox">
              Show Passwords
            </label>
          </div>
          {listCount === 0 ? this.noPasswordImag() : this.renderPwdList()}
        </div>
      </div>
    )
  }
}

export default PasswordManager
