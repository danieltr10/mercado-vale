
$(function () {

	var $produtos = $('#produtos');

	$('#formNovoProduto').hide();


	$('#enviarForm').on('click', function() {
		$texto = novoProduto(codigoProduto.value, $('#categoriaNegocio').val(), nomeProduto.value, descricaoProduto.value, $("#quantidade").val(), precoProduto.value, $("#tipoNegocio").val());
		$produtos.append($texto);

	});

	$('#botaoAdicionarProduto').on('click', function() {
		$('#formNovoProduto').slideToggle(1000);

	});



});


function novoProduto(codigo, categoria, nome, descricao, quantidade, preco, tipoNegocio) {

	$stringNovoProduto = '<div class="col-sm-6 col-md-4"> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="panel-title" class="nomeProduto">' + nome +' </h3> <p class="categoriaProduto">' + categoria + '</p> </div><div class="panel-body"> <img class="imagemProduto" src="http://loja.aquecedoreserefrigeracao.com.br/imagens/produto-sem-imagem.jpg" alt=""> <div class="caption"> <p class="precoOriginal">R$ ' + (preco*1.2) + '</p> <p class="precoFinal">R$ ' + preco + '</p> <p class="codigoProduto">Codigo: #' + codigo + '</p> <label >Sobre:</label> <div class="caption descricaoProduto">' + descricao + '</div> <p><a class="btn btn-primary" role="button">Editar esta oferta</a> <a href="#" class="btn btn-danger" role="button">Excluir Oferta</a></p> </div> </div> </div>';

	if (tipoNegocio == 'Venda') {

		}
	else {

	}

	return $stringNovoProduto;
}

