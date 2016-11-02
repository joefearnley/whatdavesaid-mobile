angular.module('starter.services', [])

.factory('Clips', function() {
    var clips = [{
        id: 0,
        name: 'Black Metal',
        file: 'black-metal.mp3'
    },
    {
        id: 1,
        name: 'Hot Damn',
        file: 'hot-damn.mp3'
    },
    {
        id: 2,
        name: 'Where you Going?',
        file: 'where-you-going.mp3'
    },
    {
        id: 3,
        name: 'Bought a New Part',
        file: 'bought-a-new-part.mp3'
    },
    {
        id: 4,
        name: 'Large Can of Beer',
        file: 'large-can-of-beer.mp3'
    },
    {
        id: 5,
        name: 'Wheres the Buffet',
        file: 'wheres-the-buffet.mp3'
    },
    {
        id: 6,
        name: 'Challenge to a Duel',
        file: 'challenge-to-a-duel.mp3'
    },
    {
        id: 7,
        name: 'Pansy Immune System',
        file: 'pansy-immune-system.mp3'
    },
    {
        id: 8,
        name: 'Who is This?',
        file: 'who-is-this.mp3'
    },
    {
        id: 9,
        name: 'Clamy Feeling',
        file: 'clamy-feeling.mp3'
    },
    {
        id: 10,
        name: 'You Know I\'m Pessimistic',
        file: 'pessimistic.mp3'
    },
    {
        id: 11,
        name: 'Who\'s William Butterfield',
        file: 'william-butterfield.mp3'
    },
    {
        id: 12,
        name: 'We\'re Gonna Have Futons Instead of Pews',
        file: 'futons-instead-of-pews.mp3'
    },
    {
        id: 13,
        name: 'Smooth as Silk',
        file: ' smooth-as-silk.mp3'
    },
    {
        id: 14,
        name: 'Hahahahahah',
        file: 'hahaha.mp3'
    },
    {
        id: 15,
        name: 'Upper Football',
        file: 'upper-football.mp3'
    }];

    return {
        all: function() {
            return clips;
        }
    }
});
