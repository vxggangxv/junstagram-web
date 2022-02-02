import { Navigate, useRoutes } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from 'routes';

function AppRoutes({ isLoggedIn }) {
  let routeList = [];
  if (isLoggedIn) {
    routeList = [
      {
        path: routes.index.path,
        element: <Navigate replace to={routes.me.path} />,
      },
      { path: routes.me.path, element: routes.me.element },
      { path: routes.feed.path, element: routes.feed.element },
      // { path: routes.profile.path, element: routes.profile.element },
    ];
  } else {
    routeList = [
      { path: routes.index.path, element: routes.signIn.element },
      { path: routes.signIn.path, element: routes.signIn.element },
    ];
  }
  routeList = [
    ...routeList,
    { path: routes.notFound.path, element: routes.notFound.element },
    { path: '*', element: <Navigate replace to={routes.notFound.path} /> },
  ];

  let element = useRoutes(routeList);

  return element;
}

AppRoutes.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRoutes;
