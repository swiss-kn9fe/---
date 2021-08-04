const name=document.getElementById('name');
const password=document.getElementById('password');
const form=document.getElementById('form');


form.addEventListener("submit",function(e){

	 if (password.value!="admin" || name.value!="admin")
		{
			document.getElementById("1").innerHTML="неверный пароль";
			document.getElementById("1").style.color="red";
			e.preventDefault();
		}
		else{
			alert("Секретная встреча состоится в МЭИ в 12: 00 GMT! Ваш пароль для входа - 'веселый'. Увидимся");
		}

});