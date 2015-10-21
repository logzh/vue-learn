import React from 'react';

const CommentUser = (props) => {
    var moderator = '', geek = '';
    if (props.post.user.isModerator == '1') {
        moderator = <span className="moderator"><i></i>版主</span>;
    }

    if (props.post.user.geek) {
        geek = <span className="geek"><i></i>{props.post.user.geek}</span>;
    }

    return (
        <div className="comment-user clearfix">
            <img src={props.post.user.headImgUrl}/>
            <div className="comment-info">
                <font>{props.post.user.nickname}</font>
                <span className={'level' + props.post.user.level}></span>
                {moderator}
                {geek}
            </div>
            <div className="comment-time">
                {props.post.dateline}
                <font>{props.post.floor}楼</font>
            </div>
        </div>
    );
};

CommentUser.propTypes = {
    post: React.PropTypes.object
};

module.exports = CommentUser;