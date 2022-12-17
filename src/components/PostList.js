import React, {useEffect, useState} from 'react';
import {Row} from "reactstrap";
import axios from "axios";
import {Link} from "react-router-dom";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setPosts(res.data);
            })
    }, []);
    return (
        <div className="container">
            <h3 className="my-5 text-center">Posts</h3>
            <Row>
                {posts.map((item) => (
                    <div className="col-md-4 mb-3">
                        <div className="card h-100">
                            <div className="card-body">
                                {item.title} <Link to={"/posts/" + item.id}>more</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Row>
        </div>
    );
};

export default PostList;