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
					this.msg = "Senha incorreta!";
					console.log(this.msg);
					$("#formulario-login #msgerro").append(`<span class = 'msg'> ${this.msg}</span>`).fadeIn();
				}
				
			}else{
				
				this.msg = "Erro ao logar, usuario não encontrado!";
				console.log(this.msg);
				$("#formulario-login #msgerro").append(`<span class = 'msg'> ${this.msg}</span>`).fadeIn();
			}
		})
	}
	_limpaMsg(){
		this.msg = "";
		$("#formulario-login #msgerro").append(`<span class = 'msg'> ${this.msg}</span>`).fadeIn();
		
	}
	
	
}