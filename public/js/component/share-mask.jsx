import React from 'react';
import Mask from './mask';

// todo require css
let ShareMask = React.createClass({
    propTypes: {
        onHide: React.PropTypes.func
    },
    getInitialState() {
        return {
            onHide: this.props.onHide
        };
    },
    clickHandle(e){
        this.state.onHide(e);
    },
    render () {
        return (
            <div onClick={this.clickHandle}>
                <Mask />
                <div className="wx-share-tips" ></div>
            </div>
        );
    }
});

module.exports = ShareMask;