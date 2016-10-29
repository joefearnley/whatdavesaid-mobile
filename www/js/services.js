angular.module('starter.services', [])

.factory('Clips', funciton() {
    // Some fake testing data
    var clips = [{
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'img/ben.png'
    },
    {
        id: 0,
        name: 'Ben Sparrow',
        lastText: 'You on your way?',
        face: 'img/ben.png'
    }];

    return {
        all: function() {
            return clips;
        }
    }
});
