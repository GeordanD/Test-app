import React from "react";
import ReplyButton from "./reply-button";
import LikeButton from "./like-button";
import Comment from "./comment";
export default class Post extends React.Component {
    render() {
        return (
            <div className="card w-75">
                <div className="card-header bg-success text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    This is were our content goes
                </div>
                <div className="card-footer">
                    <LikeButton />
                    <ReplyButton />
                    <Comment/>
                    <Comment/>
                    
                </div>
          </div>  
        );
    }
}
