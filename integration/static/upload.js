

    var x= sessionStorage.getItem('user_id');
    // var type = $('select[name=selector]').val();

    $(document).ready(function(e){      
    $('form.form1').on("submit", function(e) {
        e.preventDefault();
        var formdata = new FormData(this); 
        var fileObject = $('#pan');
        var file = fileObject[0].files[0];
        formdata.append('file',file);
        var fileName = file.name;
        if (formdata) {
            $.ajax({

                   url : 'http://54.71.104.127:8080/api/v1/'+ x +'/kyc/pan?filename='+ fileName,
                   headers: {
                    'access_token': sessionStorage.getItem('access_token'),
                    },
                   type : 'POST',
                   data : formdata,
                   processData: false, 
                   contentType: false,
                   success : function(data) {
                       console.log(data);
                       alert('success');
                    },
                   error : function(data) {
                       console.log(data);
                       alert('error');
                   }
            });
                    }
        });            
});
        $(document).ready(function(e){ 
        $('form.form2').on("submit", function(e) {
        e.preventDefault();
        var formdata = new FormData(this);
        var fileObject = $('#add');
        var file = fileObject[0].files[0];
        formdata.append('file',file);
        var fileName2 = file.name;
        var a = document.getElementById("sel").selectedIndex;
        var b = document.getElementById("sel").options;
        var type = b[a].value; 
        if (formdata) {

            $.ajax({
                   url : 'http://54.71.104.127:8080/api/v1/'+ x +'/kyc/'+ type +'?filename='+ fileName2,
                   headers: {
                    'access_token': sessionStorage.getItem('access_token'),
                    },
                   type : 'POST',
                   data : formdata,
                   processData: false, 
                   contentType: false,
                   success : function(data) {
                       console.log(data);
                       alert('success');
                   },
                   error : function(data) {
                       console.log(data);
                       alert('error');
                   }
            });
                    }
        });            
});
           $(document).ready(function(e){ 
                  $('form.form3').on("submit", function(e) {
                  e.preventDefault();
                  var formdata = new FormData(this);
                  var fileObject = $('#cheque');
                  var file = fileObject[0].files[0];
                  formdata.append('file',file);
                  var fileName3 = file.name; 
                  if (formdata) {

            $.ajax({
                   url : 'http://54.71.104.127:8080/api/v1/'+ x +'/kyc/cheque?filename='+ fileName3,
                   headers: {
                    'access_token': sessionStorage.getItem('access_token'),
                    },
                   type : 'POST',
                   data : formdata,
                   processData: false, 
                   contentType: false,
                   success : function(data) {
                       console.log(data);
                       alert('success');
                   },
                   error : function(data) {
                       console.log(data);
                       alert('error');
                   }
            });
        }
        });            
});