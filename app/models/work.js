import DS from 'ember-data';

var attr = DS.attr,
    belongsTo = DS.belongsTo,
    hasMany = DS.hasMany;

export default DS.Model.extend({

  show: attr('Boolean'),
  featured: attr('Boolean'),
  projectName: attr(),
  thumbnail: attr(),
  details: attr(),
  category: belongsTo('category'),
  workImages: hasMany('work-image'),
  contributors: hasMany('contributors'),

  imageCount: function(){
    var workImages = this.get('workImages'),
        quantity = 0;

    workImages.forEach(function(){
      quantity++;
    });

    return quantity;
  }.property('workImages.[]')

});
