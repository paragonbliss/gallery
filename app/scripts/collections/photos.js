define(['backbone', 'models/photo'], function(Backbone, PhotoModel) {
	var Photos = Backbone.Collection.extend({
		model: PhotoModel
	});
	return Photos;
});