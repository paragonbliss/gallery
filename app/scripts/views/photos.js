define(['backbone', 'views/photo'], function( Backbone, PhotoView ) {
    var PhotosView = Backbone.View.extend({
        el: $('.photos'),

        initialize: function() {
            this.renderAll();
        },

        renderAll: function() {
            this.$el.empty();
            this.collection.each( this.render, this );
        },

        render: function(photo) {
            var photoView = new PhotoView( {model: photo} )
            this.$el.append(photoView.render().el);
            //console.log("Adding: "  + photo.get('title'));
            return this;
        }
    });
    return PhotosView;
});