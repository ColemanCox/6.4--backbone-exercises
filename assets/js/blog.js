var Blog= Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: '',
    body: '',
    done: false
  }

});

var Bloggy = Backbone.Collection.extend({
  model: Blog,
  url: 'http://tiny-lr.herokuapp.com/collections/cc-blog'
   });
    parse: function(data) {
    return data.bloggy;
  }
});
