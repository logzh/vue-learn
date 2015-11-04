/**
 * Created by spencezhang on 2015/10/29.
 */

/**
 * Created by spencezhang on 2015/10/13.
 */
var express = require('express');
var router = express.Router();

require('babel/register');

var Mock = require('mockjs');

/* GET shiwan page. */
router.get('/', function (req, res, next) {
    //init data
    var trials =require('../json/trials.json');
    //
    //var Component = require('../public/js/component/thread-author.jsx');
    //var html = ReactDomServer.renderToStaticMarkup(
    //    React.createElement(Component, props)
    //);

    var props = {trials: trials};
    var view = 'shiwan/list';
    if (props.trials.length === 0){
        view = 'shiwan/empty-list';
    }
    res.render(view, {title: 'Express', html: '', props:JSON.stringify(props)});
});
//router.param('page', /^\d+$/);
router.get('/home/load/:page', function (req, res, next) {
    //init data
    var data =require('../json/trials.json');
    //
    //var Component = require('../public/js/component/thread-author.jsx');
    //var html = ReactDomServer.renderToStaticMarkup(
    //    React.createElement(Component, props)
    //);

    res.json({err_code:0, msg:'', data:data});
});



module.exports = router;


