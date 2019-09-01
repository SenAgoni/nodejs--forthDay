/**
 * 此文件是整个项目的总入口文件用于搭建服务器和调用路由和控制器的方法的
 */
// 1.搭建服务器
let http = require('http');
let server = http.createServer();
server.listen(3000,()=>{
    console.log('the server is running at 127.0.0.1:3000');
})
server.on('request',(req,res)=>{
    
})