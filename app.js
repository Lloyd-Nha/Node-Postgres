var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var pg = require('pg');
//var connectionString = "postgres://xsmjvohnhvfroq:78e5c25faf5b040ef4a78bca68cca9ca07a7290ce184f0d05e6c611374cbfdc5@ec2-184-73-196-65.compute-1.amazonaws.com:5432/dek0cemtc6kmvt";




var app = express();


//creat sql connection
var config = {
	host: 'ec2-184-73-196-65.compute-1.amazonaws.com',
    user: 'xsmjvohnhvfroq',
    database: 'dek0cemtc6kmvt',   
    password: '78e5c25faf5b040ef4a78bca68cca9ca07a7290ce184f0d05e6c611374cbfdc5',
	ssl: true,
    port: 5432
};

// pool takes the object above -config- as parameter
var pool = new pg.Pool(config);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.bodyParser());


// view engine setup :This set up the path to static resources in public images,stylesheet etc
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
//app.set('views', path.join(__dirname, 'public'));
app.set('view engine','ejs');
//app.set('view engine', 'jade');
//---------------------------------------------------------------------------------------------------------------------------
app.post('/banks/v1/createSchool', function(req, res, next){
	
	console.log(req.body.centre_no);
	console.log(req.body.s_name);
	var results = [];

    // Grab data from http request
    var data = [req.body.centre_no, req.body.s_name];
	

    // Get a Postgres client from the connection pool
    pool.connect(function(err, client, done) {
        // Handle connection errors
		if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
        
       // SQL Query > Insert Data
	    var sql = 'INSERT INTO schools (centre_no, s_name) VALUES ($1,$2)';
        client.query(sql,data,function(err,result){
			
			if (err){
				
				console.error(err);
				res.statusCode = 500;
				return res.json({errors:['failed to create school']});
			}
			
			  console.log(result);
              var Centre_no = result.insertId;
              res.json({"Centre_no":Centre_no});
			
		 });

       
        });

        
        
});
//-------------------------------------------------------------------------------------------------------------------------------------------

app.post('/banks/v/twentyfourteen', function(req, res, next){
	
	console.log(req.body.centre_no);
	console.log(req.body.wrote);
	console.log(req.body.passed);
	var results = [];

    // Grab data from http request
    var data = [req.body.centre_no, req.body.wrote, req.body.passed];
	

    // Get a Postgres client from the connection pool
    pool.connect(function(err, client, done) {
        // Handle connection errors
		if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
        
       // SQL Query > Insert Data
	    var sql = 'INSERT INTO year2014 (centre_no, wrote, passed) VALUES ($1,$2,$3)';
        client.query(sql,data,function(err,result){
			
			if (err){
				
				console.error(err);
				res.statusCode = 500;
				return res.json({errors:['failed to create school']});
			}
			
			  console.log(result);
              var Centre_no = result.insertId;
              res.json({"Centre_no":Centre_no});
			
		 });

       
        });

        
        
});
//-----------------------------------------------------------------------------------------------------------------------------------------------
  app.post('/banks/v/twentyfifteen', function(req, res, next){
	
	console.log(req.body.centre_no);
	console.log(req.body.wrote);
	console.log(req.body.passed);
	var results = [];

    // Grab data from http request
    var data = [req.body.centre_no, req.body.wrote, req.body.passed];
	

    // Get a Postgres client from the connection pool
    pool.connect(function(err, client, done) {
        // Handle connection errors
		if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
        
       // SQL Query > Insert Data
	    var sql = 'INSERT INTO year2015 (centre_no, wrote, passed) VALUES ($1,$2,$3)';
        client.query(sql,data,function(err,result){
			
			if (err){
				
				console.error(err);
				res.statusCode = 500;
				return res.json({errors:['failed to create school']});
			}
			
			  console.log(result);
              var Centre_no = result.insertId;
              res.json({"Centre_no":Centre_no});
			
		 });

       
        });

        
        
});
//-------------------------------------------------------------------------------------------------------------------------------------------------
  app.post('/banks/v/twentysixteen', function(req, res, next){
	
	console.log(req.body.centre_no);
	console.log(req.body.wrote);
	console.log(req.body.passed);
	var results = [];

    // Grab data from http request
    var data = [req.body.centre_no, req.body.wrote, req.body.passed];
	

    // Get a Postgres client from the connection pool
    pool.connect(function(err, client, done) {
        // Handle connection errors
		if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
       } 
        
       // SQL Query > Insert Data
	    var sql = 'INSERT INTO year2016 (centre_no, wrote, passed) VALUES ($1,$2,$3)';
        client.query(sql,data,function(err,result){
			
			if (err){
				
				console.error(err);
				res.statusCode = 500;
				return res.json({errors:['failed to create school']});
			}
			
			  console.log(result);
              var Centre_no = result.insertId;
              res.json({"Centre_no":Centre_no});
			
		 });

       
        });

        
        
});
//--------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------GET--------------------------------------------------------------------------

