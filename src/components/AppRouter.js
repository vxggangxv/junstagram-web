import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from 'routes';
import PropTypes from 'prop-types';
import Feed from 'pages/Feed';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import NotFound from 'pages/NotFound';
import { Fragment } from 'react';

function AppRouter({ isLoggedIn }) {
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Feed />} />
        ) : (
          <Fragment>
            <Route path="/" element={<SignIn submit={() => {}} />} />
            <Route path={routes.signUp} element={<SignUp />} />
          </Fragment>
        )}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
