class AutenticacaoLogin {
	
	contructor (){
		let email ="";
		let senha ="";
		let msg = "";
	}
	
	autentica(event){
		event.preventDefault();

		
		this.email = event.target.email.value;
		this.senha = event.target.senha.value;
		
		
		const vm = this
		$.getJSON("./json/usuarios.json", function(data) {
			let usuarios = data.usuarios;
			
			vm._limpaMsg()
			let user = usuarios.filter(user => user.email == vm.email);
			
			if(user.length > 0){
				if(user[0].senha == vm.senha){
					window.location.href = "./home.html";

				}else{
					vm.msg = "Senha incorreta!";
					$("#formulario-login #msgerro").append(`<span class = 'msg alert alert-danger'> ${vm.msg}</span>`).fadeIn();
				}
				
			}else{
				
				vm.msg = "Erro ao logar, usuario não encontrado!";
				$("#formulario-login #msgerro").append(`<span class = 'msg alert alert-danger'> ${vm.msg}</span>`).fadeIn();
			}
		})
	}
	_limpaMsg(){
		this.msg = "";
		
		$("#formulario-login #msgerro .alert").remove();
		$("#formulario-login #msgerro .alert-danger").remove();
		$("#formulario-login #msgerro .msg").remove();
		$("#formulario-login #msgerro").fadeOut();
		
	}
	
	
	
}