require.config({
  shim: {
  	"backbone": {
  		deps: ['../components/underscore/underscore', 'jquery'],
  		exports: 'Backbone'
  	}
  },

  paths: {
    jquery: 'vendor/jquery.min',
    backbone: '../components/backbone/backbone'
  }
});
 
require(['backbone', 'models/photo', 'views/photo'], function(Backbone, PhotoModel, PhotoView) {
	var photo = new PhotoModel( {title: "First Photo" } );
	var photoView = new PhotoView({model: photo});

	$('body').append(photoView.render().el);
	console.log(photoView.el)
});
