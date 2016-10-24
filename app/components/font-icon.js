import Ember from 'ember';

/**
 * components/font-icon.js
 * @module components
 * 
 * Generate glyph or icon.
 * Parameters:
 * * `type` (eg `trash`)
 * * `set` (defaults to glyph, can be extended to additional icon fonts)
 *
 * This component has no template or styling.
 */

var setNames = ['glyph', 'custom'];

export default Ember.Component.extend({

  tagName: 'span',

  classNameBindings: ['iconClassName', 'iconSetClassName'],

  /**
   * Set from which to take icon. An input parameter for this component.
   * Current values are `aeo` or `glpyh`.
   *
   * @property iconSetClassName
   * @type String
   */  
  set: 'glyph',

  /**
   * Get class name of this icon set.
   * `aeo` will yield `aeoicon`, `glyph` will yield `glyphicon`.
   *
   * @property iconSetClassName
   * @type String
   */  
  iconSetClassName: function() {
    var set = this.get('set');

    Ember.assert("Icon set is valid", setNames.contains(set));
    return set + 'icon';
  }.property('set'),

  /**
   * Get class name for this particular icon.
   * `trash` will yield `aeoicon-trash`, for example.
   *
   * @property iconClassName
   * @type String
   */  
  iconClassName: function() {
    return this.get('iconSetClassName') + '-' + this.get('type');
  }.property('iconSetClassName', 'type')

});
