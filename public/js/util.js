/**
 * Created by spencezhang on 2015/10/17.
 */

let util = {
    isWeiXin(){
        var ua = window.navigator.userAgent.toLowerCase();
        return ua.match(/MicroMessenger/i) == 'micromessenger';
    }
};

module.exports = util;
