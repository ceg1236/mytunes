// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class=\'music\'>(<%= artist %>)</td><td class=\'music\'><%= title %></td><td><%= count %></td><td> <%= up %></td><td><button id=\"up\">UP</button></td><td> <%= down %></td><td><button id=\'down\'>DOWN</button></td>'),

  events: {
    'click #up': function() {
      this.model.attributes.up++;
      this.render();
    },
    'click #down': function() {
      this.model.attributes.down--;
      this.render();
    },
    'click .music': function() {
      this.model.enqueue();

    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
