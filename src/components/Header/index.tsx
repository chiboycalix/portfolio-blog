import React from 'react';
import './styles.scss';

const Header = () => {
  return (
    <header>
      <div className="logo">Nonso</div>
      <nav>
        <ul>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="/">Skillset</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
