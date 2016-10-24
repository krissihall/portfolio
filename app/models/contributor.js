import DS from 'ember-data';

var attr = DS.attr,
    belongsTo = DS.belongsTo;

export default DS.Model.extend({
  
  work: belongsTo('work'),
  name: attr(),
  portfolioLink: attr(),
  title: attr()

});
