Sportsee - Dashboard
The brand new front page for the App Sportsee

Prerequistes
node v16.14.0

The technologies used are :

React v18.2.0
Sass v1.54
Recharts v2.1.13

I recommand the following IDE : 

Visual Studio Code

Install your environment
Install the backend
First, you need to install the backend API.

Launching the API:

Fork the repository
Clone it on your computer.
The npm command will allow you to install the dependencies.

npm i

The npm start dev command will allow you to run the micro API.

npm start dev

The API will run on http://localhost:3000 .

For more information, please check the git repository of the API.

Set up the frontend environment

Fork the repository
Clone it on your computer
Install all the dependencies with npm

npm i

Lauch the app with npm start

npm start

Open [http://localhost:3001] on your browser

Endpoints

As a developer, those endpoints should be helpfull :
(replace :id by the id of user you want to see - Two choices for now : 12 or 18)

"/user/:id" : give some general informations about the user and the daily score.
"/user/:id/activity": give informations about actual weigth, calorie burned, and several stats for the day.
"/user/:id/average-sessions": give information about user's average length of the sessions.
"/user/:id/performance" : give informations used on the radar chart.