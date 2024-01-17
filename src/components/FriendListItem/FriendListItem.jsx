import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? css.isActive : css.isRetired;
  return (
    <div className={css.item}>
      <img className={css.avatar} src={avatar} alt={avatar} width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusClass}>{isOnline ? 'true' : 'false'}</p>
    </div>
  );
};
