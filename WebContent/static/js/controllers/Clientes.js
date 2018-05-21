class Clientes{
	
	constructor(){
		this.clientes = [];
		let msg = "";
		
	}
	
	cadastrarCliente(event){
		event.preventDefault();
		
		let novoCliente = {
				nome: event.target.nome.value,
				email: event.target.email.value,
				telefone: event.target.telefone.value,
				celular: event.target.celular.value,
				cpf: event.target.cpf.value
		}
		this._limpaMsg();
		let filterCliente = this.clientes.filter(cliente => cliente.cpf == novoCliente.cpf);
			if(filterCliente.length == 0){
				
				this.clientes.push(novoCliente);
				this.renderizaListaClientes();
			}else{
				this.msg="CPF já Cadastrado";
				$(".cadastro-funcionario #msgerro").append(`<span class = 'msg alert alert-danger'> ${this.msg}</span>`).fadeIn();
			}
		
		
	}
	
	renderizaListaClientes(){
		let respostaHtmlTabela = "";
		this.clientes.map( (cliente, indice) => {
			respostaHtmlTabela += "<tr class='funcionario'>"
			respostaHtmlTabela += "<td>"+cliente.nome+"</td>"
			respostaHtmlTabela += "<td>"+cliente.email+"</td>"
			respostaHtmlTabela += "<td>"+cliente.telefone+"</td>"
			respostaHtmlTabela += "<td>"+cliente.celular+"</td>"
			
			respostaHtmlTabela += "<td>"
			respostaHtmlTabela += '<button type="button" id="icon-visualiza" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>'
			respostaHtmlTabela += '<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-pencil"></span></button>'
			respostaHtmlTabela += '<button type="button" onclick="clientes.deletaUser('+indice+')" class="btn btn-default"><span class="glyphicon glyphicon-trash"></span></button>'
			respostaHtmlTabela += "</td>"
		})	
		$('#tabela-funcionario').html(respostaHtmlTabela)
	}
	
	deletaUser(indice){
		this.clientes.splice(indice, 1);
		this.renderizaListaClientes();
	}
	_limpaMsg(){
		this.msg = "";
		$(".cadastro-funcionario #msgerro .msg").remove();
		$(".cadastro-funcionario #msgerro").fadeOut();
	}
}