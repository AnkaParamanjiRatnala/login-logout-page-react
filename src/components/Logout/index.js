const Logout = props => {
  const {logoutText, clickButton} = props
  return (
    <button type="submit" onClick={clickButton}>
      {logoutText}
    </button>
  )
}

export default Logout
