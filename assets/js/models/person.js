
var Person = Backbone.Model.extend({
  idAttributes: '_id',
  defaults: {
    firstName: ' ',
    lastName: ' ',
    emailAddress: ' ',
    phoneNumber: ' '
  },
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/evernote'
});

var jimmy = new Person({
  firstName: 'Jimmy',
  lastName:'Jones',
  emailAddress: 'www.ebay.com',
  phoneNumber: '(870)444-5555'

});
