import React from 'react';

let CommentUser = React.createClass({
    propTypes: {
        post: React.PropTypes.object
    },
    getInitialState() {
        return {
            post: this.props.post
        };
    },
    render() {
        var moderator = '', geek = '';
        if (this.state.post.user.isModerator == '1') {
            moderator = <span className="moderator"><i></i>版主</span>;
        }
        if (this.state.post.user.geek) {
            geek = <span className="geek"><i></i>{this.state.post.user.geek}</span>;
        }

        return (
            <div className="comment-user clearfix">
                <img src={this.state.post.user.headImgUrl}/>
                <div className="comment-info">
                    <font>{this.state.post.user.nickname}</font>
                    <span className={'level' + this.state.post.user.level}></span>
                    {moderator}
                    {geek}
                </div>
                <div className="comment-time">
                    {this.state.post.dateline}
                    <font>{this.state.post.floor}楼</font>
                </div>
            </div>
        );
    }
});

module.exports = CommentUser;