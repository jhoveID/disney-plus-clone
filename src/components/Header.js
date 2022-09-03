import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      <NavMenu>
        <a>
          <img src='/images/home-icon.svg'></img>
          <span>HOME</span>
        </a>
        <a>
          <img src='/images/search-icon.svg'></img>
          <span>SEARCH</span>
        </a>
        <a>
          <img src='/images/watchlist-icon.svg'></img>
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src='/images/original-icon.svg'></img>
          <span>ORIGINAL</span>
        </a>
        <a>
          <img src='/images/movie-icon.svg'></img>
          <span>MOVIES</span>
        </a>
        <a>
          <img src='/images/series-icon.svg'></img>
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src='https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=768x576&vertical=top'></UserImg>
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;

        left: 0;
        right: 0;
        bottom: -6px;
        transform-origin: left center;
        transition: 0.5s;
        opacity: 0;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
