I'm sending you two folders :

Main folder with whole app "SchoolApp" and "json-server" distribution folder.

To create SchoolApp I used Bootstrap, AngularJS. 
To install libraries I used Bower package manager, to install dependencies I used NPM(Node Package Manager). 
To create distribution folder for the server I used Gulp. For communication with data I used $http service.

For testing app you need:

 * Install json-server globaly:

	 npm install json-server -g  ,

and then start server from folder "json-server" (which contains db.json file and
distribution folder):

	json-server --watch db.json

and then go to link: localhost:3000  and start app.


To do any changes to "SchoolApp" install dependencies (packige.json) :

	 npm install ; 

And to create distribution folder for json server:

	start gulp 

and then copy "dist" folder to "public" folder in "json-server".



