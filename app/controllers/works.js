import Ember from 'ember';

export default Ember.Controller.extend({

  works: function(){
    return this.store.findAll('work');
  }.property()

});
