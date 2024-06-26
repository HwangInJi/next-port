import { headerNav } from '@/constants/index'
import { useState } from 'react'

export default function Header() {
  const [show, setShow] = useState(false);

  const toggleMenu = () =>{
    setShow((prevShow)=> !prevShow);
  }

  return (
    <header id="header" role="header">
      <div class="header__inner">
        <h1 class="header__logo">
          <a href="#">Portfolio<em>next.js</em></a>
        </h1>
        <nav className={`header__nav ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
          <ul>
            {headerNav.map((nav,key)=>(
              <li key={key}>
                <a href={nav.url}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          class="header__nav__mobile"
          id="headerToggle"
          aria-controls="primary-menu"
          aria-expanded={show ? "true" : "false"}
          role="button"
          tabindex="0"
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
  </header>
  )
}
