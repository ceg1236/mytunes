// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
   this.render();

  },

  // events: {
  //   'click': function() {
  //     this.model.dequeue();
  //   }
  // },

  render: function() {
    // return this.$el  // original
    // this.$el.children.detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
