var express = require('express');
var fs = require('fs');
var app = express();

app.use( function ( req, res, next ) {
	// Website you wish to allow to connect
	var origin = req.headers.origin;
	res.setHeader('Access-Control-Allow-Origin', origin);

	//res.setHeader( 'Access-Control-Allow-Origin', '*' );

	// Request methods you wish to allow
	res.setHeader( 'Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE' );

	// Request headers you wish to allow
	res.setHeader( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Content-Disposition, Accept' );

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader( 'Access-Control-Allow-Credentials', true );

	if(req.method == "OPTIONS")
	{
		res.sendStatus(200);
	}else{
		next();
	}

	// Pass to next layer of middleware
	//next();
} );

app.get('/api/getBubbleInfo', function(req, res){
    var content;
    var x = fs.readFileSync('./db/test.json');
    console.log(x);
    res.json(JSON.parse(x));
});

var server = app.listen(2000, function() {
	var host = server.address(),address;
	var port = server.address().port;
	console.log("Pop Priority backend started running on port %s", port);
});
