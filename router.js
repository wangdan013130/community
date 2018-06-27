var express = require('express');

var router = express.Router();

var index = require('./controllers/index');
var user = require('./controllers/user');
var topic = require('./controllers/topic');
router.get('/',index.showIndex);
    

// 用户页面
router
    .get('/sigin',user.showSigin)
    .post('/sigin',user.handleSigin)
    .get('/signup',user.showSignup)
    .post('/signup',user.handleSignup)
    .post('/signput',user.handleSignout)

// // 话题页面
// topic
//     .get('/topic/create',topic.showCreate)
//     .post('/topic/create',topic.handleCreate)
//     .get('/topic/:topicID', topic.showTopicID)
//     .get('/topic/:topicID/edit',topic.showTopicEdit)
//     .post('/topic/:topicID/edit',topic.handleEdit)
//     .post('/topic/:topicID/delete',topic.handleDelete);

module.exports = router;
