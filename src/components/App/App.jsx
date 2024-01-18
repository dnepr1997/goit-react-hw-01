import { Profile } from '../Profile/Profile';
import userData from '/src/userData.json';
import friends from '/src/friends.json';
import { FriendList } from '../FriendList/FriendList.jsx';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory.jsx';
import transactions from '/src/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
