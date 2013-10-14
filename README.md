Cards Against
==========

This project is an online version of the popular party game, Cards against humanity. It utilises web-sockets and the AngularJS framework to allow players to use their smart-phones/tablets as their *hand* whilst a central desktop/laptop serves as a *room*, connects all the players, tallies points and gives instruction.

It is very much a work in progress at the moment but feel free to contribute.

Disclaimer
----------
I am in no way affiliated with the official Cards Against Humanity card game but they are top blokes and distribute the game under a Creative Commons BY-NC-SA 2.0 license so it's all kosher. If you like the game I strongly suggest heading over to [their website](http://cardsagainsthumanity.com) and buying a deck yourself.

Documentation
----------
Check out the documentation in the docs folder for info on how to use the styles correctly. Any additions or changes to the SASS files need to be fully documented in the same style.

Setting it up
----------
Clone the repo, fire up terminal and enter the following commands.
*Please note: You will need to have [node.js](http://nodejs.org/), [yeoman](http://yeoman.io/) and [git flow](https://github.com/nvie/gitflow) installed. Follow the links for help on getting these set up.

```
git flow init -d
npm install
bower update
grunt server
```

The app should now run on [port 9000](http://127.0.0.1:9000), you can change this in Gruntfile.js if you wish.

ToDo
---------

- [ ] Create a service that deals cards to the players via a JSON file