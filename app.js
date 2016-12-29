var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io')(server)
var fs = require("fs")
var path = require("path")
var args = require("minimist")(process.argv.slice(2))

var firebase = require('firebase')
// Initialize Firebase
var config = {
	apiKey: "AIzaSyCYTH6kgP4veDqE66hoPqeGjcn047tMMu4",
	authDomain: "pewi-2fd9d.firebaseapp.com",
	databaseURL: "https://pewi-2fd9d.firebaseio.com",
	storageBucket: "pewi-2fd9d.appspot.com",
	messagingSenderId: "734947320023"
};
firebase.initializeApp(config);
var database = firebase.database()

const PORT = process.env.PORT || 3000
const HOST = process.env.HOST || '192.168.0.14'

app.use(function(req, res, next) {
	const fpath = path.join(__dirname + '/public', req.path)
	fs.stat(fpath, function(err, info){
		if (err || info.isDirectory()){
			res.sendFile(path.join(__dirname + '/public', "index.html"))
		} else {
			res.sendFile(fpath)
		}
	})
})

/* No longer needed since going 'serverless'
io.on('connection', function(socket){
	// Someone joins the system
	socket.on("join", function(data){
		if (!data.sessionId){
			// Create new session
			var newSessionRef = database.ref('sessions/').push()
			newSessionRef.set({
				sessionName: "My session"
			}).then(function(){
				var newSessionId = newSessionRef.toString().split("sessions/")[1]
				console.log("New session created", newSessionId)
				// Let the user know about his new session
				socket.emit("join_success", {sessionId: newSessionId})
			})
		} else {
			
		}
	})
	socket.on("disconnect", function(){
		console.log("Someone is disconnecting")
	})

	function addPlayer(player){
		var newPlayerRef = database.ref('/players/').push()
		newPlayerRef.set({
			name: "anonymous",
			socketId: socket.id
		}).then(function(){
			var newPlayerId = newPlayerRef.toString().split("players/")[1]
		})
	}
})
*/

server.listen(PORT);
console.log("Have fun at port :: " + PORT)