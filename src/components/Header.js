import React from 'react'

function Header() {
  return (
    <>
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <h3><a className="navbar-brand" href="/">Header</a></h3>
                <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </>
  )
}

export default Header
