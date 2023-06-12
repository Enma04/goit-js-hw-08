const form = document.querySelector(".feedback-form");


//------------------------------------------------------------------------
// --------------- ******* --- FUNCIONES --- ******* ---------------------

function almacenar(event) {
	const {
		elements: { email, message }
	} = event.currentTarget;
	//console.log(`Email: ${email.value}, Texto: ${message.value}`);
	localStorage.setItem("feedback-form-state", `{"email": "${email.value}", "message": "${message.value}"}`);
}

function validarSubmit() {
	const datos = JSON.parse(localStorage.getItem("feedback-form-state"));
	if (datos.email === "" || datos.message === "") {
		return alert("Por favor llene todos los espacios!");
	}
	//localStorage.setItem("feedback-form-state", `{"email": "", "message": ""}`);
	alert(`Usted envió: \nEmail = ${datos.email} \nMensaje = ${datos.message}`);
	localStorage.removeItem("feedback-form-state");
}

function cargarDatos() {
	const datos = JSON.parse(localStorage.getItem("feedback-form-state"));
	form.email.value = datos.email;
	form.message.value = datos.message;
}


//------------------------------------------------------------------------
// --------------- ******* --- IMPLEMENTS --- ******* ---------------------

document.addEventListener("DOMContentLoaded", cargarDatos);
form.addEventListener("input", almacenar);
form.addEventListener("submit", validarSubmit);