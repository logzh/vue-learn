import React from 'react';

let ThreadAuthor = React.createClass({
    propTypes: {
        user: React.PropTypes.shape({
            geek: React.PropTypes.string,
            isModerator: React.PropTypes.oneOf(['0', '1']),
            headImgUrl: React.PropTypes.string,
            nickname: React.PropTypes.string,
            level: React.PropTypes.string
        }),
        threadDateline: React.PropTypes.string.isRequired
    },
    getInitialState() {
        return {
            user: this.props.user,
            threadDateline:this.props.threadDateline
        };
    },
    render() {
        let moderator = '', geek = '';
        if (this.state.user.isModerator == '1') {
            moderator = <span className="moderator"><i></i>版主</span>;
        }
        if (this.state.user.geek) {
            geek = <span className="geek"><i></i>{this.state.user.geek}</span>;
        }

        return (
            <div className="user-info clearfix">
                <a href="javascript:void(0);"><img src={this.state.user.headImgUrl}/></a>

                <p className="identity">
                    {this.state.user.nickname}
                    <span className={"level "+this.state.user.level}></span>
                    {moderator}
                    {geek}
                    <br />
                    <span>{this.state.threadDateline.substring(0, 10)}</span>
                </p>
            </div>
        );
    }
});

module.exports = ThreadAuthor;