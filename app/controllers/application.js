import Ember from 'ember';

export default Ember.Controller.extend({

  marginTop: 0,
  marginBottom: 0,
  marginRight: 0,
  marginLeft: 0,
  
  /**
   * Set margins for application.
   * Called from application router,
   * which picks up an action invoked via the
   *`adjust=` parameter to the `{{slide-in}}` component,
   * and calls this method,
   * which sets the controller's margin properties,
   * which are then picked up in the application view.
   *
   * @method bodyMargins
   * @param {String} dir direction of slide-in ('top' etc.)
   * @param {Integer} relevant margin in pixels
   */
  bodyMargins: function(dir, margin) {
    this.set("margin" + dir.capitalize(), margin);
  },

  actions: {

    /*
     * Action triggered by custom-input component to check if there
     * are errors associated with the input field on keyUp
     * and clears them out with the errors controller
     */
    clearFieldError: function(errorId){
      // Create custom functionality to remove active error on current input field
      window.console.log(errorId);
    }

  }//actions

});
