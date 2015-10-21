import React from 'react';

let ThreadAuthor = (props) => {
    let moderator = '', geek = '';
    if (props.user.isModerator == '1') {
        moderator = <span className="moderator"><i></i>版主</span>;
    }
    if (props.user.geek) {
        geek = <span className="geek"><i></i>{props.user.geek}</span>;
    }

    return (
        <div className="user-info clearfix">
            <a href="javascript:void(0);"><img src={props.user.headImgUrl}/></a>

            <p className="identity">
                {props.user.nickname}
                <span className={"level "+props.user.level}></span>
                {moderator}
                {geek}
                <br />
                <span>{props.threadDateline.substring(0, 10)}</span>
            </p>
        </div>
    );
};

ThreadAuthor.propTypes = {
    user: React.PropTypes.shape({
        geek: React.PropTypes.string,
        isModerator: React.PropTypes.oneOf(['0', '1']),
        headImgUrl: React.PropTypes.string,
        nickname: React.PropTypes.string,
        level: React.PropTypes.string
    }),
    threadDateline: React.PropTypes.string.isRequired
};

module.exports = ThreadAuthor;