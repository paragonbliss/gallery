define(['backbone'], function(Backbone) {
	var Main = Backbone.Router.extend({
		routes: {
			'': 'index',
			'photos/:id': 'showPhoto'
		},

		index: function() {
			App.Vent.trigger('init');
		},

		showPhoto: function(photoId) {
			App.Vent.trigger('changePhoto', {
				photoId: photoId
			});
		}
	});

	return Main;
});