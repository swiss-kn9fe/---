const lastname=document.getElementById('lastname');
const fistname=document.getElementById('firstname');
const topic=document.getElementById('topic');
const email=document.getElementById('email');
const content=document.getElementById('content');
const form=document.getElementById('form');


form.addEventListener("submit",function(e){
	if (lastname.value.length<4)
		{		document.getElementById("1").innerHTML="Фамилия слишком краткая";
				document.getElementById("1").style.color='red';
				e.preventDefault();
		}
		else if (firstname.value.length<4)	
		{		
			document.getElementById("1").innerHTML="Имя слишком краткое";
			document.getElementById("1").style.color='red';
			e.preventDefault();
		}
		else if(email.value.indexOf('.')==-1){ //no need testing for the presence of "@" in the email 'cause the "required" attribute 
				                               // in the html file takes care of that.
				document.getElementById("1").innerHTML="Email неверно";
				document.getElementById("1").style.color='red';
				e.preventDefault();
			}
		else if(content.value.length<10){
				document.getElementById("1").innerHTML="Сообшение слишком краткое";
				document.getElementById("1").style.color='red';
				e.preventDefault();
			}
		else{
				alert("Сообщение отправлено! Мы свяжемся с вами как можно скорее")
					}
});