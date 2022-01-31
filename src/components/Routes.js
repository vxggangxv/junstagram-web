import { Navigate, useRoutes } from 'react-router-dom';
import PropTypes from 'prop-types';
import Feed from 'pages/Feed';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import NotFound from 'pages/NotFound';

const AppRoutes = ({ isLoggedIn }) => {
  let routes = [];
  if (isLoggedIn) {
    routes = [{ path: '/', element: <Feed /> }];
  } else {
    routes = [
      { path: '/', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ];
  }
  routes = [
    ...routes,
    { path: '/error/404', element: <NotFound /> },
    { path: '*', element: <Navigate replace to="/error/404" /> },
  ];

  let element = useRoutes(routes);

  return element;
};

AppRoutes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRoutes;
