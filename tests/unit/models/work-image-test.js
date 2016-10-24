import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('work-image', 'Model: Work Image', {
  // Specify the other units that are required for this test.
  needs: ['model:work', 'model:category', 'model:contributor']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
