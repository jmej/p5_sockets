# P5.js + web sockets + node + heroku example


Code / example based on
[this](https://github.com/processing/p5.js/wiki/p5.js,-node.js,-socket.io)

This repo contains mostly the same code, modified to deply to heroku

Daniel Schiffman also has a video version of much the same stuff here:
https://www.youtube.com/watch?v=bjULmG8fqc8

Updated to use socket.io 4.22 referencing this:
https://github.com/TannerGabriel/DrawingApp
https://gabrieltanner.org/blog/realtime-drawing-app

To use:

    npm install
    node app.js

and/or push to heroku to deploy there

    heroku login
    heroku git:remote -a <the name of your app on heroku goes here>
    git push heroku master

live version at https://socket-hack.herokuapp.com/