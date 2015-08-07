
var Person = Backbone.Model.extend({
  defaults: {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: ''
  }
});

var PersonList = Backbone.Collection.extend({
  url: 'http://tiny-lr.herokuapp.com/collections/evernote'

});
