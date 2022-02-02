import { USERNAME } from 'apollo';
import AppLayout from 'components/AppLayout';

function Feed() {
  const username = localStorage.getItem(USERNAME);

  const onFetchMe = () => {};

  return (
    <AppLayout>
      Feed
      <br />
      <button onClick={onFetchMe}>My Profile</button>
    </AppLayout>
  );
}

export default Feed;
