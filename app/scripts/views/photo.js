define(['backbone'], function(Backbone) {
	var Photo = Backbone.View.extend({
		className: 'photo',

		render: function() {
			this.$el.append('<h1>' + this.model.get('title') + '</h1>');
			return this;
		}
	});
	return Photo;
});