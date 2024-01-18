import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ isOnline, id, avatar, name }) => (
        <li className={css.friendItem} key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};
