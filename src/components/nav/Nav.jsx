import React from 'react'
import '../nav/Nav.css'

const Nav = () => {
    return (
        <div className='nav'>
            <nav className="nav__item">
                <a href="#">TheMealDB</a>
                <ul>
                    <li>
                        <a href="https://t.me/webdev_70" target='blank'><i class="fa-brands fa-telegram"></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/mirodil__0623/" target='blank'><i class="fa-brands fa-instagram"></i></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav