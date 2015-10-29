import React from 'react';
import TrialItem from './trial-item';
import $ from 'zepto';
import Request from 'superagent';
require('../../css/trial-list.css');
let List = React.createClass({
    propTypes: {
        trials: React.PropTypes.array
    },
    getInitialState() {
        return {
            trials: this.props.trials,
            page: 1,
            isLoading: false,
            url: "/shiwan/home/load"
        };
    },
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    },

    getData() {
        var nextPage = this.state.page + 1;
        Request.get(this.state.url + "/" + this.state.page).end(function (err, res) {
            if (err) throw err;

            if (!err && this.isMounted()) {
                this.setState({
                    trials: this.state.trials.concat(res.body.data),
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
                this.getData();
            }
        }
    },
    render () {
        let createItem = (item, index) => <TrialItem key={index} trial={item}/>;

        return (
            <div className="try-list">
                <ul className="clearfix" id="list-trial">
                    {this.state.trials.map(createItem)}
                </ul>
            </div>
        );
    }
});

module.exports = List;