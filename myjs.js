function start(){

	var jogo = {}
	jogo.timer = setInterval(loop,5);
	function loop(){
		moveJogador();
	}
	jogo.pressionou = [];

	var TECLAS = {
		W:87,
		S:83,
		D:68
	}
	$(document).keydown(function(x){
		jogo.pressionou[x.which] = true;
	});
	$(document).keyup(function(x){
		jogo.pressionou[x.which] = false;
	});
	function  moveJogador(){
		if(jogo.pressionou[TECLAS.W]){
			var topo = parseInt($("#jogador1").css("top"));
			$("#fogo").css("left",200);
			$("#fogo").css("top",topo);
			$("#jogador1").css("top",topo-10);
		}
		if(jogo.pressionou[TECLAS.S]){
			var descer = parseInt($("#jogador1").css("top"));
			$("#fogo").css("left",200);
			$("#fogo").css("top",descer);
			$("#jogador1").css("top",descer+10);
		}
		if(jogo.pressionou[TECLAS.D]){
			soltaDisparo();
		}
	}
			
		function soltaDisparo(){
			$("#fogo").show();
			var topJogador1 = parseInt($("#jogador1").css("top"));
			var posicaoX 	= parseInt($("#fogo").css("left"));
			
				$("#fogo").css({"left":posicaoX+10,"top":topJogador1});
				posicaoX+=25;
				
			
		}
	
}
