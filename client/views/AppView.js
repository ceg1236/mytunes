// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
      this.model.get('currentSong').attributes.count++;
      this.libraryView.render();
    }, this);

    // this.model.on('up', function(song) {
    //   this.model.get('currentSong').attributes.up++;
    //   this.libraryView.render();
    // }, this);

    this.model.get('songQueue').on('add', function(){
      this.songQueueView.render();
    }, this);

    this.model.get('songQueue').on('remove', function(){
      this.songQueueView.render();
    }, this);

  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
