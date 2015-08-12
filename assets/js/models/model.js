var Person = Backbone.Model.extend({
  idAttributes: _id,
  defaults: {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: ''
  }

});

var PersonList = Backbone.Collection.extend({
  model: Person,
  url: 'http://tiny-lr.herokuapp.com/collections/cc-evernote'

});
