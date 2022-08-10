import './index.css'

const PasswordItem = props => {
  const {eachPass, deletePassItem, isChecked} = props
  const {id, websiteName, userName, password} = eachPass
  const capital = websiteName.slice(0, 1).toUpperCase()

  const onDelete = () => {
    deletePassItem(id)
  }

  const starImg = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      className="passwords"
      alt="stars"
    />
  )

  const showPassword = () => <p>{password}</p>

  return (
    <li className="item">
      <div className="item-cont">
        <div className="capital-container">
          <h1 className="capital">{capital}</h1>
        </div>
        <div className="name-pass">
          <p>{websiteName}</p>
          <p>{userName}</p>
          {isChecked ? showPassword() : starImg()}
        </div>
      </div>
      <div className="delete-cont">
        <button type="button" className="btn" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            className="delete-img"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default PasswordItem
