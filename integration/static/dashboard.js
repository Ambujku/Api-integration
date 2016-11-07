	$(document).ready(function () {
		var x = sessionStorage.getItem('user_id');
		var result;
	 	$.ajax({
	 		type: 'GET',
	 		crossDomain : true,
			headers: {
				'access_token': sessionStorage.getItem('access_token'),
				},
	 		url : 'http://54.71.104.127:8080/api/v1/' + x + '/get/profile',
	 		dataType: 'json',
	 		success: function (data) {
	 			$('#email').html(data.user_details.email);
	 			$('#fname').html(data.user_details.f_name);
	 			$('#mname').html(data.user_details.m_name);
	 			$('#lname').html(data.user_details.l_name);
	 			$('#gen').html(data.user_details.gender);
	 			$('#dob').html(data.user_details.date_of_birth);
	 			$('#ms').html(data.user_details.marital_status);
	 			$('#as').html(data.user_details.access_status);
	 			$('#mi').html(data.user_details.monthly_post_tax_income);
	 			$('#Pn').html(data.user_details.pan_number);
	 			$('#occ').html(data.user_details.occupation);
	 			$('#mmn').html(data.user_details.mothers_maiden_name);
	 			$('#PS').html(data.user_details.phone_status);

	 			// console.log(data.user_details.email);
	 			},
	 		error: function (data) {
	 			console.log(data);
	 			}

                 });
	 	$.ajax({
	 		type: 'GET',
	 		crossDomain : true,
			headers: {
				'access_token': sessionStorage.getItem('access_token'),
				},
	 		url : 'http://54.71.104.127:8080/api/v1/' + x + '/get/goals',
	 		dataType: 'json',
	 		success: function (data) {
	 			for(var i=0;i<data.goal.length;i++)
	 			{
	 				jQuery('#list').append(data.goal[i].goal_name+'<br />'+data.goal[i].goal_amount+'<br />'+data.goal[i].goal_status_+'<br />'+data.goal[i].goal_start_time+'<br />'+data.goal[i].goal_end_time+'<br />'+data.goal[i].goal_monthly_contribution+'<br />'+'<br />'+'<br />');
	 				console.log(data.goal[i].goal_name);
	 			}
	 			},
	 		error: function (data) {
	 			console.log(data);
	 			}

                 });


	 	
	 	$.ajax({
	 		type: 'GET',
	 		crossDomain : true,
			headers: {
				'access_token': sessionStorage.getItem('access_token'),
				},
	 		url : 'http://54.71.104.127:8080/api/v1/' + x + '/get/kyc',
	 		dataType: 'json',
	 		success: function (data) {
	 			$('#kycs').html(data.kyc_details.kyc_status);
	 			$('#poa').html(data.kyc_details.poa_type);
	 			$('<img src="'+data.kyc_details.doc_profile_pic_url+'">').load(function() {
	 				$(this).width(150).height(150).appendTo('#photo');
	 			});
	 			$('<img src="'+data.kyc_details.doc_pan_url+'">').load(function() {
	 				$(this).width(150).height(150).appendTo('#panimg');
	 			});
	 			// $('#photo').html(data.kyc_details.doc_profile_pic_url);
	 		},
	 		error: function (data) {
	 			console.log(data);
	 			}

                 });

             });