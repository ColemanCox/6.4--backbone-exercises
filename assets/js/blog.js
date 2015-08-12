var Blog = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: '',
    body: '',
    url: 'http://tiny-lr.herokuapp.com/collections/cc-blog',
    done: false
  }
});

var Bloggy = Backbone.Collection.extend({
  model: Blog,
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/cc-blog'
});

return Bloggy;

