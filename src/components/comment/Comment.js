import React, { useEffect, useState } from 'react';
import './comment.css'

const Comment = (props) => {
    const [imgUrl, setImgUrl] = useState({});
    const { comment } = props;
    useEffect(() => {
        fetch("https://randomuser.me/api/")
            .then(res => res.json())
            .then(data => setImgUrl(data.results[0].picture.thumbnail))
    }, [])
    return (
        <div className="float">
            <div>
                <img src={imgUrl} alt="" />
            </div>
            <div>
                <strong>{comment.email}</strong>
                <p>{comment.body}</p>
            </div>

        </div>
    );
};
export default Comment;