// Keep track of our socket connection
let socket;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  // Start a socket connection to the server
  socket = io.connect('http://localhost:8000')
  // if this server is running somewhere else do something like:
  //socket = io.connect('https://socket-hack.herokuapp.com/');
  // We make a named event called 'mouse' and write an
  // anonymous callback function
  socket.on('mouse',
    // When we receive data
    function(data) {
      console.log("Got: " + data.x + " " + data.y);
      // Draw a blue circle
      fill(random(255),0,random(255));
      noStroke();
      ellipse(data.x,data.y,10,10);
    }
  );
}

function draw() {
  // Nothing
}

function mouseDragged() {
  // Draw some white circles
  fill(random(255));
  noStroke();
  ellipse(mouseX,mouseY,10,10);
  // Send the mouse coordinates
  sendmouse(mouseX,mouseY);
}

// Function for sending to the socket
function sendmouse(xpos, ypos) {
  // We are sending!
  console.log("sendmouse: " + xpos + " " + ypos);
  
  // Make a little object with x and y

  var data = {
    x: xpos, 
    y: ypos 
  };

  // Send that object to the socket
  socket.emit('mouse',data);
}