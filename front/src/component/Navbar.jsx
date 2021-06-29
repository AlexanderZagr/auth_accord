import React from 'react';
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const activeStyle = { color: "#000000" };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/home">Головна сторінка</Link>

        <ul className="navbar-nav">
          <li className="nav-item active dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Довідники
             </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" to="/list-department" activeStyle={activeStyle}>Відділення</NavLink>
              <NavLink className="dropdown-item" to="/list-department" activeStyle={activeStyle}>Департаменти</NavLink>
              
            </div>
          </li>
          <li className="nav-item active dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Користувачі
             </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <NavLink className="dropdown-item" to="/list-user" activeStyle={activeStyle}>Користувачі довідника мобідьних</NavLink>
              <NavLink className="dropdown-item" to="/list-user" activeStyle={activeStyle}>Користувачі невідображені в довіднику</NavLink>
              
            </div>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/list-role">Ролі</Link>
          </li>
        
          
        </ul>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Вихід</Link>
          </li>

          </ul>
        </div>

      </nav>
    </div>
  )
}

{//<div>
      //<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        //<Link className="navbar-brand" to="/home">Home</Link>

       /* <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Довідники
             </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/list-department">Відділення</a>
              <a className="dropdown-item" href="/list-department">Департаменти</a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Користувачі
             </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#"><Link className="navbar-brand" to="/home">Home</Link></a>
              <a className="dropdown-item" href="/list-user">Користувачі декрет</a>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/list-role">Ролі</Link>
          </li>
        </ul>
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="/">Log Out</a>
            </li>

          </ul>
        </div>

      </nav>
    </div> */}


export default NavBar;
