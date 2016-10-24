import Ember from "ember";
import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('font-icon', 'Component: Font Icon', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
  
  // setup: function(){},
  // teardown: function(){}
});

test('it renders', function() {
  // creates the component instance
  var component = this.subject();
  equal(component._state, 'preRender');

  // appends the component to the page
  this.append();
  equal(component._state, 'inDOM');
});

test('default font selected, no icon selected', function(){
  var component = this.subject();
  equal(this.$().hasClass('glyphicon'), true, 'Glyphicon icon set chosen');
  equal(this.$().hasClass('glyphicon-undefined'), true,
    'The class "glyphicon-undefined" added due to no "type" set.');
});

test('choose icon from glyph font', function(){
  var component = this.subject({ type: 'cloud' });
  equal(this.$().hasClass('glyphicon'), true);
  equal(this.$().hasClass('glyphicon-cloud'), true);
});

test('use custom icon font, no icon selected', function(){
  var component = this.subject({ set: 'custom' });
  equal(this.$().hasClass('customicon'), true);
  equal(this.$().hasClass('customicon-undefined'), true,
    'The class "customicon-undefined" added due to no "type" set.');
});

test('choose icon from custom icon font', function(){
  var component = this.subject({ set: 'custom', type: 'pacman' });
  equal(this.$().hasClass('customicon'), true);
  equal(this.$().hasClass('customicon-pacman'), true);
});
