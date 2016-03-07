var mongoose = require('mongoose');

var userSchema = {
	name: { type: String, required: true}, 
	password: { type: String, required: true }, 
	title: { type: String, required: true}, 
	picture: { type: String, match: /^http:\/\//i }, 
	email: { type: String }, 
	phone: { type: String }, 
	tagline: { type: String }, 
	nationality: { type: String },
	cuisine: [String],
	available: [String],
	blocked: [ {
    		type: mongoose.Schema.Types.ObjectId, ref: 'User'
 		 } 
  	],
	known: [ {
	    type: mongoose.Schema.Types.ObjectId, ref: 'User'
	  } 
	]
};

var schema = new mongoose.Schema( userSchema );

schema.virtual('username').get(function(){
	return (this.email);
});

schema.virtual('knownCount').get(function(){
	return (this.known.length);
});
schema.virtual('blockedCount').get(function(){
	return (this.blocked.length);
});


module.exports = schema; 
module.exports.userSchema = userSchema; 
