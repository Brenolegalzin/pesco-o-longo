document.getElementById("imagem").innerText = "--------\n   |   |  \n _____ \n________  \n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|";
let quant = "\n|";
let score = 0;
document.onscroll = function(){
	document.querySelector("#score").style.top = window.scrollY;
	if(window.innerHeight+window.scrollY-300>=document.documentElement.scrollHeight){
		score += 5;
		quant = quant+"\n|"
		document.getElementById("score").innerText = "Pontos :"+score
		for(let i=0;i<=50; i++){
			document.getElementById("imagem").innerText = "--------\n   |   |  \n _____ \n________  \n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|"+quant;
		}
	}
}
