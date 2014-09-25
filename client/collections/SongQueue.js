// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(song) {
      if(this.at(0) === song) {
        this.playFirst();
      }
    });

    this.on('ended', function(song) {
      this.shift();
      this.playFirst(song);
    });

    this.on('dequeue', function(song) {
      this.remove();
      this.playFirst(song);
    });
  },

  playFirst: function(song) {
    if(this.at(0)) {
      this.at(0).set('currentSong', song);
      this.at(0).play();
    }
  }

});
