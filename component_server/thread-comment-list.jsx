import React from 'react';
import Comment from './comment';
import $ from 'zepto';
import Immutable from 'immutable';

let CommentList = React.createClass({
    propTypes: {
        threadId: React.PropTypes.number,
        posts: React.PropTypes.array
    },
    getInitialState() {
        window.addEventListener("scroll", this.handleScroll);
        return {
            threadId: this.props.threadId,
            posts: this.props.posts,
            page: 0,
            isLoading: false,
            url: "/bbs/thread/loadPost"
        }
    },
    componentDidMount() {
        //this.scrollEvent = rcUtil.Dom.addEventListener(window, 'scroll', this.handleScroll);
        //this.resizeEvent = rcUtil.Dom.addEventListener(window, 'resize', this.handleScroll);
        window.addEventListener("scroll", this.handleScroll);
    },

    //componentWillUnmount() {
    //    if (this.scrollEvent) {
    //        this.scrollEvent.remove();
    //    }
    //    if (this.resizeEvent) {
    //        this.resizeEvent.remove();
    //    }
    //},
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    getComment() {
        var nextPage = this.state.page + 1;
        $.get(this.state.url + "?page=" + this.state.page + "&threadId=" + this.state.threadId, function (result) {
            if (this.isMounted()) {


                this.setState({
                    posts: this.state.posts.concat(result.posts),
                    isLoading: false,
                    page: nextPage
                });
            }
        }.bind(this));
    },
    handleScroll() {
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var scrollTop = $(window).scrollTop();

        if (docHeight - (winHeight + scrollTop) <= 200) {
            if (!this.state.isLoading) {
                this.setState({
                    isLoading: true
                });
                this.getComment();
            }
        }
    },
    render: function () {
        let createItem = (item, index) => <Comment key={index} post={item}/>;
        let loadingDiv = '';
        if (this.state.isLoading) {
            loadingDiv = <div className="pull-loading"><p>加载中...</p></div>;
        }
        return (

            <div className="article-comments">
                <i className="comment-icon"></i>
                <ul className="clearfix" id="list-post">
                    {this.state.posts.map(createItem)}
                </ul>
                {loadingDiv}
            </div>
        );
    }
});

module.exports = CommentList;
