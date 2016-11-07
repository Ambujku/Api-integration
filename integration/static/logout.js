	  var clear = document.getElementById('clear');
	  clear.onclick = function () {
	  	alert("You are successfully logged out");
	  	 sessionStorage.clear();
	  	window.location.href = "/login/";

      }