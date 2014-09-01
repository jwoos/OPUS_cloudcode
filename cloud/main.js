
// Use Parse.Cloud.define to define as many cloud functions as you want.

Parse.Cloud.beforeSave("jobs",function(request, response) {	
	if (request.object.get("type") == null) {
		response.error("The type field must be filled!");
	} else if (request.object.get("name") == null) {
		response.error("The job description must be filled!");
	} else if (request.object.get("pay") == null) {
		response.error("The pay must be filled!");
	} else if (request.object.get("pay") < 8) {
		response.error("The minimum wage is $8 in NYC!");
	} else if (request.object.get("date") == null) {
		response.error("The date must be filled!");
	} else if (request.object.get("time") == null) {
		response.error("The time must be filled!")
	} else if (request.object.get("time").substring(0,1) != request.object.get("time").substring(0,1).toUpperCase()) {
		response.error("The day must be capitalized properly!")
	} else {
		response.success();
	}
	});
	
	
//push notifs for different days
Parse.Cloud.afterSave("jobs", function (request, response) { 
	if (request.object.get("time") == "Monday") {
	Parse.Push.send({
		channels: [ "monday" ],
		data: { alert: "There is a job for Monday!"}
		}, {
		success: function() {
	},
		error: function(error) {
	}
	});
	} else if (request.object.get("time") == "Tuesday") {
	Parse.Push.send({ 
		channels: [ "tuesday" ],
		data: {alert: "There is a job for Tuesday!"}
		}, {
		success:function() {
	},
		error: function(error) {
	}
	});
	} else if (request.object.get("time") == "Wednesday") {
	Parse.Push.send({ 
		channels: [ "wednesday" ],
		data: {alert: "There is a job for Wednesday!"}
		}, {
		success:function() {
	},
		error: function(error) {
	}
	});
	} else if (request.object.get("time") == "Thursday") {
	Parse.Push.send({ 
		channels: [ "thursday" ],
		data: {alert: "There is a job for Thursday!"}
		}, {
		success:function() {
	},
		error: function(error) {
	}
	});
	} else if (request.object.get("time") == "Friday") {
	Parse.Push.send({ 
		channels: [ "friday" ],
		data: {alert: "There is a job for Friday!"}
		}, {
		success:function() {
	},
		error: function(error) {
	}
	});
	} else if (request.object.get("time") == "Saturday") {
	Parse.Push.send({ 
		channels: [ "saturday" ],
		data: {alert: "There is a job for Saturday!"}
		}, {
		success:function() {
	},
		error: function(error) {
	}
	});
	} else if (request.object.get("time") == "Sunday") {
	Parse.Push.send({ 
		channels: [ "sunday" ],
		data: {alert: "There is a job for Sunday!"}
		}, {
		success:function() {
	},
		error: function(error) {
	}
	});
	}
	
	});