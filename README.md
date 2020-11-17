# Fearless Trial Project (Software Engineer)

## Table of contents
* [Must Haves] (#Must-Haves)
* [Assignment] (#Assignment)
* [Technologies] (#Technologies)
* [Setup] (#Setup)
* [DockerImage Setup] (#DockerImage-Setup]


# Project Purple Cow Definition

 

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

	1. Git history is important, but only for the main branch 

2. In a solution.md in the root of the repository:

	1. List and future updates, changes, or outstanding code you would like to add or would reccommend be added

	2. Document any assumptions, changes, or details of the implementation that materially impact the addition of future features. 

3. Be prepared to spend 15 to 30 minutes discussing your approach and implementation with another Software Engineer. 

## Technologies 
Project is created with:
* Node.js + Express
* Docker 

## Setup 

1. mkdir fearless

2. cd fearless

3. clone the repository 

	git clone https://github.com/ChalkingCode/fearlesstrialproject.git

4. cd fearlesstrialproject

5. npm install  

6. Run commands Note: the port will be 3000 unless configured see Port Solution How to. 

	npm start or you can run node index.js 

Note see [Introduction to npm] (https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager)

##### Port Solution How to 

1. Port const is 3000, so if you want to run on const only run ex below 

	npm start or you can run node index.js

2. To configure the port the server is listening to run Port=ANYPORT npm start or node index.js 

ex. PORT=3005 npm start will open on http://localhost:3005. example below 

	PORT=3005 npm start or you can run PORT=3005 node index.js 

## DockerImage Setup 

##### Building your image 

	$ docker build -t <your username>/node-web-app .

##### Run the image 

	$ docker run -p 3000:3000 -d <your username>/node-web-app

##### Test 

	$ docker ps 
	$ curl -i localhost:3000

Documentation on a dockerized Node.js web app can be found at site below

[https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/] (https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/)

### Questions

###### Questions? If you have a question or would like to add feedback please contact me at skylarbarrowman@gmail.com. :) 
