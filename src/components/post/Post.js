import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Comments from '../comment/Comments';


const Post = (props) => {
    const {id,title,body} = props.post;
    const isDetails = props.isDetails;
    const link = `/post/${id}`;
    const cardStyle= {
        border : '1px solid lightgray',
        padding : '20px',
        margin : '10px'
    }
    console.log(id)
    return (
        
        <Card style={cardStyle}>
            <CardContent>
                <h3>{title}</h3>
                <p>{body}</p>
            </CardContent>
            <CardActions>
            { isDetails ?<div>
                
                <h3>Comments....</h3> 
                
                <hr/>
                <Comments postId={id}></Comments>
                </div>:<Link to={link}><Button variant="contained" color="primary" size="small">See in details..</Button></Link>
            }
            
            </CardActions>
        </Card>
    );
};

export default Post;