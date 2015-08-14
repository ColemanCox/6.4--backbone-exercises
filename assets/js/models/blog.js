var Blog = Backbone.Model.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/cc-blog',
  idAttribute: '_id',
  defaults: {
    title: '',
    body: ''

  }
});

var Bloggy = Backbone.Collection.extend({
  model: Blog,
  url: 'http://tiny-lr.herokuapp.com/collections/cc-blog'
});

return Backbone.Collection;

