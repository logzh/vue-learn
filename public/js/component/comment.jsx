import React from 'react';
import CommentHead from './comment-head';
import CommentContent from './comment-content';

var Comment = React.createClass({
    propTypes: {
        post: React.PropTypes.object
    },
    getInitialState: function () {
        return {
            post: this.props.post
        }
    },
    render: function () {
        return (
            <li className="clearfix list-item">
                <CommentHead post={this.state.post}/>
                <CommentContent post={this.state.post}/>
            </li>
        );
    }
});

module.exports = Comment;