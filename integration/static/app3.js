	  	var x= sessionStorage.getItem('user_id')
		$('form.ajax').on('submit', function(){
			var that = $(this),
			url = 'http://54.71.104.127:8080/api/v1/'+ x +'/update/profile',
			type = "POST",
			data = {};

		that.find('[name]').each(function(index,value) {
			var that = $(this),
			name = that.attr('name')
			value = that.val();

			data[name] = value;
		});

		$.ajax({
		    url : "http://54.71.104.127:8080/api/v1/"+ x +"/update/profile",
		    crossDomain : true,
			headers: {
			 	'access_token': sessionStorage.getItem('access_token'),
			 	},
			type : "POST",
    		datatype : "application/json",
    		contentType: "text/plain",
			data : JSON.stringify(data),
			success: function(a){		      
                console.log(a);
				window.location = "/goal/";
				
			},
			error: function(response){
				window.location= "/error/";
				console.log(response);
			    // alert('error bro');
				
			}
		});
		return false;
		});