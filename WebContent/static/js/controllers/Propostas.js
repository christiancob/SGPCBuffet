class Propostas{
	
	constructor(){
		
		this.propostas = [];
		
		
	}

	
	cadastrarPropostas(event){
		event.preventDefault();
		
		let novaPropostas = {
			nomeCliente: event.target.nomeCliente.value,
			tipoEvento: event.target.dataEvento.value,
			qtdPessoas: event.target.qtdPessoas.value,
			dataEvento: event.target.dataEvento.value,
			decoracaoEntrada: event.target.decoracaoEntrada.value,
			mesaConvidados: event.target.mesaConvidados.value,
			mesaBolo: event.target.mesaBolo.value,
			decoSalao: event.target.decoSalao.value,
			cardapioEntrada: event.target.cardapioEntrada.value,
			servicoQuente: event.target.servicoQuente.value,
			sobremesa: event.target.sobremesa.value,
			bebidas: event.target.bebidas.value,
			outros: event.target.outros.value
		}
		this.propostas.push(novaPropostas);
		console.log(this.propostas);
		this.renderizaListaPropostas();
		
	}
	
	renderizaListaPropostas(){
		let respostaHtmlTabela = "";
		this.propostas.map( (proposta, indice) => {
			respostaHtmlTabela += "<tr class='funcionario'>"
				respostaHtmlTabela += "<td>"+proposta.nomeCliente+"</td>"
				respostaHtmlTabela += "<td>"+proposta.tipoEvento+"</td>"
				respostaHtmlTabela += "<td>"+proposta.qtdPessoas+"</td>"
				respostaHtmlTabela += "<td>"+proposta.dataEvento+"</td>"
				
				respostaHtmlTabela += "<td>"
				respostaHtmlTabela += '<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-search"></span></button>'
				respostaHtmlTabela += '<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-pencil"></span></button>'
				respostaHtmlTabela += '<button type="button" onclick="proposta.deletaUser('+indice+')" class="btn btn-default"><span class="glyphicon glyphicon-trash"></span></button>'
				respostaHtmlTabela += "</td>"
		})
		$('#tabela-propostas').html(respostaHtmlTabela)
	}
	deletaUser(indice){
		this.propotas.splice(indice, 1);
		this.renderizaListaPropostas();
	}
}