const User = ({user}) => {
    return (
        <div className="user">
            <h3 className="user-name">{user.fullname}</h3>
            <img src={user.avatar} alt={user.name} />
            <div className="user-job">job: {user.job}</div>
        </div>
    );
};

const UserType = PropTypes.exact({
    id: PropTypes.number,
    fullname: PropTypes.string,
    image: PropTypes.string,
    job: PropTypes.string,
});

User.propTypes = {
    user: UserType,
};