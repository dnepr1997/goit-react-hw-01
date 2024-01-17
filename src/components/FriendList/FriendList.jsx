import { FriendListItem } from '../FriendListItem/FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem friends={friend} />
        </li>
      ))}
    </ul>
  );
};
