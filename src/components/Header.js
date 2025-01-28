import React from "react";
import { Link } from "react-scroll";

const Header = ({ sections }) => {
  return (
    <header>
      <nav>
        <Link to={sections[0].id} smooth={true} duration={500} offset={-70}>
          <h1>Me</h1>
        </Link>
        <ul>
          {sections.slice(1).map((section) => (
            <li key={section.id}>
              <Link to={section.id} smooth={true} duration={500} offset={-70}>
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
