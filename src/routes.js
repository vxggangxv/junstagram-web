import Feed from 'pages/Feed';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import NotFound from 'pages/NotFound';
import Profile from 'pages/Profile';

export const routes = {
  index: {
    path: '/',
  },
  me: {
    path: '/me',
    element: <Profile />,
  },
  feed: {
    path: '/feed',
    element: <Feed />,
  },
  // profile: {
  //   path: '/profile/@username',
  //   element: <Profile />,
  // },
  signIn: {
    path: '/sign-in',
    element: <SignIn />,
  },
  signUp: {
    path: '/sign-up',
    element: <SignUp />,
  },
  notFound: {
    path: '/error/404',
    element: <NotFound />,
  },
};

export default routes;
