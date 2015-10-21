import React from 'react';
import ThreadAuthor from './thread-author';
//import ThreadCommentList from './thread-comment-list';
import CommentDialog from './comment-dialog';
import ShareMask from './share-mask';
import Request from 'superagent';

const ThreadTitle = (props) => {
    return (
        <div className="item-tit">
            <p>
                {props.title}
            </p>
        </div>
    );
};

ThreadTitle.propTypes = {
    title: React.PropTypes.string
};


const ThreadContent = (props) => {
    return (
        <div className="item-main">
            <div className="art-words" dangerouslySetInnerHTML={{__html: props.content}}></div>
        </div>
    );
};

ThreadContent.propTypes = {
    content: React.PropTypes.string
};

let ThreadPraise = React.createClass({
    propTypes: {
        threadId: React.PropTypes.number,
        praises: React.PropTypes.number,
        isPraised: React.PropTypes.bool
    },
    getInitialState() {
        return {
            threadId: this.props.threadId,
            praises: this.props.praises,
            isPraised: this.props.isPraised,
            url: '/bbs/thread/praise'
        }
    },
    handlePraise() {
        Request.get(this.state.url + '?threadId=' + this.state.threadId).end(function (err, res) {
            if (err) throw err;

            if (!err && res.body.err_code == 0) {
                this.setState({
                    isPraised: res.body.data.isPraise,
                    praises: res.body.data.praises
                })
            } else {

            }
        }.bind(this));
    },
    render() {

        return (
            <li className={this.state.isPraised ? 'already':''} onClick={this.handlePraise}>
                <a className="praise">
                    <i></i><span className="praises-count">{this.state.praises}</span>
                </a>
            </li>
        );
    }
});

let ThreadPost = React.createClass({
    propTypes: {
        threadId: React.PropTypes.number,
        posts: React.PropTypes.number,
        isPosted: React.PropTypes.bool,
        clickHandle: React.PropTypes.func.isRequired
    },
    getInitialState() {
        return {
            threadId: this.props.threadId,
            posts: this.props.posts,
            isPosted: this.props.isPosted,
            url: '/bbs/thread/post',
            clickHandle: this.props.clickHandle
        }
    },
    render() {
        return (
            <li className={this.state.isPosted ? 'already':''} onClick={this.state.clickHandle}>
                <a className="comment">
                    <i></i><span className="post-count">{this.state.posts}</span>
                </a>
            </li>
        );
    }
});

let Thread = React.createClass({
    propTypes: {
        thread: React.PropTypes.object,
        posts: React.PropTypes.array,
        showCommentDialog: React.PropTypes.bool,
        showShareMask: React.PropTypes.bool
    },
    getInitialState() {
        return {
            thread: this.props.thread,
            posts: this.props.posts,
            showCommentDialog: false,
            showShareMask: false
        }
    },
    showCommentDialog(e) {
        this.setState({
            showCommentDialog: true
        });
    },
    closeCommentDialog(e) {
        this.setState({
            showCommentDialog: false
        });
    },
    showShareMask(){
        this.setState({
            showShareMask: true
        });
    }, hideShareMask(){
        this.setState({
            showShareMask: false
        });
    },
    render() {
        return (
            <div className="article-con">
                <div className="article-item">
                    <div className="item-user">
                        <ThreadAuthor user={this.state.thread.user} threadDateline={this.state.thread.dateline}/>
                    </div>
                    <ThreadTitle title={this.state.thread.title}/>
                    <ThreadContent content={this.state.thread.content}/>
                </div>
            </div>
        );
    }
});

module.exports = Thread;