Cards Against
==========

This project is an online version of the popular party game, Cards against humanity. It utilises web-sockets and the AngularJS framework to allow players to use their smart-phones/tablets as their *hand* whilst a central desktop/laptop serves as a *room*, connects all the players, tallies points and gives instruction.

It is very much a work in progress at the moment but feel free to contribute.

Disclaimer
----------
I am in no way affiliated with the official Cards Against Humanity card game but they are top blokes and distribute the game under a Creative Commons BY-NC-SA 2.0 license so it's all kosher. If you like the game I strongly suggest heading over to [their website](http://cardsagainsthumanity.com) and buying a deck yourself.

Setting it up
----------
Clone the repo, fire up terminal and enter the following commands.
*Please note: You will need to have [node.js](http://nodejs.org/), [yeoman](http://yeoman.io/) and [git flow](https://github.com/nvie/gitflow) installed. Follow the links for help on getting these set up.

```shell
$cd cards-against/
$git flow init -d
$npm install
$bower update
$grunt server
```

The app should now run on [port 9000](http://127.0.0.1:9000), you can change this in Gruntfile.js if you wish.

ToDo
---------

- [x] Connect angular to socket.io on an express server.
- [x] Build a simple chat service.
- [x] Add functionality for multiple rooms.
- [x] Randomly generate rooms on load
- [x] Each connected device becomes a player with their own scope/hand
- [x] Add in a few test cards using the chat app as a template
- [ ] Create a service that deals cards to the players via a JSON file
- [ ] Add some basic styles so it doesn't look like a dev built it