const app = require('./app')



const port = process.env.PORT || 3050;



//Server
app.listen(port , ()=>{
	console.log(`SERVER IS RUNNING ON PORT ${port}`);	
})


module.exports = app;