app.get('/banks/v/gettwentyforteen', function(req, res, next) {
	
	
	 pool.connect(function(err, client, done) {
        // Handle connection errors
		if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
         } 
        
       // SQL Query > Insert Data
	    var sql = 'SELECT SUM(wrote) AS Total, SUM(passed) AS Pass, SUM(wrote)-SUM(passed) AS Failed FROM Year2014';
        client.query(sql,function(err,rows, fields){
			
			if (err){
				
				console.error(err);
				res.statusCode = 500;
				return res.json({errors:['failed to retrieve 2014 records ']});
			}
			var res2014 = [];
			for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        res2014.push(empObj);
                    }
					res.json(res2014);
			
			  
			
		 });

       
      });
	
});
//----------------------------------------------------------2015-----------------------------------------------------------------------------------
app.get('/banks/v/gettwentyfifteen', function(req, res, next) {
	
	
	 pool.connect(function(err, client, done) {
        // Handle connection errors
		if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
         } 
        
       // SQL Query > Insert Data
	    var sql = 'SELECT SUM(wrote) AS Total, SUM(passed) AS Pass, SUM(wrote)-SUM(passed) AS Failed FROM Year2015';
        client.query(sql,function(err,rows, fields){
			
			if (err){
				
				console.error(err);
				res.statusCode = 500;
				return res.json({errors:['failed to retrieve 2015 records ']});
			}
			var res2015 = [];
			for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        res2015.push(empObj);
                    }
					res.json(res2015);
			
			  
			
		 });

       
      });
	
});
//-------------------------------------------------------------2016----------------------------------------------------------------------------
app.get('/banks/v/gettwentysxteen', function(req, res, next) {
	
	
	 pool.connect(function(err, client, done) {
        // Handle connection errors
		if(err){
           console.log("not able to get connection "+ err);
           res.status(400).send(err);
         } 
        
       // SQL Query > Insert Data
	    var sql = 'SELECT SUM(wrote) AS Total, SUM(passed) AS Pass, SUM(wrote)-SUM(passed) AS Failed FROM Year2016';
        client.query(sql,function(err,rows, fields){
			
			if (err){
				
				console.error(err);
				res.statusCode = 500;
				return res.json({errors:['failed to retrieve 2016 records ']});
			}
			var res2016 = [];
			for (var empIndex in rows) {
                        var empObj = rows[empIndex];
                        res2016.push(empObj);
                    }
					res.json(res2016);
			
			  
			
		 });

       
      });
	
});
var routes =require('./routes');
// Route 

//home

app.get('/', routes.home);
/*
app.get('/banks/v2/getSchool',routes.getSchool);

app.get('/banks/v/gettwentyforteen',routes.gettwentyforteen);

app.get('/banks/v/gettwentyfifteen', routes.gettwentyfifteen);

app.get('/banks/v/gettwentysxteen', routes.gettwentysxteen);
*/
//app.post('/banks/v1/createSchool',routes.createSchool);
//app.post('/banks/v/twentyfourteen',routes.twentyfourteen);
//app.post('/banks/v/twentyfifteen',routes.twentyfifteen);
//app.post('/banks/v/twentysixteen',routes.twentysixteen);

// wrong url handling

app.get('*', routes.notFound);

//listening port

app.listen(8080, function(){
console.log("The application is running at localhost:8080");
});


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//app.use('/', index);
//app.use('/users', users);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});

// error handler

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
/*app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});*/
module.exports = app;
