//import json -server
 const jsonserver = require('json-server')

 //create server
 const mediaPlayerServer = jsonserver.create()

 //create a middle ware to parse the json data
 const middleware = jsonserver.defaults()
 //path for storing the data
 const routes = jsonserver.router('db.json')

 mediaPlayerServer.use(middleware)
 mediaPlayerServer.use(routes)

 //sever port
 PORT = 4000 || process.env.port //deploy

 //server run
 mediaPlayerServer.listen(PORT,()=>{console.log(`Server running successfully at port number ${PORT}`);
 })