
var BlogView = Backbone.View.extend({
  el:$('blog'),

  initialize:function() {
      this.collection = new Blog(blog);
      this.render();
    },

  render: function() {
    _that = this;
    _.each(this.collection.models, function(item) {
        that.renderBlog(item);
      }, this);
  },

  renderBlog:function(item) {
    var blogView = new BlogView({
      model: item
    });
    this.$el.append(blogView.render().el);
  }
});
