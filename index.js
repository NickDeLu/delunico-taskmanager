const express = require('express');

const bodyParser = require('body-parser');

const taskRoutes = require('./routes/taskroutes');
const listRoutes = require('./routes/listroutes');

const app = express();

const ports = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use(express.static(__dirname + '/dist/angular-crash-todolist'));
app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/angular-crash-todolist/index.html'));
});

app.use('/tasks', taskRoutes);
app.use('/lists', listRoutes);

app.listen(ports, () => console.log(`listening on port ${ports}`));