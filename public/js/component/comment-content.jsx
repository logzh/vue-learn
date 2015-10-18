import React from 'react';

let CommentContent = React.createClass({
    propTypes:{
        post:React.PropTypes.object
    },
    getInitialState () {
        return {
            post: this.props.post
        }
    },
    render: function () {
        var atHtml = '';
        if (this.state.post.replyAuthor) {
            atHtml = '<span class="at">@' + this.state.post.replyAuthor + '</span>';
        }
        return (
            <div className="comment-main" dangerouslySetInnerHTML={{__html: atHtml + this.state.post.content}}></div>
        );
    }
});

module.exports = CommentContent;