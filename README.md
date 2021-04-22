# delunico-taskmanager http://delunico-taskmanager.herokuapp.com/

This task managing web application uses full CRUD operations between the front-end build in Angular and the backend using a node.js API connected to a MySQL database. It offers easy task management as well as the option to save multiple lists.


## REST API

The api was created by using node module express in the node.js server. All requests for GET, POST, PUT, and DELETE were routed to database queries that perform CRUD operations on a CLEARDB mysql database add-on hosted on heroku. All requests were performed with HTTPS TLS encrytion to ensure the privacy protection of personal tasks or lists.


## Technologies Incorporated
<ul>
  <li>Angular Web Framework </li>
  <li>Node.js Runtime Environment</li>
</ul>

## Libraries
MaterialUI

## Languages
<ul>
  <li>TypeScript</li>
  <li>JavaScript</li>
  <li>HTML + CSS</li>
</ul>

## Hosting
This project was hosted on the free heroku web server. All commits and updates to this project were performed using the heroku CLI and bash interface.

## Database
This mysql2 database is achieved by integrating the heroku clearDB add-on with my spring app.

## Design Patterns
MVC design pattern
Restful Service Layer
Single Page Application (SPA)

## Features

#### CRUD: ####
<ul>
  <li>Each List's name can be edited or deleted as desired. </li>
  <li>Each List's tasks can be edited or deleted as desired.</li>
  <li>You may add as many Lists or tasks as desired.</li>
</ul>
#### Cross it Off! ####

  Each task can be crossed off to keep track of your progress and it will remember that state next time you open the app.
  
#### Sidebar: ####
 
  The sidebar can be toggled with the hamburger menu button to either full screen view on smaller devices, or to the side view on desktop. It contains all of the saved lists and highlights the current active list thats loaded. 
  
#### Responsiveness: ####

  This application is responsive to almost all viewports by using css @media selectors and more. The font-size, margins, and layout will change depending on the viewport dimensions of the device such as mobile, tablet, or desktop. 
  

