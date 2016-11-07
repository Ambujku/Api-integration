var x = sessionStorage.getItem('user_id')
function myFunction() 
{
	var fro = $("#start").val();
	var to = $("#end").val();
	var fromtime= new Date(fro);
	var totime= new Date(to);
	// var diff= fromtime - totime;
	if(fromtime < totime){
		$('form.ajax').on('submit', function(){
			var that = $(this),
			type = "POST",
			url = 'http://54.71.104.127:8080/api/v1/'+ x +'/set/goal',
			data = {};
		that.find('[name]').each(function(index,value) {
			var that = $(this),
			name = that.attr('name')
			value = that.val();
			data[name] = value;
			});
		// var x= sessionStorage.getItem('user_id')
		$.ajax({
			type : 'POST',
			crossDomain : true,
			headers: {
				'access_token': sessionStorage.getItem('access_token'),
				},
			url :'http://54.71.104.127:8080/api/v1/'+ x +'/set/goal',
			datatype : 'application/json',
			contentType: 'text/plain',
			data : JSON.stringify(data),
			success: function(a)
			{
				console.log(a);
				window.location = "/success/";
			},
			error: function(response){
			// window.location= "/error/";
			console.log(response);
			alert('error bro');
			}
		});
	return false;
});
	}
	else {
		alert('End Date should be greater than Start Date ');
	}
	return false;
}