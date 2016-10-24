// import ApplicationAdapter from './application';
import DS from "ember-data";
// import Firebase from 'firebase';

// export default DS.RESTAdapter.extend({

//   namespace: 'api' 

// });

export default DS.FirebaseAdapter.extend({

  firebase: new Firebase('https://dazzling-heat-7954.firebaseio.com/')

});
