import React, { useState } from 'react';
import {Link} from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { SlUser, SlMagnifier } from "react-icons/sl";
import logo from '../assets/imgs/servicio365.png';
import SearchForm from './forms/SearchForm';
import LanguageSwitcher from './utils/LanguageSwitcher';
import Notifications from './Notifications';

const HeaderSearch = () => {
  const [search, setSearch] = useState(false);
  const closeSearch = () => setSearch(false);
  const showSearch = () => setSearch(true);

  return (
    <>
      <header className='h-search'>
        <Container>
          <nav className='left'>
            <Link to='/'>
              <img src={logo} alt="servicio365" className='logo'/>
            </Link>
            <SearchForm className={'form-search-1'} />
          </nav>
          <nav className='right'>
            <ul>
              <li className='d-lg-none'>
                <button type='button' onClick={showSearch}>
                  <SlMagnifier/>
                </button>
              </li>
              <li>
                <Notifications/>
              </li>
              <li>
                <Link to='/account'>
                  <SlUser/>
                </Link>
              </li>
              <li>
                <LanguageSwitcher/>
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

export default HeaderSearch;