$(document).ready(function() {
	
	$("#button").on('click',function(){
		var login = $("#login").val();
		var porol = $("#porol").val();
		//var login = parseInt(login);
		//var porol = parseInt(porol);
		if (login == 'admin' && porol == 'admin')
		{
			location.href = 'http://www.yandex.ru';
		}
		else if (login == '' && porol == '')
		{
			alert ('Поля пустые');
		}
		else 
		{
			location.href = 'Error.html';
		}
		
	});
	
})