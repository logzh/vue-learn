import React from 'react';
import Mask from './mask'
import EmotionPanel from './emotion-panel'

let CommentDialog = React.createClass({
    propTypes: {
        closeHandle: React.PropTypes.func,
        showEmotion: React.PropTypes.bool
    },
    getInitialState() {
        return {
            content: '',
            closeHandle: this.props.closeHandle,
            showEmotion:false
        };
    },
    switchEmoton: function (e) {
        this.setState({showEmotion: !this.state.showEmotion});
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
                            <div className="expression" onClick={this.switchEmoton}><a href="javascript:void(0);"></a></div>
                            <div className="btn-main">
                                <a className="cancel" onClick={this.onClose}>取消</a>
                                <a className="send" onClick={this.onSend}>发送</a>
                            </div>
                            { this.state.showEmotion ? <EmotionPanel />: null}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = CommentDialog;
