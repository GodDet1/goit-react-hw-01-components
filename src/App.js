import Statistics from 'components/Statistics';
import Profile from './components/Profile';
import user from './data/UsersData/user';
import statisticsData from './data/StatistacsData/data';
import FriendsList from 'components/FriendsList';
import friends from './data/FriendData/friends';

function App() {
  return (
    // 1st task

    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* 2nd task */}

      <Statistics title="Upload stats" stats={statisticsData} />

      {/* 3rd task */}

      <FriendsList friends={friends} />
    </div>
  );
}

export default App;
