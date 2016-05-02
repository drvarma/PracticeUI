In order to run tha application 

Requirements to to run the app 

Need to have latest version of nodeJS install and node.js command prompt and ability to use following commands


Use commands

npm install 

node server.js


url 

localhost:3000


Guidelines on using the applicaton 


You may see the data loaded from  buddies.json and represented in the table

Adding buddies will add to the array. 


$http({
	url : 'url', 
	method: 'POST',
	data : data,
	success : function (data) {

	}, error : function(xhr) {
		
	}
})