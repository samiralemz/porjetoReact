import React from 'react'
import { Link } from 'react-router-dom';

function UserMenu(props) {
  const { user, onLogoutUser } = props;

  return (
    <li class="nav-item dropdown">
      <Link className="nav-link dropdown-toggle text-white"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
        {user.nome}
      </Link>
      <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
        <li>
          <Link className="dropdown-item" to="/user/edit">
            Configurar
          </Link>
        </li>
        <li>
          <button className="dropdown-item" onClick={onLogoutUser}>
            Sair
          </button>
        </li>
      </ul>
    </li>
  )
}

export default UserMenu;