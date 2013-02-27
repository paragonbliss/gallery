define(['backbone', 'views/photos','collections/photos'], function(Backbone, PhotosView, PhotosCollection) {
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
		}
	});
	return AppView;
})