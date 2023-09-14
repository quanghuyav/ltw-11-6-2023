import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';

function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get('https://whats-the-fox.onrender.com/api/v1/posts').then((res) => console.log(res.data.data.posts));

        // const callAPI = async () => {
        //     const res = await fetch('https://whats-the-fox.onrender.com/api/v1/posts');
        //     const data = await res.json();
        //     setPosts(data.data.posts);
        // };
        // callAPI();

        // fetch('https://whats-the-fox.onrender.com/api/v1/posts')
        //     .then((res) => res.json())
        //     .then((data) => setPosts(data.data.posts));
    }, []);

    return (
        <>
            <h1>Trang chủ</h1>
            <Button variant="contained">Hello</Button>
            {posts.map((post, index) => (
                <h2 key={index}>
                    {post.author.name}: {post.content}
                </h2>
            ))}
        </>
    );
}

export default Home;
