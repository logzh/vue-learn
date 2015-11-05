var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express', hello: 'Hello Vue.js!'});
});

router.get('/test', function (req, res, next) {

    //var props = {data: {}};
    var props = {
        trials: [{
            "id": "302",
            "coverUrl": "http:\/\/file.tig.qq.com\/wwq\/201508\/31\/113826_3652667b61f850f438f8cfb60536f238.jpg",
            "name": "\u6d4b\u8bd5\u7684 \u6765\u554a\u6765",
            "status": "\u67e5\u770b\u62a5\u544a",
            "applyCount": "1"
        }, {
            "id": "301",
            "coverUrl": "http:\/\/file.tig.qq.com\/wwq\/201508\/31\/111609_7b3a252f604065f10d175f7706f3656b.png",
            "name": "\u7b2c\u4e09\u6b21\u5927\u6492",
            "status": "\u67e5\u770b\u62a5\u544a",
            "applyCount": "0"
        }, {
            "id": "300",
            "coverUrl": "http:\/\/file.tig.qq.com\/wwq\/201508\/31\/110851_233a44cb9663816ab9caec674ce1736c.png",
            "name": "cccc",
            "status": "\u67e5\u770b\u540d\u5355",
            "applyCount": "0"
        }, {
            "id": "299",
            "coverUrl": "http:\/\/file.tig.qq.com\/wwq\/201508\/31\/110117_0842f87ea645c41a572c7d0d8ff7d16f.jpg",
            "name": "\u96f6\u5ea6XPLORER V\u65e0\u4eba\u673a",
            "status": "\u67e5\u770b\u540d\u5355",
            "applyCount": "0"
        }, {
            "id": "298",
            "coverUrl": "http:\/\/file.tig.qq.com\/wwq\/201508\/26\/111047_9b1a1e402ff829de3faf9644fdcec047.jpg",
            "name": "fasdfasdfasdfas",
            "status": "\u5df2\u7ed3\u675f",
            "applyCount": "0"
        }, {
            "id": "297",
            "coverUrl": "http:\/\/file.tig.qq.com\/wwq\/201508\/14\/080517_1276a3d792a971d6b368c7b738d9aba1.jpg",
            "name": "\u591a\u5c11\u54af\u54af",
            "status": "\u5df2\u7ed3\u675f",
            "applyCount": "1"
        }, {
            "id": "296",
            "coverUrl": "http:\/\/file.tig.qq.com\/wwq\/201508\/12\/150956_2b96f9fa62968ed3a372ded58dd16a6d.jpg",
            "name": "\u4e1c\u65b9\u5927\u53a6\u8303\u5fb7\u8428",
            "status": "\u67e5\u770b\u540d\u5355",
            "applyCount": "2"
        }, {
            "id": "295",
            "coverUrl": "http:\/\/file.tig.qq.com\/wwq\/201508\/12\/150712_492c1d02f76f7c3d203e6852fa0eda51.jpg",
            "name": "\u6d4b\u8bd5\u6279\u91cf",
            "status": "\u67e5\u770b\u540d\u5355",
            "applyCount": "2"
        }, {
            "id": "294",
            "coverUrl": "http:\/\/file.tig.qq.com\/wwq\/201508\/12\/150223_843a87607c7583c2180ca6393aaa0c65.jpg",
            "name": "\u6d4b\u8bd5",
            "status": "\u67e5\u770b\u62a5\u544a",
            "applyCount": "2"
        }, {
            "id": "293",
            "coverUrl": "http:\/\/file.tig.qq.com\/wwq\/201507\/17\/191212_8e90afe937ba82f3ae54d42ba211a191.png",
            "name": "\u6d4b\u8bd5\u6dfb\u52a0\u6d3b\u52a8\u8f6e\u64ad\u56fe",
            "status": "\u67e5\u770b\u62a5\u544a",
            "applyCount": "1"
        }]
    };


    res.render('demo', {title: 'Express', props: JSON.stringify(props)});
});

module.exports = router;
