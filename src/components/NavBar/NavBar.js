import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';
function NavBar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <a className="logo" href="/#">Mining Store</a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navSupp"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navSupp">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="item">
            <a className="item" href="/#">Inicio</a>
          </li>
          <li className="item" >
            <a className="item" href="/#">Productos</a>
          </li>

          <li className="item">
            <a className="item" href="/#">Contacto</a>
          </li>
        </ul>


        <CartWidget></CartWidget>

      </div>
    </div>

  </nav>


  );
}

export default NavBar