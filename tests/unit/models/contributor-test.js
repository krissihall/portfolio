import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('contributor', 'Model: Contributors', {
  // Specify the other units that are required for this test.
  needs: ['model:work', 'model:category', 'model:work-image']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
