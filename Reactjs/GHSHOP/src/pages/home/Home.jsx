import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(setPosts);
    }, []);
    return (
        <main>
            <h1>Danh sách bài viết</h1>
            <div>
                {posts.map((post) => <Link to="/post/"></Link>)}
            </div>
        </main>
    );
};

export default Home;