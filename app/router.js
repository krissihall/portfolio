import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("index", {
    path: "/"
  });

  this.resource("works");

  this.resource("work", {
    path: "/work/:work_id"
  });

  this.route("test-form");
});

export default Router;