import React from 'react';
import { Link } from 'react-router';

const Navigation = () => (
  <nav className="header__menu">
    <Link className="header__menu-button" to="/" onlyActiveOnIndex>
      Home
    </Link>
    <Link className="header__menu-button" to="todo" onlyActiveOnIndex>
      Todo List
    </Link>
    <Link className="header__menu-button" to="done" onlyActiveOnIndex>
      Done
    </Link>
  </nav>
);

export default Navigation
