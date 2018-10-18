import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
  return (
    <nav className="header__menu">
      <Link className="header__menu-button" to="/">
        Home
      </Link>
      <Link className="header__menu-button" to="todo">
        Todo List
      </Link>
      <Link className="header__menu-button" to="done">
        Done
      </Link>
    </nav>
  )
};

export default Navigation
