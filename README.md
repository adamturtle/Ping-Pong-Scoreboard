# Football Pong Scoreboard

Web app for displaying a scoreboard for a game that my friends and I created for the SuperBowl.

The game is made on a 8 foot by 4 foot piece of wood painted to be a football field (with goal posts). The scoreboard is mounted nearby.

App is built using NodeJS, with Express and Socket.io. 

### Displaying Scoreboard

Scoreboard is designed for tablet device. Just need a web browser to display the scoreboard.

### Controlling Scoredboard

A player of the game or a designated referee can control the scoreboard with a the use of their smart phone.

There is a simple interface for updating all components of the scoreboard. Using socket.io, when a button is pressed on the referee app, the app sends a message to the scoreboard to update. 

### Notes

I had a lot of fun building this scoreboard. It was run to work with NodeJS and really loved building a real time app using socket.io. 