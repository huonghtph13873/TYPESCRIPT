import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Navlink className="navnavbar-brand" href="#">Navbar</Navlink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Navlink className="nav-link active" aria-current="page" href="#">Home</Navlink>
        </li>
        <li className="nav-item">
          <Navlink className="nav-link" href="#">Link</Navlink>
        </li>
        <li className="nav-item dropdown">
          <Navlink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Navlink>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Navlink className="dropdown-item" href="#">Action</Navlink></li>
            <li><Navlink className="dropdown-item" href="#">Another action</Navlink></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Navlink className="dropdown-item" href="#">Something else here</Navlink></li>
          </ul>
        </li>
        <li className="nav-item">
          <Navlink className="nav-link disabled">Disabled</Navlink>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

  )
}

export default Header