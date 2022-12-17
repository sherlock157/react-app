import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const PostView = (props) => {
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/" + props.match.params.id)
            .then((res) => {
                setPost(res.data);
            })
    }, [])
    return (
        <div className="container">
            <h3 className="my-5 text-center">Post Info</h3>
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <h4>{post.title}</h4>
                        </div>
                        <div className="card-body">
                            {post.body}
                        </div>
                        <div className="card-footer">
                            <Link to="/posts" className="btn btn-success">Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostView;