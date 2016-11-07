 function myfunc(){
        var pass1 = document.getElementById("pass1").value;
        var pass2 = document.getElementById("pass2").value;
        if (pass1 != pass2) {
          alert("Passwords Do not match");
          // document.getElementById("pass1").style.borderColor = "#E34234";
          // document.getElementById("pass2").style.borderColor = "#E34234";
          }
          else{

 		$('form.ajax').on('submit', function(){
			var that = $(this),
			url = 'http://54.71.104.127:8080/api/v1/register',
			type = "POST",
			data = {};

		that.find('[name]').each(function(index,value) {
			var that = $(this),
			name = that.attr('name')
			value = that.val();

			data[name] = value;
		});

		$.ajax({
		    url : "http://54.71.104.127:8080/api/v1/register",
			type : "POST",
    		datatype : "application/json",
    		contentType: "text/plain",
    		data : JSON.stringify(data),
			success: function(a){	
				var session = sessionStorage.setItem('access_token', a.access_token)	      
                console.log(a);

				// window.location = "/update/";
				
			},
			error: function(response){
				// alert('Error');
				window.location = "error/";
				
			}
		});

		return false;
		});
 	}
 }