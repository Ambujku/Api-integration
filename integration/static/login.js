    $('form').on('submit', function(){
      var that = $(this),
      url = 'http://54.71.104.127:8080/api/v1/login',
      type = "POST",
      data = {};

    that.find('[name]').each(function(index,value) {
      var that = $(this),
      name = that.attr('name')
      value = that.val();

      data[name] = value;
    });

    $.ajax({
        url : "http://54.71.104.127:8080/api/v1/login",
        type : "POST",
        datatype : "application/json",
        contentType: "text/plain",
        data : JSON.stringify(data),
        success: function(a)
        { 
            var session = sessionStorage.setItem('access_token', a.access_token);
            var id = sessionStorage.setItem('user_id', a.user_id);
            // console.log(a);
            window.location = "/dashboard/";
        
        },
        error: function(response){
         alert('Error');
        
        }
     });
    return false;
    });