define(['backbone', 
    'views/photos',
    'collections/photos',
    'router'
], function(Backbone, PhotosView, PhotosCollection, MainRouter) {
var AppView = Backbone.View.extend({
    el: 'body',

    initialize: function() {
        var testCollection = [
            {
                title: "First Photo"
            },

            {
                title: "second Photo"
            },

            {
                title: "Third Photo"
            }
        ]
        new PhotosView({
            collection: new PhotosCollection(testCollection)
        });

        App.route = new MainRouter();
        Backbone.history.start();

    }
});
return AppView;
})