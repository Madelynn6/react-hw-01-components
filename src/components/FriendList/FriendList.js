import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(el => (
        <FriendListItem
          key={el.id}
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;

FriendListItem.propTypes = {
  friends: PropTypes.object,
};
