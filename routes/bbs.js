/**
 * Created by spencezhang on 2015/10/13.
 */
var express = require('express');
var router = express.Router();

require('babel/register');

var React = require('react');
var ReactDomServer = require('react-dom/server');

var Mock = require('mockjs');

/* GET bbs page. */
router.get('/', function (req, res, next) {

    //var ThreadComponent = require('../component_server/thread.jsx');
    //var html = ReactDomServer.renderToString(
    //    React.createElement(ThreadComponent, props)
    //);

    //init data
    var thread = require('../json/thread.json');
    var posts = require('../json/posts.json');

    var props = {thread: thread, posts: posts};



    res.render('bbs', {title: 'Express', html: '', props:JSON.stringify(props)});
});

router.get('/thread/loadPost', function (req, res, next) {
    //var position = req.query.position;
    var data = Mock.mock({
        'posts|10': [{
            "forumId": "1",
            "threadId": "345",
            "content|1": ["回复发生发的萨芬1", "回范德萨分复2", "方芳芳回复3", "是事实回复4", "回订单复5", "回方法复6", "回死死死死死死死死死死死复7", "回滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答复8", "回复9"],
            'authorId|1-10000': 100,
            "replyPostId": "0",
            "replyAuthorId": "0",
            "userIp": Mock.Random.ip(),
            "dateline": Mock.Random.datetime('yyyy-MM-dd HH:mm:ss'),
            'id|+1': 1,
            "floor|+1": 25,
            "user|1": [
                {
                    "nickname": "\u88d5",
                    "headImgUrl": "http:\/\/wx.qlogo.cn\/mmopen\/ddXJq4HQ2Z0yHV8ZCUKxkVvyeIHp6G8HYQOdUa4tuvAlklH6aD0ibgldRJRLl4LrPSrD2EIe0C5w0tRz7ziafC1nsrbIgBsk4Z\/96",
                    "geek": "",
                    "level": "lv1",
                    "isModerator": "0"
                },
                {
                    "nickname": "\u4e86\u7136\u4e8e\u80f8",
                    "headImgUrl": "http:\/\/wx.qlogo.cn\/mmopen\/Lu45zIkLudiavHd1sIk5KA9ZBksChekL9BPziavBRWia6tJTaOSqZXic3KhuPqSulSdIgbaFPtCNMaic3XWktRkpnnDWt96MlrZvB\/96",
                    "geek": "",
                    "level": "lv6",
                    "isModerator": "0"
                },
                {
                    "nickname": "\u9ed1\u732b\u8b66\u957f",
                    "headImgUrl": "http:\/\/wx.qlogo.cn\/mmopen\/eytJa9K5jkrS9V8AaxMHRicpO6ppFrVicicDgjVySwINJEDorjoZab9bhCIOjVlibRRSnNbeicHQaevzkRcOgMltcXWck0R3e8uAR\/96",
                    "geek": "",
                    "level": "lv6",
                    "isModerator": "0"
                },
                {
                    "nickname": "\u4e1c\u4e1c\u67aa",
                    "headImgUrl": "http:\/\/wx.qlogo.cn\/mmopen\/ajNVdqHZLLB6w3PrI0ZTibO6owfu4fvyibGmjPibibO9KBFzqagKREia5SUqMic6dXRr2t4zd6bolfz9eRqGiclrD1L4g\/96",
                    "geek": "",
                    "level": "lv1",
                    "isModerator": "0"
                },
                {
                    "nickname": "Aaron\\x20,",
                    "headImgUrl": "http:\/\/q4.qlogo.cn\/g?b=qq&k=rcoF3d6pNPOj2fZ1xYibib0w&s=40&t=1443426594",
                    "geek": "",
                    "level": "lv1",
                    "isModerator": "0"
                },
                {
                    "nickname": "\u5e03\u5b9c\u8bfa\u65af\u827e\u5229\u65afMessi",
                    "headImgUrl": "http:\/\/wx.qlogo.cn\/mmopen\/ddXJq4HQ2Z3YHoQwv2zcpxmDNia85PwiclOKQib3MZiccibFhzHkQicichkhKjO7zKj9oFsJZcdRJyshO0AITbuicIUQLv2zS6BF6PXx\/96",
                    "geek": "",
                    "level": "lv3",
                    "isModerator": "0"
                }, {
                    "nickname": "",
                    "headImgUrl": "http:\/\/q4.qlogo.cn\/g?b=qq&k=NAZ9tefDC17BiamtD8fEpPA&s=40&t=1437979541",
                    "geek": "",
                    "level": "lv1",
                    "isModerator": "0"
                }
            ],
            "replyAuthor|1": ['spence', '', 'jin', 'hua']
        }]
    });
    res.json(data);
});

router.get('/thread/praise', function (req, res, next) {
    //var position = req.query.position;
    var data = Mock.mock({
        "isPraise|1": true,
        "praises|1-100":100
    });

    res.json({err_code:0, msg:'', data:data});
});

router.get('/thread/seo', function (req, res, next) {

    var superaget = require('superagent');

    superaget.get('http://localhost:3000/bbs',function(err,response){

        var body = response.text;
        res.json({'data':body});
        //res.json({err_code:0, msg:'', data:data});
        //next();
    });

    //res.json({err_code:0, msg:'', data:data});
});

module.exports = router;

