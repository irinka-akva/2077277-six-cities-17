import LoginForm from '../../components/login-form/login-form';
import Header from '../../components/header/header';
import { PageType, RoutePath } from '../../const';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function LoginPage(): JSX.Element {

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities: {PageType.Login}</title>
      </Helmet>
      <Header isLoginPage />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={RoutePath.Index}>
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
