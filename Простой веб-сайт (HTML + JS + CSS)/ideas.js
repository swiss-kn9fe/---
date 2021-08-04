const email=document.getElementById("email");
const content=document.getElementById("content");
const form=document.getElementById("form");

form.addEventListener("submit",function(e){

	if(email.value.indexOf('.')==-1){
		document.getElementById("1").innerHTML="Не верно email";
		document.getElementById("1").style.color='red';
		e.preventDefault();
	}
	else if(content.value.length<10){
		document.getElementById("1").innerHTML="Сообщение слишком краткое";
		document.getElementById("1").style.color='red';
		e.preventDefault();
	}
	else
		alert("Спасибо за Ваш интерес");
});