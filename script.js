document.getElementById("imagem").innerText = "--------\n   |   |  \n _____ \n________  \n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|";
let quant = "\n|";
let score = 0;
document.onscroll = function(){
	document.querySelector("#score").style.top = window.scrollY;
	if(window.scrollY+document.documentElement.scrollHeight>=document.querySelector("html").clientHeight){
		score += 5;
		quant = quant+"\n|"
		document.getElementById("score").innerText = "Pontos :"+score
		for(let i=0;i<=400; i++){
			document.getElementById("imagem").innerText = "--------\n   |   |  \n _____ \n________  \n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|\n|"+quant;
		}
	}
};
