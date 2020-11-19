# Fearless Trial Project (Software Engineer)

## Table of contents
* [Must Haves](#must-haves)
* [Assignment](#assignment)
* [Technologies](#technologies)
* [Setup](#setup)
* [DockerImage Setup](#dockerimage-setup)
* [Heroku App](#heroku-app)
* [Questions](#questions)

## Must Haves 

1. Web application interface that uses Javascript and HTML and that is served on port 3000. 

2. Use the https://countapi.xyz api to manage counting;

3. Provide a single button to "hit" the counting api and display the current number of hits 

4. Runs locally with a single startup command 

5. Should run correctly in Chrome; don't worry about cross-browser compatibility

6. Includes a solution.md that provides relevant documentation including how to build and run the solution

##### Nice to haves 

1. Includes a Dockerfile that will run and serve the web application

2. Any components are reusable (i.e. could have multiple copies on the same page

3. The port solution is served on is configurable and documented in the solution.md

##### Addititional Guidance 

1. The customer has not yet selected particular tchnologies, so yo are free to use front-end frameworks and/or starter projects as appropriate

## Assignment 

1. Build a proof of concept according to the requirements above and check it into a public Git repository (e.g Github) and link that repository in response.

	* Git history is important, but only for the main branch 

2. In a solution.md in the root of the repository:

	* List and future updates, changes, or outstanding code you would like to add or would reccommend be added

	* Document any assumptions, changes, or details of the implementation that materially impact the addition of future features. 

3. Be prepared to spend 15 to 30 minutes discussing your approach and implementation with another Software Engineer. 

## Technologies 
Project is created with:
* Node.js + Express
* Docker 

## Setup 

	$ mkdir fearless
	$ cd fearless

clone the repository 

	$ git clone https://github.com/ChalkingCode/fearlesstrialproject.git

	$ cd fearlesstrialproject

install dependencies and run   

	$ npm install
	$ npm start 
or 

	$ run node index.js 

Note see [Introduction to npm](https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager)

##### Port Solution How to 

To configure the port the server is listening to run Port=ANYPORT npm start or node index.js 

ex. PORT=3005 npm start will open on http://localhost:3005. example below 

	$ PORT=3005 npm start  

## DockerImage Setup 

##### Building your image 

	$ docker build -t <your username>/node-web-app .

##### Run the image 

	$ docker run -p 3000:3000 -d <your username>/node-web-app

##### Test 

	$ docker ps 
	$ curl -i localhost:3000



## Heroku App

This project is also being ran as a herokuapp @ https://fearlesstrialproject.herokuapp.com

## Questions

###### Questions? If you have a question or would like to add feedback please contact me at skylarbarrowman@gmail.com. :) 
