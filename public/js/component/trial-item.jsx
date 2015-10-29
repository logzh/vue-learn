/**
 * Created by spencezhang on 2015/10/29.
 */
import React from 'react';

let TrialItem = React.createClass({
    propTypes: {
        trial: React.PropTypes.shape({
            id: React.PropTypes.string,
            coverUrl: React.PropTypes.string,
            name: React.PropTypes.string,
            status: React.PropTypes.string,
            applyCount: React.PropTypes.string
        })
    },

    getInitialState() {
        return {
            trial: this.props.trial
        };
    },
    render () {
        let html = `${this.state.trial.name}(${this.state.trial.status})<span>${this.state.trial.applyCount}人已试玩</span>`; //es6 string template
        return (
            <li>
                <a href="#">
                    <div className="list-pic"><img src={this.state.trial.coverUrl} alt=""/></div>
                    <p dangerouslySetInnerHTML={{__html: html}}></p>
                </a>
            </li>
        );
    }
});

module.exports = TrialItem;