import React from 'react';
import Mask from './mask'

let CommentDialog = React.createClass({
    propTypes: {
        closeHandle: React.PropTypes.func
    },
    getInitialState() {
        return {
            content: '',
            closeHandle: this.props.closeHandle
        };
    },
    onChange: function (e) {
        this.setState({content: e.target.value});
    },
    onSend: function (e) {
        console.log(this.state.content);
        e.preventDefault();
    },
    onClose: function (e) {
        this.state.closeHandle(e);
        e.preventDefault();
    },
    render: function () {
        return (
            <div >
                <Mask />

                <div className="comment-box">
                    <div className="box-main">
                        <form>
                                <textarea onChange={this.onChange} value={this.state.content}
                                          placeholder="请输入回复内容..."></textarea>
                        </form>
                        <div className="send-btn">
                            <div className="expression"><a href="javascript:void(0);"></a></div>
                            <div className="btn-main">
                                <a className="cancel" onClick={this.onClose}>取消</a>
                                <a className="send" onClick={this.onSend}>发送</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = CommentDialog;
