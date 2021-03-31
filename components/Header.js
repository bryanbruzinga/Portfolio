import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Quem sou eu?</Link>
            </li>
            <li>
              <Link href="/">Projetos</Link>
            </li>
            <li>
              <Link href="/">Tecnologias</Link>
            </li>
            <li>
              <Link href="/">Entre em contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
