const http = require('http');
const fs = require('fs');
const r = (req, res) => {
	try {
		data = fs.readFileSync(req.url.replace('/', ''));
		res.writeHead(200);
		res.end(data)
	}
	catch {
		res.writeHead(404);
		res.end();
	}
}
http.createServer(r).listen(42071);

