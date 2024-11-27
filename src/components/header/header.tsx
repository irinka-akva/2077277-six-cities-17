import HeaderNavigation from '../header-navigation/header-navigation';

type HeaderProps = {
  isMainPage?: boolean;
  isLoginPage?: boolean;
  isLoggedIn?: boolean;
}

function Header({isMainPage = false, isLoginPage = false, isLoggedIn = false}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className={`header__logo-link ${isMainPage ? 'header__logo-link--active' : ''}`} {...(!isMainPage && {href:'main.html'})}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          {!isLoginPage ? <HeaderNavigation isLoggedIn = {isLoggedIn}/> : ''}
        </div>
      </div>
    </header>
  );
}

export default Header;
