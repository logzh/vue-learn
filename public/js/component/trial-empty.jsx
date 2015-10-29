import React from 'react';

require('../../css/trial-list-empty.css');

// stateless functional component
let TrialEmpty = () => (
    <div className="state-main">
        <img src="http://wwq.qq.com/images/state-noapply.png" alt=""/>

        <p className="state-words">别急，免费试玩活动马上揭晓！</p>
    </div>
);


module.exports = TrialEmpty;