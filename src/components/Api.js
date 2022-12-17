import React, {useEffect, useState} from 'react';
import axios from "axios";

const Api = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setUsers(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("finally")
            })
    }, [])

    const addPost = () => {

        const newUser = {
            userId: 1,
            title: "fenwjfewj nfejkwn fjkewnjk fne",
            body: "fenwjfk newjkf nwejkfn jwenf jkewnf jkwenjkf nwejk nfew"
        }

        axios.post("https://jsonplaceholder.typicode.com/posts", newUser)
            .then((res) => {
                console.log(res);
            })
    }

    const editPost = () => {
        const editUser = {
            userId: 1,
            title: "fenwjfewj nfejkwn fjkewnjk fne",
            body: "fenwjfk newjkf nwejkfn jwenf jkewnf jkwenjkf nwejk nfew"
        }

        axios.put("https://jsonplaceholder.typicode.com/posts/101", editUser)
            .then((res) => {
                console.log(res);
            })
    }

    const deletePost = () => {
        axios.delete("https://jsonplaceholder.typicode.com/posts/1")
            .then((res) => {
                console.log(res);
            })
    }

    return (
        <div className="container mt-5">
            <h3 className="mb-3 text-center">Users</h3>
            <button type="button" className="btn btn-success mb-3 me-3" onClick={addPost}>Add Post</button>
            <button type="button" className="btn btn-success mb-3" onClick={editPost}>Edit Post</button>
            <button type="button" className="btn btn-success mb-3 ms-3" onClick={deletePost}>Delete Post</button>
            <div className="row">
                {users.map((item, index) => (
                    <div className="col-md-3 mb-3">
                        <div className="card">
                            <div className="card-header">{item.name}</div>
                            <div className="card-body">
                                <p>Email: <b>{item.email}</b></p>
                                <p>City: <b>{item.address.city}</b></p>
                                <a href={"https://" + item.website} target="_blank">{item.website}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Api;

// request
// request url: https://topskill.uz/nimadir
// request method: GET, POST, PUT, DELETE (http method) CRUD - Create (POST), Read (GET), Update (PUT), Delete (DELETE)
// request header:
// request params: https://topskill.uz/nimadir?name=nizom&age=24&gender=male
// request body: {name: "nizom", age: 24}, form-data,


// response
// status code: 200
// response body: