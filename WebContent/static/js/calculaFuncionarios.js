var qtdPessoas = $('.campoPessoas');

qtdPessoas.on("input", function(){
	var qtdGarcos = parseInt(qtdPessoas.val()/30);
	var qtdAuxCozinha = parseInt(qtdPessoas.val()/100);
	var chefeCozinha = 1;
	console.log(qtdPessoas.val()/10);
	console.log(qtdGarcos);
	$("#chefeCozinha").text(chefeCozinha);
	$("#qtdAuxCozinha").text(qtdAuxCozinha);
	$("#qtdgarcons").text(qtdGarcos);
	
});