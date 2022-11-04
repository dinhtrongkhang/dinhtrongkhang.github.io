const UserList = ({ users }) => {
    const list = users.map((user) => <User user={user} />);
    return <div className="user-list">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    {list}
                </div>
            </div>
        </div>
    </div>
};

UserList.propTypes = {
    users: PropTypes.arrayOf(UserType),
};