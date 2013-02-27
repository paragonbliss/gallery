define(['backbone'], function(Backbone) {
	var Photo = Backbone.Model.extend({
		defaults: {
			title: '',
			alt: '',
			height: null,
			width: null
		}
	});
	return Photo;
});