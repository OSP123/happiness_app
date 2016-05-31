$( document ).ready(function() {
	$("#camera_button").bind('touchstart', function(){
		navigator.camera.getPicture(onSuccess, onFail, 
			{ quality: 50,
    		  destinationType: Camera.DestinationType.FILE_URI,
    		  allowEdit: true,
			  sourceType: Camera.PictureSourceType.CAMERA,
			  encodingType: Camera.EncodingType.JPEG,
			  cameraDirection: 1,
			  saveToPhotoAlbum: true
    	    }
    	);
	})
	
	function onSuccess(imageURI) {
	    var image = document.getElementById('myImage');
	    image.src = imageURI;
	}

	function onFail(message) {
	    alert('Failed because: ' + message);
	}
})



