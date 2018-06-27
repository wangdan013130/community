// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost', // 主机
//     user: 'root', // 数据库的用户名
//     password: 'root', // 数据库密码
//     database: 'ithub' // 数据库的名字
// });
// // 3 开启连接
// connection.connect();

exports.showSigin = (req,res)=> {
    res.render('sigin.html');
};
exports.handleSigin = (req,res)=> {
    res.send('handleSigin');
};
exports.showSignup = (req,res) => {
    res.send('showSignup');
};
exports.handleSignup = (req,res)=> {
    res.send('handleSignup');
};
exports.handleSignout = (req,res)=> {
    res.send('handleSignout');
}