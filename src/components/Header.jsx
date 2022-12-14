import React, { useState } from 'react'
import useIsMobile from '../hooks/isMobile'

import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas'

import { SlBubbles, SlBell, SlUser, SlMagnifier } from "react-icons/sl"
import logo from '../assets/imgs/servicio365.png'

const Header = () => {
    const {mobile} = useIsMobile('991px')

    const [search, setSearch] = useState(false)
    const closeSearch = () => setSearch(false)
    const showSearch = () => setSearch(true)

    return (
        <>
            <header>
                <Container>
                    <nav className='left'>
                        <img src={logo} alt="servicio365" className='logo'/>
                        <form action="" className='d-none d-xl-block form-search-1'>
                            <input type="text" placeholder='Чем вам помочь?'/>
                            <button type='button'>
                                <SlMagnifier/>
                            </button>
                        </form>
                        {
                            (!mobile) &&
                            <ul>
                                <li><a href="/">Создать заказ</a></li>
                                <li><a href="/">Найти специалиста</a></li>
                                <li><a href="/">Мои заказы</a></li>
                                <li><a href="/">Стать исполнителем</a></li>
                            </ul>
                        }
                    </nav>
                    <nav className='right'>
                        <ul>
                            <li className='d-xl-none'>
                                <button type='button' onClick={showSearch}>
                                    <SlMagnifier/>
                                </button>
                            </li>
                            <li className='d-none d-lg-block'>
                                <button type='button'>
                                    <SlBubbles/>
                                </button>
                            </li>
                            <li>
                                <button type='button'>
                                    <SlBell/>
                                </button>
                            </li>
                            <li className='d-none d-lg-block'>
                                <button type='button'>
                                    <SlUser/>
                                </button>
                            </li>
                            <li>
                                <button type='button'>
                                    RU
                                </button>
                            </li>
                        </ul>
                    </nav>
                </Container>
            </header>

            <Offcanvas show={search} onHide={closeSearch} placement={'top'}>
                <Offcanvas.Body>
                    <Container>
                        <form action="" className='form-search-1'>
                            <input type="text" placeholder='Чем вам помочь?'/>
                            <button type='button'>
                                <SlMagnifier/>
                            </button>
                        </form>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Header;