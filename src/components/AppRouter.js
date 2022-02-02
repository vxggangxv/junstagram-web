import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types';
import SignIn from 'pages/SignIn';
import { Fragment } from 'react';
import routes from 'routes';

// use X
function AppRouter({ isLoggedIn }) {
  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Fragment>
            {/* <Route path={routes.index.path} element={<Navigate replace to={routes.profile.path} />} /> */}
            <Route path={routes.index.path} element={routes.feed.element} />
            <Route
              path={routes.profile.path}
              element={routes.profile.element}
            />
          </Fragment>
        ) : (
          <Fragment>
            <Route
              path={routes.index.path}
              element={<SignIn jestSubmit={() => {}} />}
            />
            <Route path={routes.signIn.path} element={routes.signIn.element} />
            {/* <Route path={routes.signUp.path} element={routes.signUp.element} /> */}
          </Fragment>
        )}
        <Route path="*" element={routes.notFound.element}></Route>
      </Routes>
    </Router>
  );
}

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
