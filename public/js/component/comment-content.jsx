import React from 'react';

const CommentContent = (props) => {
    var atHtml = '';
    if (props.post.replyAuthor) {
        atHtml = `<span class="at">@${props.post.replyAuthor}</span>`; //es6 string template
    }
    return (
        <div className="comment-main" dangerouslySetInnerHTML={{__html: atHtml + props.post.content}}></div>
    );
};

CommentContent.propTypes = {
    post: React.PropTypes.object
};

module.exports = CommentContent;