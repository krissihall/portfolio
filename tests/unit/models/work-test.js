import DS from 'ember-data';
import Ember from 'ember';
import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('work', 'Model: Work', {
  // Specify the other units that are required for this test.
  needs: ['model:category', 'model:work-image', 'model:contributor']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});

test('Work is valid ember-data Model', function(){
  var store = this.store(),
      work = this.subject({ projectName: 'A title for a work', details: 'bob' });

  ok(work, 
    'work instance created');
  ok(work instanceof DS.Model, 
    'work instance is valid ember-data model');

  // set a relationship
  Ember.run(function() {
    work.set('category', store.createRecord('category', {}));
  });

  ok(work.get('category'), 
    'category model instance created');
  ok(work.get('category') instanceof DS.Model, 
    'category belongsTo is valid ember-data model relationship');

  // set a relationship
  Ember.run(function() {
    work.set('contributor', store.createRecord('contributor', {}));
  });

  ok(work.get('contributor'), 
    'contributor model instance created');
  ok(work.get('contributor') instanceof DS.Model, 
    'contributor hasMany is valid ember-data model relationship');

  // set a relationship
  Ember.run(function() {
    work.set('work-image', store.createRecord('work-image', {}));
  });

  ok(work.get('work-image'), 
    'work-image model instance created');
  ok(work.get('work-image') instanceof DS.Model, 
    'work-image hasMany is valid ember-data model relationship');
});
