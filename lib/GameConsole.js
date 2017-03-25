'use strict';

function GamingConsole(systemName){
	this.systemName = systemName;
}

GamingConsole.prototype.play = function(game) {
	return this.systemName + " plays " + game.title;
};


module.exports = GamingConsole;