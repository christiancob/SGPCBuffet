class Clientes{
	
	constructor(){
		this.clientes = [];
		
	}
	
	cadastrarCliente(event){
		event.preventDefault();
		
		let cliente = {
				nome: event.target.nome.value,
				email: event.target.email.value,
				telefone: event.target.telefone.value,
				celular: event.target.celular.value
		}
		this.clientes.push(cliente)
		
		this.renderizaListaClientes()
		
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
			respostaHtmlTabela += '<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>'
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
}