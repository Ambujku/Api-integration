<script type="text/javascript">

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
      // complete: function(xhr) {
   //              if (xhr.readyState == 4) {
   //                  if (xhr.status == 201) {
   //                      alert("Created");
   //                  }
   //              } else {
   //                  alert("error");
   //              }
   //          }
      success: function(a){         
                console.log(a);
        // window.location = "/upload/";
        
      },
      error: function(response){
        alert('Error');
        
      }
    });
    return false;
    });
  </script>
