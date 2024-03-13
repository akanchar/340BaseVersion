# 340_BaseVersion
This repository will serve as base setup for one/more of the future activites in this class.
This project utilizes Webstorm IDE and emulates a client-server model, and is created using ReactJS and NodeJS.
Although the project is a little heavy on the Javascripting side, the majority of the focus will be done on understanding the databases in client/server model. 
The IDE, will run a localhost server, which we will then use to start a HTML webpage. The client (HTML) will be retrieving data from the server (JS files), which stores the data in RDMBS format.
In our case, both the client and the server are on the same machine.

Steps to follow, everyone should do the following (except for #3, which will be done only once one per group and by only one member in the group):


1. Install Webstorm IDE.
2. Clone this repository on your machine.
3. One member in the group will create your a Github repository for the group and add collaborators. Make sure to add the instructor as one of the collaborator to your Github repo. Your github repo should be a private repository.
4. Insall Node.js software - https://nodejs.org/en/download
5. Open the cloned repository in Webstorm.
6. Highly likely that there are going to be several errors in the project as the respective libraries need to be downloaded from npm.
7. Open the package.json file in Wesbtorm IDE.
8. Upon opening the "package.json" file, the IDE should automatically hint at "Insall dependencies", a balloon that pops up in the right bottom corner. If it doesn't pop up, right click on version# in the dependencies and select "run npm install".
9. If everything is complete, open the file named app.js - Click on Run and that should print a web URL with localhost:3000.
10. Click on that weblink and it shoud display the HTML page.
11. The HTML page doesn't include anything in the base version, apart from one single button. Upon clicking the button in the HTML page, the results of the query should be displayed.
12. The base version assumes that there is a Database called ADVENTURER and a table called ARTIFACTS in your SQL.
13. **IMPORTANT** Make sure to give your own password that you used to connect to the SQL database, do some hunting to find out where to enter the password. Get to know the files in general.
