const http = require('http');

const hostname = '119.28.140.93';
const port = 80;


function getClientIP(req) {
    return req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
        req.connection.remoteAddress || // 判断 connection 的远程 IP
        req.socket.remoteAddress || // 判断后端的 socket 的 IP
        req.connection.socket.remoteAddress;
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(getClientIP(req));
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
